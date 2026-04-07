export function Team() {
  const team = [
    {
      name: 'Dr. Selen Maya',
      role: 'Kurucu Direktör',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
      quote: 'Eğitim, bir ruhu uyandırma sanatıdır.'
    },
    {
      name: 'Kerem Yılmaz',
      role: 'Akademik Koordinatör',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      quote: 'Merakın olduğu yerde sınır yoktur.'
    },
    {
      name: 'Ayşe Demir',
      role: 'Okul Öncesi Başkanı',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
      quote: 'Oyun, çocuğun en ciddi işidir.'
    },
    {
      name: 'Murat Can',
      role: 'Spor Koordinatörü',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
      quote: 'Sağlam kafa, doğada gelişir.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Akademik Kadromuz
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Alanında uzman, vizyoner eğitimcilerle tanışın
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 h-80 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-headline text-lg font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-xs mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm italic">
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
