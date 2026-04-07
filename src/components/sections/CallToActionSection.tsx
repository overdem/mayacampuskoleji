'use client'

import { useRouter } from 'next/navigation'

export function CallToActionSection() {
  const router = useRouter()

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-primary-container rounded-[16px] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg
              className="w-[200px] h-[200px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Content */}
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-primary-container mb-6 relative z-10">
            Maya Ailesine Katılın
          </h2>
          <p className="text-on-primary-container/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Çocuğunuzun eğitim yolculuğunu bir keşif hikayesine dönüştürmek için
            kampüsümüzü ziyaret edin.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button
              onClick={() => router.push('/contact')}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Randevu Al
            </button>
            <button
              onClick={() => router.push('/haberler')}
              className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Programları İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
