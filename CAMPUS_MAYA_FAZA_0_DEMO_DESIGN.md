# Campus Maya Koleji - FAZA 0: Demo & Tasarım Prototype
## Kod Olmadan Görsel Tasarım ve Stitch Entegrasyonu

---

## 📌 FAZA 0 Nedir?

**Kod yazmadan**, sadece **görsel design mockup'ları** oluşturarak:
- Admin panelinin tasarımını görmek
- Blog sayfasının layout'unu test etmek
- Veli portalının ekranlarını incelemek
- Sosyal medya dashboard'unu preview etmek
- Kullanıcı deneyimini (UX) simüle etmek

**Amaç:** İstekliler, tasarımcılar ve paydaşlar tarafından onay alındıktan sonra FAZA 1'e başlamak

---

## ⏱️ FAZA 0 Timeline

| Hafta | Görev | Durum |
|-------|-------|-------|
| 1-2 | Stitch de prototype oluştur | 📝 Başlayacak |
| 2-3 | Admin panel screens | 📝 Başlayacak |
| 3-4 | Blog & Galeri sayfaları | 📝 Başlayacak |
| 4-5 | Veli portalı screens | 📝 Başlayacak |
| 5-6 | Sosyal medya dashboard | 📝 Başlayacak |
| 6-7 | Gözden geçirme & feedback | 📝 Başlayacak |
| 7 | Final onay & FAZA 1 hazırlığı | 📝 Başlayacak |

**Toplam:** 7 hafta

---

## 🎨 Stitch Yapısı

### Kullanılacak Stitch Sayfaları:

```
Stitch Project: Campus_Maya_Demo
├── Admin Dashboard
│   ├── Login Sayfası
│   ├── Dashboard Ana Sayfa
│   ├── Blog Yönetim
│   ├── Medya Yönetim
│   ├── Sosyal Medya Control
│   └── Analytics View
│
├── Blog Frontend
│   ├── Ana Sayfa
│   ├── Haber Listesi
│   ├── Haber Detayı
│   └── Galeri
│
├── Veli Portalı
│   ├── Login (2FA mock)
│   ├── Dashboard
│   ├── Öğrenci Seçici
│   ├── Notlar / Grades
│   ├── Devamsızlık
│   ├── Akademik Takvim
│   ├── Bildirimler
│   └── Admin Panel
│
└── Sosyal Medya
    ├── Content Publisher
    ├── Analytics Dashboard
    └── Scheduling Calendar
```

---

## 📱 ADMIN DASHBOARD MOCKUP

### Sayfası 1: Admin Login

```
┌─────────────────────────────────────┐
│                                     │
│         CAMPUS MAYA ADMIN           │
│        Yönetim Paneli Giriş         │
│                                     │
│  ┌──────────────────────────────┐   │
│  │  E-mail                      │   │
│  │  [________________]          │   │
│  └──────────────────────────────┘   │
│                                     │
│  ┌──────────────────────────────┐   │
│  │  Şifre                       │   │
│  │  [________________]          │   │
│  └──────────────────────────────┘   │
│                                     │
│  ☐ Beni Hatırla                    │
│                                     │
│  [   GİRİŞ YAP   ]  [ŞIFRE SIFIRLA]│
│                                     │
│  © Campus Maya 2026                 │
└─────────────────────────────────────┘
```

