export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Campus Maya</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Çocukların potansiyelini keşfetmelerine ve gelişmelerine yardımcı olmak için kurulan modern bir okul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galeri</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">İletişim</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Tel:</strong> +90 (262) XXX XXXX
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <strong>Email:</strong> info@campusmaya.com
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Adres:</strong> Kocaeli, Türkiye
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Campus Maya Koleji. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Şartlar</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
