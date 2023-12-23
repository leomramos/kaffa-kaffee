import { LinkButton, ParallaxWrapper, RevealWrapper } from '#/components'
import { cn } from '#/utils'
import Image from 'next/image'
import Link from 'next/link'

const Shapes = () => (
  <>
    <svg
      className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
      aria-hidden='true'
    >
      <defs>
        <pattern
          id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
          width={200}
          height={200}
          x='50%'
          y={-1}
          patternUnits='userSpaceOnUse'
        >
          <path d='M.5 200V.5H200' fill='none' />
        </pattern>
      </defs>
      <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
        <path
          d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
          strokeWidth={0}
        />
      </svg>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
      />
    </svg>
    <div
      className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
      aria-hidden='true'
    >
      <div
        className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-orange-300 to-amber-400 opacity-30'
        style={{
          clipPath:
            'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
        }}
      />
    </div>
  </>
)

const gridCols = [
  {
    custom:
      'ml-auto sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80',
    images: [{ src: '/coffee-brigitte-tohm.jpg', alt: '' }],
  },
  {
    custom: 'mr-auto sm:mr-0 sm:pt-52 lg:pt-36',
    images: [
      { src: '/coffee-chevanon-photography.jpg', alt: '' },
      { src: '/coffee-elina-sazonova.jpg', alt: '' },
    ],
  },
  {
    custom: 'sm:pt-0',
    images: [
      { src: '/coffee-lood-goosen.jpg', alt: '' },
      { src: '/coffee-olof-nyman.jpg', alt: '' },
    ],
  },
]

export default function Hero() {
  return (
    <main className='max-w-full relative isolate'>
      <Shapes />
      <div className='mx-auto max-w-7xl px-6 pb-32 pt-28 sm:pt-36 lg:px-8 lg:pt-20'>
        <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
          <div className='relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
            <RevealWrapper>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                ¡Aroma y sabor que conquistan paladares!
              </h1>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <p className='mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                Descubre la excelencia en cada taza con nuestro café arábico
                100%. Proveniente de las regiones más selectas, nuestro café
                ofrece un sabor distintivo y aroma cautivador. Sumérgete en la
                experiencia de calidad que solo el auténtico café arábico puede
                brindar. ¡Bienvenido al placer del café excepcional!
              </p>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <div className='mt-10 flex items-center gap-x-6'>
                <LinkButton href='#product'>Compra ahora</LinkButton>
                <Link
                  href='#contact'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Entra en contacto
                </Link>
              </div>
            </RevealWrapper>
          </div>
          <ParallaxWrapper flipped intensity={70}>
            <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
              {gridCols.map(({ custom, images }, i) => (
                <div
                  key={i}
                  className={cn(custom, 'w-44 flex-none space-y-8 pt-32')}
                >
                  {images.map((image, j) => (
                    <RevealWrapper key={j} delay={0.1 * i}>
                      <div className='relative'>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                          width={175}
                          height={265}
                        />
                        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                      </div>
                    </RevealWrapper>
                  ))}
                </div>
              ))}
            </div>
          </ParallaxWrapper>
        </div>
      </div>
    </main>
  )
}