### Sayfası 2: Admin Dashboard (Ana Sayfa)

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Admin              🔔 🎨 👤 ⋮               │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Dashboard / Hoşgeldiniz Admin                            │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Bu Hafta İstatistikleri                             │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │  📰 Yayınlanan Yazı: 12        │ 📸 Resim: 45      │ │
│  │  👥 Ziyaretçi: 2,450           │ 📱 Sosyal: 320    │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Hızlı Erişim                                        │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │  [ + Yeni Yazı ]  [ + Resim Yükle ]                │ │
│  │  [ Haberler ]     [ Galeri ]                        │ │
│  │  [ Sosyal Med. ]  [ Ayarlar ]                       │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Son 5 Haber                                         │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │ 📌 Okul açılış töreni gerçekleşti    [Düzenle]     │ │
│  │ 📌 Spor günleri başladı              [Düzenle]     │ │
│  │ 📌 Yeni öğretmen atandı              [Düzenle]     │ │
│  │ 📌 Kütüphane yenilendi               [Düzenle]     │ │
│  │ 📌 Sınav takvimi paylaşıldı          [Düzenle]     │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 3: Blog Yönetim

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Admin              🔔 🎨 👤 ⋮               │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ İçerik / Haberler                                        │
│                                                           │
│ [ + Yeni Yazı ]  [🔍 Ara]  [📊 Filtrele]              │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Başlık          │ Kategori    │ Tarih    │ Durum  │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │ Okul açılışı    │ Duyuru      │ 01/04   │ ✓ Yayın│ │
│  │ Spor günleri    │ Etkinlik    │ 02/04   │ ✓ Yayın│ │
│  │ Sınav takvimi   │ Akademik    │ 03/04   │ 🔲 Tasl│ │
│  │ Öğretmen atandı │ Haberler    │ 04/04   │ ✓ Yayın│ │
│  │ Kütüphane       │ Duyuru      │ 05/04   │ 🔲 Tasl│ │
│  │                                                       │ │
│  │  [<<] 1 2 3 [>>]                                     │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 4: Sosyal Medya Publisher

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Admin              🔔 🎨 👤 ⋮               │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Sosyal Medya / Yayınla                                   │
│                                                           │
│  ┌──────────────────┐  ┌──────────────────────────────┐ │
│  │ Blog yazısı seç  │  │ Platformlar                  │ │
│  ├──────────────────┤  ├──────────────────────────────┤ │
│  │ ▼ Okul açılışı   │  │ ☑ Facebook                  │ │
│  │  Spor günleri    │  │ ☑ Instagram                 │ │
│  │  Sınav takvimi   │  │ ☑ Twitter                   │ │
│  │  Öğretmen        │  │ ☑ LinkedIn                  │ │
│  │                  │  │                              │ │
│  └──────────────────┘  └──────────────────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐│
│  │ İçerik Ön İzlemesi                                  ││
│  ├──────────────────────────────────────────────────────┤│
│  │                                                       ││
│  │ FACEBOOK:                                            ││
│  │ "Okulumuzun açılış töreni gerçekleşti! 🎓"          ││
│  │ #okul #açılış #eğitim                               ││
│  │                                                       ││
│  │ INSTAGRAM:                                           ││
│  │ "Yeni döneme hazır mıyız? 📚✨ #campusmaya #yeni"  ││
│  │                                                       ││
│  │ TWITTER:                                             ││
│  │ "Açılış töreninde heyecanlı kalabalık! @CampusMaya" ││
│  │                                                       ││
│  └──────────────────────────────────────────────────────┘│
│                                                           │
│  [  AI ile Oluştur  ] [ Hemen Yayınla ] [ Zamanla ]   │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 5: Media Yönetim

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Admin              🔔 🎨 👤 ⋮               │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Medya / Resimler                                         │
│                                                           │
│ [ 📤 Yükle ]  [🔍 Ara]  [ ▢ ▢ ▢ Görünüm ]            │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  [Resim 1]  [Resim 2]  [Resim 3]  [Resim 4]        │ │
│  │  Okul Yeni  Kütüphane  Bahçe      Sınıf             │ │
│  │                                                       │ │
│  │  [Resim 5]  [Resim 6]  [Resim 7]  [Resim 8]        │ │
│  │  Spor       Yemekhane  Sanat      Kütüphane         │ │
│  │                                                       │ │
│  │  [Resim 9]  [Resim10]  [Resim11]  [+ Yükle]        │ │
│  │  Oyun Alan  Koridor    Bahçe                        │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│ Seçili Resim: Okul Resmi                                │
│ ┌──────────────────┐                                    │
│ │  [Resim Preview] │  AI Açıklama:                     │
│ │                  │  "Okulun modern mimarisi ve bahçeş│
│ │                  │   görünümü. Açılış günü çekilen   │
│ │                  │   bu resim, öğrenci ve öğretmen   │
│ │                  │   toplulukları sunuyor."           │
│ │                  │                                     │
│ │                  │  Hashtag: #okul #eğitim #modern  │
│ │                  │                                     │
│ │                  │  [ ✓ Onayla ] [ Düzenle ]        │
│ │                  │                                     │
│ └──────────────────┘                                    │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 📱 VELİ PORTALI MOCKUP

