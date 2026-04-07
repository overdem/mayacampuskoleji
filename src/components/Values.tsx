export function Values() {
  const values = [
    {
      title: 'Akademik Titizlik',
      description: 'En yüksek standartlarda eğitim programları',
      icon: '📚',
      color: 'bg-blue-50'
    },
    {
      title: 'Doğa ile Bütünleşik',
      description: 'Maya Academic Forest felsefesiyle öğrenme',
      icon: '🌿',
      color: 'bg-green-50'
    },
    {
      title: 'Topluluk Ruhu',
      description: 'Güçlü veli-okul-öğrenci bağı',
      icon: '🤝',
      color: 'bg-purple-50'
    },
    {
      title: 'Yaratıcılık',
      description: 'Hayal gücünü kısıtlamayan ortam',
      icon: '✨',
      color: 'bg-yellow-50'
    },
    {
      title: 'Dürüstlük',
      description: 'Etik duruş ve karakter gelişimi',
      icon: '💎',
      color: 'bg-red-50'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Temel Değerlerimiz
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Her kararımızda bize rehberlik eden ilkelerimiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className={`${value.color} p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all`}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-headline text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
