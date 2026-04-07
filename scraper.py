#!/usr/bin/env python3
"""
Campus Maya Koleji - Content Scraper
Extracts news, images, and content from campusmayakoleji.com
"""

import json
import os
import re
from datetime import datetime
from pathlib import Path
from typing import Optional
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup


class CampusMayaScraper:
    def __init__(self, base_url: str = "https://www.campusmayakoleji.com"):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        self.content = {
            'posts': [],
            'pages': [],
            'gallery': [],
            'metadata': {
                'scraped_at': datetime.now().isoformat(),
                'source': base_url
            }
        }
        self.images_dir = Path('scraped_content/images')
        self.images_dir.mkdir(parents=True, exist_ok=True)

    def get_page(self, url: str) -> Optional[BeautifulSoup]:
        """Fetch and parse a page"""
        try:
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            return BeautifulSoup(response.content, 'html.parser')
        except Exception as e:
            print(f"❌ Error fetching {url}: {e}")
            return None

    def download_image(self, image_url: str) -> Optional[str]:
        """Download image and return local path"""
        try:
            if not image_url:
                return None

            # Make absolute URL
            image_url = urljoin(self.base_url, image_url)

            response = self.session.get(image_url, timeout=10)
            response.raise_for_status()

            # Generate filename
            parsed = urlparse(image_url)
            filename = Path(parsed.path).name or f"image_{len(os.listdir(self.images_dir))}.jpg"

            filepath = self.images_dir / filename
            filepath.write_bytes(response.content)

            return f"images/{filename}"
        except Exception as e:
            print(f"⚠️  Could not download image {image_url}: {e}")
            return None

    def clean_text(self, text: str) -> str:
        """Clean HTML from text"""
        if not text:
            return ""
        text = re.sub(r'<[^>]+>', '', text)
        text = re.sub(r'\s+', ' ', text).strip()
        return text

    def scrape_news(self):
        """Scrape news/blog posts"""
        print("📰 Scraping news articles...")

        # Try common news page URLs
        news_urls = [
            f"{self.base_url}/haberler",
            f"{self.base_url}/news",
            f"{self.base_url}/blog",
            f"{self.base_url}/haber",
            f"{self.base_url}/"
        ]

        for news_url in news_urls:
            soup = self.get_page(news_url)
            if not soup:
                continue

            # Look for article containers (common selectors)
            articles = soup.find_all(
                class_=re.compile(r'(post|article|news|haber)', re.I)
            )

            if not articles:
                # Try alternative selectors
                articles = soup.find_all(['article', 'div.post', 'div.news-item'])

            for article in articles:
                try:
                    # Extract title
                    title_elem = article.find(['h1', 'h2', 'h3', 'a.title'])
                    title = title_elem.get_text().strip() if title_elem else "No Title"

                    # Extract URL
                    url = article.find('a')
                    article_url = url['href'] if url and url.get('href') else ""
                    article_url = urljoin(self.base_url, article_url)

                    # Extract date
                    date_elem = article.find(['time', 'span.date', 'span.published'])
                    date = date_elem.get_text().strip() if date_elem else None

                    # Extract excerpt
                    excerpt_elem = article.find(['p', 'div.excerpt'])
                    excerpt = excerpt_elem.get_text().strip() if excerpt_elem else ""

                    # Extract image
                    img = article.find('img')
                    image_url = img['src'] if img and img.get('src') else None
                    image_path = self.download_image(image_url) if image_url else None

                    # Scrape full article if URL exists
                    content = ""
                    if article_url and article_url != self.base_url:
                        article_page = self.get_page(article_url)
                        if article_page:
                            content_elem = article_page.find(
                                class_=re.compile(r'(content|body|article-content)', re.I)
                            )
                            content = content_elem.get_text().strip() if content_elem else excerpt

                    if title and title != "No Title":
                        self.content['posts'].append({
                            'title': title,
                            'excerpt': excerpt[:200] if excerpt else "",
                            'content': content,
                            'url': article_url,
                            'image': image_path,
                            'date': date,
                            'slug': re.sub(r'[^a-z0-9]+', '-', title.lower()),
                            'category': 'News'
                        })
                        print(f"✅ {title}")

                except Exception as e:
                    print(f"⚠️  Error parsing article: {e}")
                    continue

            if self.content['posts']:
                break

    def scrape_gallery(self):
        """Scrape gallery/images"""
        print("🖼️  Scraping gallery...")

        gallery_urls = [
            f"{self.base_url}/galeri",
            f"{self.base_url}/gallery",
            f"{self.base_url}/foto",
            f"{self.base_url}/resimler"
        ]

        for gallery_url in gallery_urls:
            soup = self.get_page(gallery_url)
            if not soup:
                continue

            # Find gallery items
            gallery_items = soup.find_all(
                class_=re.compile(r'(gallery|galeri|image|photo)', re.I)
            )

            if not gallery_items:
                gallery_items = soup.find_all(['img'])

            for item in gallery_items[:50]:  # Limit to 50 images
                try:
                    img = item if item.name == 'img' else item.find('img')
                    if not img or not img.get('src'):
                        continue

                    image_url = img['src']
                    image_path = self.download_image(image_url)

                    caption = (
                        img.get('alt') or
                        img.get('title') or
                        item.find('figcaption') or
                        ""
                    )
                    caption = caption.get_text() if hasattr(caption, 'get_text') else str(caption)

                    if image_path:
                        self.content['gallery'].append({
                            'image': image_path,
                            'caption': caption,
                            'url': image_url
                        })
                        print(f"✅ {Path(image_path).name}")

                except Exception as e:
                    print(f"⚠️  Error saving gallery image: {e}")

            if self.content['gallery']:
                break

    def scrape_pages(self):
        """Scrape static pages"""
        print("📄 Scraping static pages...")

        page_urls = [
            ('/', 'Home'),
            ('/hakkimizda', 'About'),
            ('/iletisim', 'Contact'),
            ('/about', 'About'),
        ]

        for path, name in page_urls:
            soup = self.get_page(urljoin(self.base_url, path))
            if not soup:
                continue

            # Extract main content
            content_elem = soup.find(
                class_=re.compile(r'(content|main|body)', re.I)
            ) or soup.find('main')

            if content_elem:
                text = content_elem.get_text().strip()
                if text:
                    self.content['pages'].append({
                        'name': name,
                        'path': path,
                        'content': text[:1000]  # First 1000 chars
                    })
                    print(f"✅ {name} ({len(text)} chars)")

    def save_results(self):
        """Save scraped content to JSON"""
        output_file = Path('scraped_content/data.json')
        output_file.parent.mkdir(parents=True, exist_ok=True)

        # Create summary
        summary = {
            'total_posts': len(self.content['posts']),
            'total_images': len(self.content['gallery']),
            'total_pages': len(self.content['pages']),
            'scraped_at': self.content['metadata']['scraped_at'],
            'source': self.content['metadata']['source']
        }

        # Save data
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(self.content, f, ensure_ascii=False, indent=2)

        # Save summary
        with open('scraped_content/summary.json', 'w', encoding='utf-8') as f:
            json.dump(summary, f, ensure_ascii=False, indent=2)

        print(f"\n✅ Saved to {output_file}")
        print(f"✅ Summary saved to scraped_content/summary.json")
        return summary

    def run(self):
        """Run all scrapers"""
        print(f"\n🚀 Starting scraper for {self.base_url}\n")

        self.scrape_news()
        self.scrape_gallery()
        self.scrape_pages()

        summary = self.save_results()

        print("\n📊 Summary:")
        print(f"  Posts: {summary['total_posts']}")
        print(f"  Images: {summary['total_images']}")
        print(f"  Pages: {summary['total_pages']}")
        print(f"\n✨ Scraping complete!")


if __name__ == '__main__':
    scraper = CampusMayaScraper()
    scraper.run()