### Sayfası 1: Veli Login

```
┌─────────────────────────────────────┐
│                                     │
│      CAMPUS MAYA VELİ PORTALI       │
│                                     │
│  ┌──────────────────────────────┐   │
│  │  E-mail                      │   │
│  │  [________________]          │   │
│  └──────────────────────────────┘   │
│                                     │
│  ┌──────────────────────────────┐   │
│  │  Şifre                       │   │
│  │  [________________]          │   │
│  └──────────────────────────────┘   │
│                                     │
│  ☐ Beni Hatırla                    │
│                                     │
│  [   GİRİŞ YAP   ]                 │
│                                     │
│ İlk giriş mi? [Kayıt Ol]            │
│                                     │
│ © Campus Maya 2026                  │
└─────────────────────────────────────┘
```

### Sayfası 2: Veli Dashboard

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Veli Portal       🔔 📧 👤                 │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Hoşgeldiniz, Mehmet Yılmaz!                             │
│                                                           │
│  Çocuğum:  [▼ Ali Yılmaz - 8-A]                         │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Bu Ayın Özeti                                       │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │  Not Ortalaması: 85/100 (İyi)                       │ │
│  │  Devamsızlık: 2 (Normalin altında)                  │ │
│  │  Yaklaşan Sınav: 3 (3 Nisan, 10 Nisan)              │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Hızlı Bağlantılar                                   │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │  [📊 Notları Gör]  [📅 Takvimi Gör]                │ │
│  │  [📱 Bildirimler]  [💬 Öğretmene Mesaj]            │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Son Duyurular                                       │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │ 📌 Okul picnic'i 15 Nisan'da yapılacaktır           │ │
│  │ 📌 Sınav takvimi güncellenmiştir                    │ │
│  │ 📌 Yeni beslenme menüsü başladı                     │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 3: Notlar Görüntüleme

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Veli Portal       🔔 📧 👤                 │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Ali Yılmaz (8-A) / Notları                              │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Dersler                      Not Ort.    Durum      │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │ Matematik                      90        Başarılı   │ │
│  │  ├─ Sınav 1                    85                   │ │
│  │  ├─ Sınav 2                    92                   │ │
│  │  ├─ Ödev 1                     95                   │ │
│  │  └─ Katılım                    88                   │ │
│  │                                                       │ │
│  │ Türkçe                         82        Başarılı   │ │
│  │  ├─ Sınav 1                    80                   │ │
│  │  ├─ Sınav 2                    84                   │ │
│  │  └─ Proje                      82                   │ │
│  │                                                       │ │
│  │ İngilizce                      78        Orta       │ │
│  │  ├─ Sınav 1                    75                   │ │
│  │  ├─ Sınav 2                    81                   │ │
│  │  └─ Katılım                    78                   │ │
│  │                                                       │ │
│  │ Fen Bilgisi                    88        Başarılı   │ │
│  │ Din Kültürü                    85        Başarılı   │ │
│  │ Sosyal Bilgiler                86        Başarılı   │ │
│  │                                                       │ │
│  │ GENEL ORTALAMA: 85/100                              │ │
│  │                                                       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│ [ Grafik Görünüm 📊 ]  [ PDF İndir ]                   │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 4: Devamsızlık Takvimi

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Veli Portal       🔔 📧 👤                 │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Ali Yılmaz (8-A) / Devamsızlık                          │
│                                                           │
│ Nisan 2026                                              │
│ ┌──────────────────────────────────────────────────┐    │
│ │ Pz  Salı  Çarş  Perş  Cuma  Ctesi Pazar        │    │
│ ├──────────────────────────────────────────────────┤    │
│ │              1    2    3    4    5               │    │
│ │  6    7    8    9   10   11   12                │    │
│ │ 13   14   15   16   17   18   19                │    │
│ │ 20   21   22   23   24   25   26                │    │
│ │ 27   28   29   30   [E]  [D]  [T]                │    │
│ │                                                   │    │
│ │ ✓ Devam  E Enjekte  D Diş  T Tartışıldı        │    │
│ │                                                   │    │
│ └──────────────────────────────────────────────────┘    │
│                                                           │
│ Bu Ay Devamsızlık:      2 (Ortalama altında)            │
│ Toplam Devamsızlık:     5 (Bu öğretim yılında)         │
│                                                           │
│ ⚠️ 10 devamsızlıktan sonra veli bilgilendirilecektir    │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 5: Akademik Takvim

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Veli Portal       🔔 📧 👤                 │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Akademik Takvim / 2025-2026 Öğretim Yılı               │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│  │ [▼ Tümünü Göster] [📅 Takvimi İndir]              │ │
│ ├─────────────────────────────────────────────────────┤ │
│ │                                                       │ │
│ │ 🎓 OKUL AÇILIŞ                          01 Eylül   │ │
│ │ 📖 BAHAR SINAVI (1. Dönem)              15-19 Ara  │ │
│ │ 🏖️  KIŞ TATİLİ                          20 Ara - 5 Oca│
│ │ 📖 BAHAR SINAVI (2. Dönem)              10-14 Nisan│
│ │ 🌸 UZUN HAFTA TATİLİ                    21-24 Nisan│
│ │ 📖 FİNAL SINAVI                         26-30 Mayıs│
│ │ ☀️  YAZĂ TATİLİ                         01 Haziran│
│ │                                                       │ │
│ │ 🎯 ÖNEMLİ TARİHLER                                 │ │
│ │ 📅 Sınıf Öğretmeni Görüşmesi             03 Nisan  │ │
│ │ 📅 Veli Toplantısı                       10 Nisan  │ │
│ │ 📅 Spor Günleri                          17 Nisan  │ │
│ │ 📅 Sanat Sergisi                         24 Nisan  │ │
│ │                                                       │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 💻 BLOG FRONTEND MOCKUP

