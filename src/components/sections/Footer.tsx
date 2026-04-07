import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Copyright */}
          <div className="font-body text-xs uppercase tracking-widest text-gray-600">
            © 2024 Campus Maya Koleji. Tüm Hakları Saklıdır.
          </div>

          {/* Links */}
          <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
            <Link
              href="#privacy"
              className="font-body text-xs uppercase tracking-widest text-gray-600 hover:text-primary hover:underline transition-all"
            >
              Gizlilik
            </Link>
            <Link
              href="#terms"
              className="font-body text-xs uppercase tracking-widest text-gray-600 hover:text-primary hover:underline transition-all"
            >
              Şartlar
            </Link>
            <Link
              href="#career"
              className="font-body text-xs uppercase tracking-widest text-gray-600 hover:text-primary hover:underline transition-all"
            >
              Kariyer
            </Link>
            <Link
              href="#contact"
              className="font-body text-xs uppercase tracking-widest text-gray-600 hover:text-primary hover:underline transition-all"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
