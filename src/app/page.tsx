import { TopNavBar } from '@/components/sections/TopNavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { MissionVisionSection } from '@/components/sections/MissionVisionSection'
import { CoreValuesSection } from '@/components/sections/CoreValuesSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="bg-background text-on-surface">
        <HeroSection />
        <MissionVisionSection />
        <CoreValuesSection />
        <TeamSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}