### Sayfası 1: Ana Sayfa

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya            🏠 Haberler Galeri İletişim      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  [HERO BANNER - Okulun Büyük Resmi]                 │ │
│ │                                                       │ │
│ │         Campus Maya Koleji'ne Hoşgeldiniz!          │ │
│ │     Eğitimde Mükemmelliğe Giden Yolculuk             │ │
│ │                                                       │ │
│ │              [ Daha Fazla Bilgi Ol ]                 │ │
│ │                                                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                           │
│ Güncel Haberler                                          │
│ ┌────────────────┐  ┌────────────────┐  ┌────────────┐ │
│ │ [Resim]        │  │ [Resim]        │  │ [Resim]    │ │
│ │                │  │                │  │            │ │
│ │ Okul Açılış    │  │ Spor Günleri   │  │ Sınav      │ │
│ │ Töreni         │  │ Başladı        │  │ Takvimi    │ │
│ │                │  │                │  │            │ │
│ │ 01 Nisan 2026  │  │ 02 Nisan 2026  │  │ 03 Nisan   │ │
│ │ [Oku]          │  │ [Oku]          │  │ [Oku]      │ │
│ └────────────────┘  └────────────────┘  └────────────┘ │
│                                                           │
│ Daha Eski Haberler >>>                                  │
│                                                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Duyurular                                            │ │
│ │ • Yeni öğretmen atandı                               │ │
│ │ • Kütüphane yenilendi                                │ │
│ │ • Beslenme menüsü güncellendi                        │ │
│ │ • İletişim saatleri değiştirildi                     │ │
│ │                                                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 2: Haberler Listesi

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya            🏠 Haberler Galeri İletişim      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Tüm Haberler                    [🔍 Ara]  [Filtrele ▼]  │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Resim] │ Okul Açılış Töreni                       │ │
│ │         │ 01 Nisan 2026                             │ │
│ │         │ Bu yıl açılış töreninde tüm öğrenci,    │ │
│ │         │ öğretmen ve velilerimiz bir araya...     │ │
│ │         │ [Devamını Oku ➜]                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Resim] │ Spor Günleri Başladı                     │ │
│ │         │ 02 Nisan 2026                             │ │
│ │         │ Okulumuzun yıllık spor günlerinin...     │ │
│ │         │ [Devamını Oku ➜]                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Resim] │ Sınav Takvimi Açıklandı                  │ │
│ │         │ 03 Nisan 2026                             │ │
│ │         │ Bu dönem sınav takvimi aşağıdaki gibidir:│ │
│ │         │ [Devamını Oku ➜]                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ [Resim] │ Yeni Öğretmen Atandı                     │ │
│ │         │ 04 Nisan 2026                             │ │
│ │         │ Okulumuzda yeni matematik öğretmeni...   │ │
│ │         │ [Devamını Oku ➜]                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                           │
│ [◀ Önceki]  1 2 3 4 5  [Sonraki ▶]                      │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

