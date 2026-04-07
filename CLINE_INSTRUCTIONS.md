# Campus Maya Koleji - Cline İçin Proje Briefing

## 🎯 Proje Özeti

Campus Maya Koleji'nin website'ini yeniden yapmak ve **3 ana bileşen** eklemek istiyoruz:

### FAZA 1: İçerik Yönetimi Sistemi
- Blog yazı yönetimi
- Medya/resim storage ve CDN
- Claude AI ile otomatik metin etiketleme (açıklama + hashtag)

### FAZA 2: Sosyal Medya Otomasyonu
- Facebook, Instagram, Twitter, LinkedIn entegrasyonu
- Claude AI ile platform-spesifik içerik üretimi
- Scheduling ve otomatik yayınlama
- Analytics dashboard

### FAZA 3: Veli & Öğrenci Portalı
- Kimlik doğrulama (2FA)
- Öğrenci notları ve devamsızlık takibi
- Akademik takvim
- Bildirim sistemi

---

## 📚 Dokümantasyon

### OKUMASI ZORUNLU:
1. **README.md** ← BAŞLA BURADAN (5 dakika)
2. **QUICK_START_GUIDE.md** ← Hızlı başlangıç (15 dakika)

### REFERANS KİTAPLARI:
- **CAMPUS_MAYA_DIJITAL_PLAN.md** - Proje planı ve timeline
- **CAMPUS_MAYA_TEKNIK_IMPLEMENTASYON.md** - API, DB, kod örnekleri
- **CAMPUS_MAYA_ICERIК_MIGRASYONU.md** - Mevcut siteden içerik çıkarma

### KOD DOSYALARI:
- **campus_maya_scrapers.py** - Hazır Python scraper'lar

---

## 🚀 İLK GÖREVLER (Sırasıyla)

### 1. MEVCUT SITEYI ANALIZ ET
```bash
# Şu sayfaları ziyaret et:
https://www.campusmayakoleji.com/
https://www.campusmayakoleji.com/haberler (veya /news, /blog)
https://www.campusmayakoleji.com/galeri (veya /gallery)
https://www.campusmayakoleji.com/iletisim

# Sorular:
- Kaç tane haber/blog yazısı var?
- Galeri var mı? Ne kadar resim?
- Statik sayfalar neler? (Hakkımızda, İletişim, vb)
- Site teknolojisi ne? (WordPress, custom PHP, etc)
```

### 2. İÇERİĞİ ÇIKAR
```bash
# campus_maya_scrapers.py'ı kullan:
python3 campus_maya_scrapers.py

# Şu çıkacak:
# - content_export.json (haberler, galeriler, sayfalar)
# - summary.json (istatistikler)
# - scraped_content/ klasörü (resimler)
```

### 3. VERİYİ TEMIZLE
- HTML kodu temizle
- Tarihlerini standardize et
- Slug'ları oluştur
- Eksik alanları doldur

### 4. BACKEND KURUP
```
Database: PostgreSQL
API: Node.js + Express
ORM: TypeORM veya Sequelize
```

Tablo şemaları **CAMPUS_MAYA_TEKNIK_IMPLEMENTASYON.md** içinde

### 5. FRONTEND GELIŞTIR
```
Framework: React 18+ veya Next.js
State: Redux Toolkit
Styling: Tailwind CSS
```

Component yapısı dokümanda var

### 6. SOSYAL MEDYA ENTEGRE
- Facebook Graph API
- Meta (Instagram) API
- Twitter API v2
- LinkedIn API

Kod örnekleri dokümanda

### 7. VELI PORTALINI EKLE
- Auth + 2FA
- Student grades view
- Attendance tracking
- Calendar

---

## 🔗 ÖNEMLİ TEKNOLOJILER

- **AI:** Claude API (Anthropic)
- **Backend:** Node.js + Express
- **Frontend:** React
- **Database:** PostgreSQL
- **Storage:** AWS S3
- **CDN:** CloudFlare
- **Deployment:** Docker

---

## 📊 BAŞARI KRİTERLERİ

- ✅ Tüm içerik (haberler, resimler) yeni sisteme aktarıldı
- ✅ Blog sistem çalışıyor
- ✅ Sosyal medya otomasyonu 4 platform'da aktif
- ✅ Veli portalı canlı
- ✅ Arama işlemi hızlı
- ✅ SEO optimize
- ✅ Mobile responsive
- ✅ %99.5 uptime

---

## 📝 SORUMLULUKLAR

1. **Backend Developer:**
   - Database kurup
   - API endpoints
   - Third-party integrations (Claude, FB, Twitter, etc)
   - Authentication
   
2. **Frontend Developer:**
   - Admin paneli
   - Veli portalı
   - Blog sayfaları
   - Responsive design

3. **DevOps:**
   - Server setup
   - Docker containerization
   - CI/CD pipeline
   - Monitoring

4. **İçerik Uzmanı:**
   - Mevcut siteyi scrape etme
   - Veri temizleme
   - İçerik doğrulama
   - Blog yazıları yazma

---

## 🎯 TIMELINE

- **Hafta 1-6:** FAZA 1 (Blog + Medya + AI tags)
- **Hafta 7-11:** FAZA 2 (Sosyal medya otomasyonu)
- **Hafta 12-19:** FAZA 3 (Veli portalı)

---

## 💬 ÖNEMLI NOTLAR

1. **Kodlamaya başlamadan** tüm dokümantasyonu oku
2. **Mevcut site** basit HTML olabilir veya WordPress olabilir
3. **Scraper** site yapısına göre customize gerekebilir
4. **API credentials** güvenli bir şekilde sakla (.env)
5. **Database** production'a geçmeden staging'de test et

---

## 📞 DOSYA REFERANSLARI

| Dosya | Kimler İçin | Okuma Süresi |
|-------|-----------|--------------|
| README.md | Herkes | 5 dakika |
| QUICK_START_GUIDE.md | İlk gün | 15 dakika |
| CAMPUS_MAYA_DIJITAL_PLAN.md | PM, Yönetici | 45 dakika |
| CAMPUS_MAYA_TEKNIK_IMPLEMENTASYON.md | Dev, DevOps | 1 saat |
| CAMPUS_MAYA_ICERIК_MIGRASYONU.md | İçerik, PM | 45 dakika |
| campus_maya_scrapers.py | İçerik, Dev | Direktly kullan |

---

## ✅ HAZIRLIK CHECKLIST

- [ ] README.md okundu
- [ ] QUICK_START_GUIDE.md okundu
- [ ] Mevcut site analiz edildi
- [ ] Ekip roller atandı
- [ ] Development ortamı kuruldu
- [ ] Repository oluşturuldu (GitHub/GitLab)
- [ ] Database planlama tamamlandı
- [ ] API spec agreed
- [ ] Design mockup'ları oluşturuldu

---

## 🚀 İLK 24 SAAT PLAN

**Saat 1-2:** README + QUICK_START_GUIDE
**Saat 2-3:** Siteyı analiz et
**Saat 4-5:** Scraper'ı çalıştır
**Saat 6-8:** Veriyi temizle
**Saat 8-24:** Backend/Frontend setup

---

Sorular olursa dokümantasyonda cevaplarını bul!
Hızlı başla, düzenli ilerle, regular raporla.

**Go! 🚀**
