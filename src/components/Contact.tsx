import Link from 'next/link'

export default function Contact() {
  return (
    <section className='bg-white py-32' id='contact'>
      <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Conéctate con nuestro equipo
            </h2>
            <p className='mt-6 text-xl leading-8 text-gray-600'>
              Descubre la esencia de K’affa Kaffeé a través de nuestro talentoso
              equipo. Estamos aquí para responder tus preguntas, compartir
              nuestra pasión por el café y asegurarnos de que tu experiencia con
              nosotros sea excepcional.
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600'>
              ¡Haz clic para hablar directamente con nosotros en WhatsApp y
              formar parte de nuestra comunidad cafetera! 🌟
            </p>
            <div className='mt-10 flex'>
              <Link
                href='#'
                className='rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'
              >
                Entre en contacto <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap max-w-2xl items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <img
                src='/contact-bianca-gasparoto.jpg'
                alt=''
                className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <img
                  src='/contact-pixabay.jpg'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <img
                  src='/contact-viktoria-alipatova.jpg'
                  alt=''
                  className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <img
                  src='/contact-porapak-apichodilok.jpg'
                  alt=''
                  className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