### Sayfası 3: Haber Detayı

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya            🏠 Haberler Galeri İletişim      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ ◀ Haberler / Okul Açılış Töreni                        │
│                                                           │
│ Okul Açılış Töreni Büyük Coşkuyla Gerçekleşti!        │
│                                                           │
│ 01 Nisan 2026  |  Yayın Tarihi  |  Kategori: Duyuru    │
│ Yazar: Müdür Yardımcısı                                │
│                                                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │  [BÜYÜK HABER RESMİ]                                │ │
│ │                                                       │ │
│ │  Açılış töreninde heyecanlı bir atmosfer vardı...   │ │
│ │                                                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                           │
│ Yazı İçeriği:                                            │
│ Lorem ipsum dolor sit amet, consectetur adipiscing      │
│ elit. Bu yıl açılış törenimizde tüm öğrenci, öğretmen │
│ ve velilerimiz bir araya gelerek müthiş bir gün        │
│ yaşadık. Konuşmalar, sergiler ve kültürel etkinlikler │
│ programda yer aldı.                                     │
│                                                           │
│ [Video Gömülü]                                          │
│                                                           │
│ Açılış töreninin başarıyla tamamlanması ve öğrencile-  │
│ rimizin heyecanı, yeni öğretim yılının iyi başlayacağı │
│ konusunda bizi umutlandırdı...                          │
│                                                           │
│ #okul #açılış #eğitim #campusmaya                       │
│                                                           │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Sosyal Medyada Paylaş:                              │ │
│ │ [f] [📷] [🐦] [in]                                  │ │
│ │                                                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                           │
│ Benzer Haberler:                                         │
│ • Spor Günleri Başladı                                  │ │
│ • Sınav Takvimi Açıklandı                               │ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 🖼️ GALERİ MOCKUP

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya            🏠 Haberler Galeri İletişim      │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Galeri / Okulumuzdan Fotoğraflar                        │
│                                                           │
│ [Albüm Seç ▼]  [🔍 Ara]  [ ▢ ▢ ▢ Görünüm ]            │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │[Resim1] │  │[Resim2] │  │[Resim3] │              │
│  │Açılış    │  │Spor Gün  │  │Kütüphane │              │
│  │Töreni    │  │leri      │  │          │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │[Resim4] │  │[Resim5] │  │[Resim6] │              │
│  │Bahçe     │  │Sınıf     │  │Yemekhane │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │[Resim7] │  │[Resim8] │  │[Resim9] │              │
│  │Sanat     │  │Oyun Alan │  │Koridor   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                           │
│ [◀ Önceki]  1 2 3 4  [Sonraki ▶]                         │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 📊 SOSYAL MEDYA DASHBOARD MOCKUP

