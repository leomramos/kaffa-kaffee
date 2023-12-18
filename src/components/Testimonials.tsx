import { StarIcon } from '@heroicons/react/20/solid'

export default function Testimonials() {
  return (
    <section className='px-6 py-24 sm:py-32 lg:px-8'>
      <figure className='mx-auto max-w-2xl relative'>
        <div
          className='absolute left-[calc(25%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(25%-18rem)] lg:left-16 lg:top-[calc(50%-30rem)] xl:left-[calc(25%-24rem)]'
          aria-hidden='true'
        >
          <div
            className='aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-orange-500 to-amber-100 opacity-20'
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <p className='sr-only'>5 out of 5 stars</p>
        <div className='flex gap-x-1 text-primary-500'>
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
        </div>
        <blockquote className='mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9'>
          <p>
            “K’affa Kaffeé ha elevado mi experiencia cafetera. El café Premium
            es mi favorito; su tueste oscuro y las notas achocolatadas crean una
            taza intensa y satisfactoria. ¡Simplemente delicioso!”
          </p>
        </blockquote>
        <figcaption className='mt-10 flex items-center gap-x-6'>
          <img
            className='h-12 w-12 rounded-full bg-gray-50'
            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
            alt=''
          />
          <div className='text-sm leading-6'>
            <div className='font-semibold text-gray-900'>María García</div>
            <div className='mt-0.5 text-gray-600'>Amante del Café</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
