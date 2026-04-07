export function HomeHeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-90 scale-105"
          alt="Campus building with greenery"
          src="https://images.unsplash.com/photo-1427504494785-cdcff169cfe0?w=1440&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/20">
          {/* Label */}
          <span className="inline-block py-1 px-4 mb-6 bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-full">
            Hikayemiz
          </span>

          {/* Title */}
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter leading-tight">
            Geleceği Bir Tohum Gibi <span className="text-secondary">Büyütüyoruz.</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
            Maya Academic Forest kampüsümüzde, çocukların doğal merakını akademik mükemmeliyetle birleştiren bir eğitim yolculuğuna çıktık. Her çocuk bir dünya, her dünya bir gelecektir.
          </p>
        </div>
      </div>
    </section>
  )
}
