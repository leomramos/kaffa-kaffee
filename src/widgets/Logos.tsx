import Image from 'next/image'
import Link from 'next/link'

export default function Logos() {
  return (
    <section className='py-24 sm:py-32 relative'>
      <div
        className='absolute left-0 top-0 -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block'
        aria-hidden='true'
      >
        <div
          className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-yellow-600 to-amber-200 opacity-30'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2'>
          <div className='mx-auto w-full max-w-xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
              Contamos con el apoyo de grandes compañías
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Con más de 15 años ofreciendo nuestros servicios, tenemos el
              orgullo de contar con la confianza de diversas empresas conocidas
              a nivel nacional e internacional.
            </p>
            <div className='mt-8 flex items-center gap-x-6'>
              <Link
                href='#product'
                className='rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'
              >
                Compra ahora
              </Link>
              <Link
                href='#contact'
                className='text-sm font-semibold text-gray-900'
              >
                Entra en contacto
              </Link>
            </div>
          </div>
          <div className='mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8'>
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/tuple-logo-gray-900.svg'
              alt='Tuple'
              width={105}
              height={48}
            />
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/reform-logo-gray-900.svg'
              alt='Reform'
              width={104}
              height={48}
            />
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg'
              alt='SavvyCal'
              width={140}
              height={48}
            />
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/laravel-logo-gray-900.svg'
              alt='Laravel'
              width={136}
              height={48}
            />
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/transistor-logo-gray-900.svg'
              alt='Transistor'
              width={158}
              height={48}
            />
            <Image
              className='max-h-12 w-full object-contain object-left'
              src='https://tailwindui.com/img/logos/statamic-logo-gray-900.svg'
              alt='Statamic'
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
