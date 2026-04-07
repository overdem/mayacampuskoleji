'use client'

import Image from 'next/image'

const teamMembers = [
  {
    name: 'Dr. Selen Maya',
    role: 'Kurucu Direktör',
    quote: '"Eğitim, bir ruhu uyandırma sanatıdır."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkrZvu4TIjoT8SSb854_G2h99b_pB55HU2QdN5LmgG05ZoKZg6C9PLMKQNjSYDlkpZlNC4n3Dwp1NFg3yAEKWD9lDE6KVQqd5g-WWdJnF2Cp71G48YIbbqJt3FcIt0e9O3oPmUNuud_aM2GpKQ79_P7Yax3M6XW76jO7YFWODYmc8K_iu-I5cvk_dOYtYkI3ACdrGlT4Ke3ZaVEfIupe9Q17mqLvHrzfqulDdp0wXA3c7bidyKOi2nXJvnmlBAc7viszZsswadiBvy',
  },
  {
    name: 'Kerem Yılmaz',
    role: 'Akademik Koordinatör',
    quote: '"Merakın olduğu yerde sınır yoktur."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7zqhrZni4qVGD-cP5JswtcrD4O_4aVXklBSSRL6Qwu5VGcMzlOOvxGQo2HKEQFNUsN0h_yP8kRBa9cVjDVBm2RNuFi6g_wazcl2MSmICTjOV81gHHygpgiYxlSUzNXdTUsiw1LcWJ63LPaZG904CXMRw2yvCU2b1pqRqgsJ-B8CQFJbVmy88QQxaPcwBzSyiiP571X51YfwLbbyJGZZ3bLHjNwWb8pXrCIJvjkXPZJgyZdlTuj4z88HEsx1HVt1FpAj6fA0RJhlwE',
  },
  {
    name: 'Ayşe Demir',
    role: 'Okul Öncesi Bölüm Başkanı',
    quote: '"Oyun, çocuğun en ciddi işidir."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsI6xYBORzoaawfrlq2xQ7ypYfEFYeNjTvS6B0HFCN-uelQsjPiibot1Z1-KvAhz2zVCMkYM99BdlUxbXVESl0ao4X0HctGGxNbOcnfZXmHXdRtZMr1_EKNWG0joDTt4DP8pETPd1cex9KumRrcMwm3WbSrXJiiPqQcEwija4gZLSO-RyW-0bAVouX7_cmtDQz903PrzrPUi1Z3STPtTzGGyY2gjhTgZjMBqBe5x2kN1rTIEHF0G9fjBoT93cedCzoZjNhe82C-ihT',
  },
  {
    name: 'Murat Can',
    role: 'Spor ve Yaşam Koordinatörü',
    quote: '"Sağlam kafa, doğada ve hareketle gelişir."',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-KvlRBSL8fXho3QIeCjoSbOQ-NGStwuPkefiJsyfrhTUUCZsWbIwGNwNfm9Is_yuqCcFPNTqk1SkTychEMpOpx2ELrnxPuY8UPTR1ZuimzGif1rOSiuJij3r5a3_1ztGN-d2MiWhN-mJWYpnj9ny3NmFjXvu-wKPBfNJ9M8wpzUyrIzTgckSi3piZzoR6ywXs9E2VIfW-gtIji2yxhnh6MDD7ncuNuaNsqIjU1rYPHx_v-xXFyMXejlsdGdamk3qpakEcfRNUlw_T',
  },
]

export function TeamSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
              Akademik Kadromuz
            </h2>
            <p className="text-on-surface-variant text-lg">
              Alanında uzman, çocuk psikolojisini merkezine alan vizyoner
              eğitimcilerle tanışın.
            </p>
          </div>
          <a
            href="#"
            className="text-primary font-semibold flex items-center gap-2 group"
          >
            Tüm Ekibi Görüntüle
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" strokeWidth="2" stroke="currentColor" />
            </svg>
          </a>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={member.name}
                  src={member.image}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {/* Info */}
              <h4 className="font-headline text-xl font-bold text-on-surface mb-1">
                {member.name}
              </h4>
              <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-on-surface-variant text-sm italic">{member.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
