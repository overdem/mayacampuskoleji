export function HomeMissionVisionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-gray-200 rounded-md p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-1.1-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h2 className="font-headline text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Sorgulayan, yaratıcı düşünen ve etik değerlere sahip bireyler yetiştirmek için ilham verici, doğa ile iç içe bir öğrenme ekosistemi sunuyoruz. Her öğrencinin potansiyelini en üst düzeye çıkarmak temel görevimizdir.
              </p>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full mt-6"></div>
          </div>

          {/* Vision Card */}
          <div className="bg-primary text-white rounded-md p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h2 className="font-headline text-2xl font-bold mb-4">Vizyonumuz</h2>
              <p className="text-white/80 leading-relaxed text-base">
                Eğitimde yenilikçi yaklaşımların öncüsü olarak, küresel ölçekte tanınan ve mezunlarının dünyayı daha iyi bir yer yapma tutkusuyla hareket ettiği bir "Akademik Orman" modeli oluşturmak.
              </p>
            </div>
            <div className="h-1 w-20 bg-white/30 rounded-full mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
