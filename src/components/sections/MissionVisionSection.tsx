export function MissionVisionSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <div className="bg-surface-container-lowest p-12 rounded-[16px] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2">
            <div>
              <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mb-8">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 5v6h6v-6h-6zm0-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2V5a2 2 0 012-2zm-11 4h6v6H2V7z" />
                </svg>
              </div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Misyonumuz
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Sorgulayan, yaratıcı düşünen ve etik değerlere sahip bireyler
                yetiştirmek için ilham verici, doğa ile iç içe bir öğrenme
                ekosistemi sunuyoruz. Her öğrencinin potansiyelini en üst düzeye
                çıkarmak temel görevimizdir.
              </p>
            </div>
            <div className="h-2 w-24 bg-primary rounded-full"></div>
          </div>

          {/* Vision Card */}
          <div className="bg-primary p-12 rounded-[16px] text-white flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h2 className="font-headline text-3xl font-bold mb-6">Vizyonumuz</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Eğitimde yenilikçi yaklaşımların öncüsü olarak, küresel ölçekte
                tanınan ve mezunlarının dünyayı daha iyi bir yer yapma tutkusuyla
                hareket ettiği bir "Akademik Orman" modeli oluşturmak.
              </p>
            </div>
            <div className="h-2 w-24 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
