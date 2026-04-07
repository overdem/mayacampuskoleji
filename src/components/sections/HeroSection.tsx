export function HeroSection() {
  return (
    <section className="relative min-h-[716px] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-90 scale-105"
          alt="Modern academic building with floor-to-ceiling windows surrounded by lush greenery"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiLlmfNJh0gkGdr1uJb7uk1NOnHjgR9jur0pja48-YSpKh_-pbZK5sxFdeekx4n0vL1KQrTO1N3rHYBSKX5hv-jeKNuT81PkfryennOwYtoAQrqnv8CGxSjH5YFEwbLsCXGI9M53wuf2KicVhCFWu3kWj6RWdQq_XfK-bET1WoLIwXv4xrmb2_g7XXt_6nsUiYEEMKnBEEkmgPDRODjx1dg4rjjt9RRA81s05wfXjki5Lh5HufJJ_SPR-df_12LsjVe_Q-GWdASB74"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl bg-surface/10 backdrop-blur-md p-10 md:p-16 rounded-[16px] border border-white/20">
          <span className="inline-block py-1 px-4 mb-6 bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase rounded-full">
            Hikayemiz
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
            Geleceği Bir Tohum Gibi{' '}
            <span className="text-primary-fixed">Büyütüyoruz.</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed font-body max-w-lg">
            Maya Academic Forest kampüsümüzde, çocukların doğal merakını akademik
            mükemmeliyetle birleştiren bir eğitim yolculuğuna çıktık. Her çocuk bir
            dünya, her dünya bir gelecektir.
          </p>
        </div>
      </div>
    </section>
  )
}
