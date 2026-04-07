export function CoreValuesSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
            Temel Değerlerimiz
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Eğitim felsefemizin köklerini oluşturan, her kararımızda bize rehberlik
            eden ilkelerimiz.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Value 1: Academic Rigor */}
          <div className="md:col-span-4 bg-surface-container rounded-[16px] p-8 flex flex-col justify-end relative overflow-hidden group hover:-translate-y-2 transition-transform">
            <svg
              className="w-32 h-32 absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">
              Akademik Titizlik
            </h3>
            <p className="text-on-surface-variant text-sm">
              En yüksek standartlarda eğitim programları ile zihinsel derinlik.
            </p>
          </div>

          {/* Value 2: Nature Integration (Large) */}
          <div className="md:col-span-5 md:row-span-2 bg-secondary-container/30 rounded-[16px] p-10 flex flex-col justify-center text-center relative overflow-hidden hover:-translate-y-2 transition-transform">
            <div className="mb-6 mx-auto w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-on-secondary-container"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="font-headline text-3xl font-bold text-secondary mb-4">
              Doğa ile Bütünleşik
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Maya Academic Forest felsefesiyle, öğrenmeyi dört duvarın dışına taşıyor
              ve ekolojik okuryazarlığı her seviyede teşvik ediyoruz.
            </p>
          </div>

          {/* Value 3: Community */}
          <div className="md:col-span-3 bg-surface-container-high rounded-[16px] p-8 flex flex-col relative overflow-hidden hover:-translate-y-2 transition-transform">
            <svg
              className="w-10 h-10 text-primary mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h3 className="font-headline text-xl font-bold text-primary mb-2">
              Topluluk
            </h3>
            <p className="text-on-surface-variant text-sm">
              Güçlü veli-okul-öğrenci bağı ile sıcak bir aile ortamı.
            </p>
          </div>

          {/* Value 4: Creativity */}
          <div className="md:col-span-4 bg-primary-fixed/20 rounded-[16px] p-8 flex items-center gap-6 relative overflow-hidden hover:-translate-y-2 transition-transform">
            <svg
              className="w-14 h-14 text-primary flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
            </svg>
            <div>
              <h3 className="font-headline text-xl font-bold text-primary mb-1">
                Yaratıcılık
              </h3>
              <p className="text-on-surface-variant text-sm">
                Hayal gücünü kısıtlamayan esnek öğrenme alanları.
              </p>
            </div>
          </div>

          {/* Value 5: Integrity */}
          <div className="md:col-span-3 bg-surface-container-lowest border border-outline-variant/20 rounded-[16px] p-8 flex flex-col justify-end hover:-translate-y-2 transition-transform">
            <h3 className="font-headline text-xl font-bold text-primary mb-2">
              Dürüstlük
            </h3>
            <p className="text-on-surface-variant text-sm">
              Etik duruş ve karakter gelişimi önceliğimizdir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
