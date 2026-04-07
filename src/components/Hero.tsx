export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1427504494785-cdcff169cfe0?w=1920&q=80"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full backdrop-blur-sm">
              Campus Maya Koleji
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Geleceği Bir Tohum Gibi <span className="text-secondary">Büyütüyoruz</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Maya Academic Forest kampüsümüzde, çocukların doğal merakını akademik mükemmeliyetle birleştiren bir eğitim yolculuğuna çıktık.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-primary font-headline font-bold rounded-md hover:bg-gray-100 transition-colors">
              Randevu Al
            </button>
            <button className="px-8 py-3 bg-white/20 text-white font-headline font-bold rounded-md border border-white hover:bg-white/30 transition-colors backdrop-blur-sm">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
