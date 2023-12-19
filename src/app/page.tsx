import { Features, Hero, Logos, Testimonials } from '#/widgets'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between px-4 sm:px-12 lg:px-24 overflow-hidden'>
      <Hero />
      <Features />
      <Testimonials />
      <Logos />
    </div>
  )
}
