export function About() {
  return (
    <section id="hakkimizda" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Biz Kimiz?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Campus Maya Koleji, çocukların potansiyelini keşfetmelerine ve gelişmelerine yardımcı olmak için 1998 yılında kurulmuştur.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Maya Academic Forest felsefesiyle, doğa ile iç içe bir öğrenme ortamında, akademik başarı ile yaşam becerilerini birleştiriyoruz.
            </p>
            <button className="px-8 py-3 bg-primary text-white font-headline font-bold rounded-md hover:bg-primary-600 transition-colors">
              Vizyonumuzu Keşfet
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523050487828-f4ae9016b025?w=600&q=80"
              alt="Campus"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
