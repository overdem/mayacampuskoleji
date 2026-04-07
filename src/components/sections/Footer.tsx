import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-12 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
          © 2024 Campus Maya Koleji. Tüm Hakları Saklıdır.
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <Link
            href="#privacy"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Gizlilik Politikası
          </Link>
          <Link
            href="#terms"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Kullanım Şartları
          </Link>
          <Link
            href="#career"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Kariyer
          </Link>
          <Link
            href="#sitemap"
            className="font-body text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            Site Haritası
          </Link>
        </div>
      </div>
    </footer>
  )
}
