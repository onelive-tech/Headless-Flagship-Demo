import CategorySection from '~/components/CategorySection'
import FeaturedSection from '~/components/FeaturedSection'
import HeroVideo from '~/components/HeroVideo';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  

  return (
    <div className="bg-white">

      <HeroVideo />

      <main>
        <CategorySection />
        <FeaturedSection />
      </main>

    </div>
  )
}
