'use client'

const teamMembers = [
  {
    name: 'Dr. Selen Maya',
    role: 'Kurucu Direktör',
    quote: '"Eğitim, bir ruhu uyandırma sanatıdır."',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    name: 'Kerem Yılmaz',
    role: 'Akademik Koordinatör',
    quote: '"Merakın olduğu yerde sınır yoktur."',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Ayşe Demir',
    role: 'Okul Öncesi Bölüm Başkanı',
    quote: '"Oyun, çocuğun en ciddi işidir."',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    name: 'Murat Can',
    role: 'Spor ve Yaşam Koordinatörü',
    quote: '"Sağlam kafa, doğada ve hareketle gelişir."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
]

export function HomeTeamSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Akademik Kadromuz
          </h2>
          <p className="text-gray-600 max-w-2xl text-base">
            Alanında uzman, çocuk psikolojisini merkezine alan vizyoner eğitimcilerle tanışın.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-gray-200">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={member.name}
                  src={member.image}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="font-headline text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-xs mb-2 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm italic">{member.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
