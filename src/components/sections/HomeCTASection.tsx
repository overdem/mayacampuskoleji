'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export function HomeCTASection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-md p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg className="w-[200px] h-[200px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6">
              Maya Ailesine Katılın
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Çocuğunuzun eğitim yolculuğunu bir keşif hikayesine dönüştürmek için kampüsümüzü ziyaret edin.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/contact')}
                className="bg-white text-primary hover:bg-gray-50"
              >
                Randevu Al
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => router.push('/haberler')}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Programları İncele
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
