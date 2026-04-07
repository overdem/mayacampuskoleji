import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-600">Campus Maya</h1>
            <div className="space-x-4">
              <Link href="/admin/login" className="btn btn-primary">
                Admin Giriş
              </Link>
              <Link href="/parent/login" className="btn btn-secondary">
                Veli Giriş
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Campus Maya Koleji
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Eğitim, iletişim ve yönetim için entegre platform
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Blog Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">
                📰 Haberler
              </h3>
              <p className="text-gray-600 mb-4">
                Son haberler, duyurular ve etkinlikler hakkında bilgi alın
              </p>
              <Link href="/haberler" className="btn btn-primary">
                Haberleri Oku
              </Link>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">
                🖼️ Galeri
              </h3>
              <p className="text-gray-600 mb-4">
                Okul etkinlikleri ve anılarından foto koleksiyonunu keşfedin
              </p>
              <Link href="/galeri" className="btn btn-secondary">
                Galeriye Git
              </Link>
            </div>

            {/* Parent Portal Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-accent-600 mb-4">
                👨‍👩‍👧 Veli Portalı
              </h3>
              <p className="text-gray-600 mb-4">
                Öğrenci notları, devamsızlık ve haberlaşma için güvenli giriş
              </p>
              <Link href="/parent/login" className="btn btn-accent">
                Portala Giriş
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Campus Maya</h4>
              <p className="text-gray-400">Modern eğitim teknolojileri</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Sayfalar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Anasayfa</Link></li>
                <li><Link href="/haberler" className="hover:text-white">Haberler</Link></li>
                <li><Link href="/galeri" className="hover:text-white">Galeri</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Giriş</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/admin/login" className="hover:text-white">Admin</Link></li>
                <li><Link href="/parent/login" className="hover:text-white">Veli</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <p className="text-gray-400">
                Email: info@campusmaya.com<br />
                Tel: +90 (XXX) XXX-XXXX
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Campus Maya Koleji. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