```
┌──────────────────────────────────────────────────────────┐
│ Campus Maya Admin              🔔 🎨 👤 ⋮               │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ Sosyal Medya / Analytics                                │
│                                                           │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Bu Hafta Performansı                               │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                     │ │
│  │ FACEBOOK         INSTAGRAM       TWITTER    LINKEDIN│
│  │ 👥 2,450         📷 1,280        🐦 450     🔗 320 │
│  │ 💬 320           ❤️ 890         🔄 180     💬 95  │
│  │ 🔄 145           💬 210         💚 240     👥 80  │
│  │                                                     │ │
│  └────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌────────────────────────────────────────────────────┐ │
│  │ En İyi Performans Gösteren Yazı                    │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                     │ │
│  │ 🥇 "Okul açılış töreni" - 450 interaksiyon         │ │
│  │ 🥈 "Spor günleri başladı" - 320 interaksiyon       │ │
│  │ 🥉 "Sınav takvimi" - 280 interaksiyon              │ │
│  │                                                     │ │
│  └────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Engagement Trendi (7 gün)                          │ │
│  │  📈 Chart placeholder                              │ │
│  │     [Lineer grafik gösterilecek]                   │ │
│  │                                                     │ │
│  └────────────────────────────────────────────────────┘ │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## ✅ FAZA 0 CHECKLIST

### Tasarım Onayı:
- [ ] Admin Dashboard onaylandı
- [ ] Blog Frontend onaylandı
- [ ] Veli Portalı onaylandı
- [ ] Sosyal Medya Dashboard onaylandı
- [ ] Renk şeması onaylandı
- [ ] Typography onaylandı
- [ ] Mobile responsive tasarım onaylandı

### Stitch Prototype:
- [ ] Login sayfası yapıldı
- [ ] Dashboard sayfaları yapıldı
- [ ] Blog sayfaları yapıldı
- [ ] Veli portalı sayfaları yapıldı
- [ ] Sosyal medya sayfaları yapıldı
- [ ] Navigation kuruldu
- [ ] Mobile view test edildi

### Gözden Geçirme:
- [ ] İç ekip review
- [ ] Müdür/Yönetim review
- [ ] Veliler feedback aldı
- [ ] Öğretmenler feedback aldı
- [ ] Design revisions tamamlandı

### FAZA 1 Hazırlığı:
- [ ] Final design approved
- [ ] Spesifikasyonlar dokumentlendi
- [ ] Ekip briefing yapıldı
- [ ] Development ortamı hazırlandı
- [ ] Stitch export ready
- [ ] Code standards hazır

---

## 📝 STITCH'TE YAPILACAKLAR

```
Campus Maya Demo Project (Stitch)
│
├── 📱 Pages
│   ├── Admin
│   │   ├── Login
│   │   ├── Dashboard
│   │   ├── Blog Manager
│   │   ├── Media Manager
│   │   ├── Social Media Publisher
│   │   └── Analytics
│   │
│   ├── Blog Frontend
│   │   ├── Homepage
│   │   ├── News List
│   │   ├── News Detail
│   │   └── Gallery
│   │
│   ├── Veli Portalı
│   │   ├── Login
│   │   ├── Dashboard
│   │   ├── Grades View
│   │   ├── Attendance Calendar
│   │   ├── Academic Calendar
│   │   ├── Notifications
│   │   └── Admin Panel
│   │
│   └── Sosyal Medya
│       ├── Publisher
│       ├── Analytics
│       └── Calendar
│
├── 🎨 Design System
│   ├── Colors
│   ├── Typography
│   ├── Components
│   └── Icons
│
├── 🔗 Navigation
│   ├── Main Menu
│   ├── Sidebar
│   └── Mobile Menu
│
└── 📊 Interactions
    ├── Click States
    ├── Animations
    ├── Forms
    └── Modals
```

---

## 🎯 FAZA 0 SONUCU

**Başarıyla Tamamlandığında:**

✅ Tüm paydaşlar tasarımları görmüş ve onaylamış
✅ UX/UI sorunları tanımlanmış ve düzeltilmiş
✅ Brand identity tutarlı uygulanmış
✅ Responsive design test edilmiş
✅ FAZA 1 için clear spesifikasyonlar
✅ Ekip hazır ve motivated
✅ Code generation hazır

---

## 🚀 FAZA 1'E GEÇIŞ

**Eğer FAZA 0'da onay alındı ise:**

1. Stitch tasarımından code generate et
2. GitHub'a push et
3. Development ortamında test et
4. Backend API'leri geliştir
5. Frontend componentleri refine et
6. Integration testing başla
7. Production deployment hazırla

---

**FAZA 0: Demo & Tasarım = 7 hafta**
**FAZA 1: Development = 6 hafta (after approval)**

Tasarımlar Stitch ile interaktif olacak, hiç code içermeyecek!

İstekliler, veliler ve öğretmenler çalışan prototype görebilecekler.

---

## 📞 İletişim

FAZA 0 sırasında gelen feedback'ler:
- FAZA 0'da uygulanır
- Dokümante edilir
- FAZA 1 spesifikasyonuna eklenir

**FAZA 0 = Design Validation**  
**FAZA 1 = Development**
