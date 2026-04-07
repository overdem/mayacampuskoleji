import { TopNavBar } from '@/components/sections/TopNavBar'
import { HomeHeroSection } from '@/components/sections/HomeHeroSection'
import { HomeMissionVisionSection } from '@/components/sections/HomeMissionVisionSection'
import { HomeCoreValuesSection } from '@/components/sections/HomeCoreValuesSection'
import { HomeTeamSection } from '@/components/sections/HomeTeamSection'
import { HomeCTASection } from '@/components/sections/HomeCTASection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="bg-white text-gray-900">
        <HomeHeroSection />
        <HomeMissionVisionSection />
        <HomeCoreValuesSection />
        <HomeTeamSection />
        <HomeCTASection />
      </main>
      <Footer />
    </>
  )
}
