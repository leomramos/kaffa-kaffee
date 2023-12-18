import { Features, Hero, Logos, Testimonials } from '#/components'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between px-24'>
      <Hero />
      <Features />
      <Testimonials />
      <Logos />
    </div>
  )
}
