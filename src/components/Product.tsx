'use client'

import { RadioGroup } from '@headlessui/react'
import { QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const flavors = [
  {
    name: 'Supremo',
    tip: 'Perfecto para tomarlo con bocadillos ligeros.',
    description:
      'Explora la floralidad distintiva de nuestro café Supremo de Cajamarca. Con cuerpo medio, una elevada vena de acidez y un toque de amargor, este café resalta con su perfil floral, ofreciendo una experiencia única para los amantes del café refinado.',
  },
  {
    name: 'Gourmet',
    tip: 'Marida a la perfección con postres a base de especias.',
    description:
      'Experimenta la excelencia con nuestro café Gourmet de tueste medio oscuro. Además de las notas de chocolate, disfruta de matices dulces como panela, chancaca y especias como clavo de olor, canela y cardamomo, que elevan tu experiencia cafetera.',
  },
  {
    name: 'Premium',
    tip: 'Acompáñalo con postres de chocolate o quesos intensos.',
    description:
      'Deléitate con nuestro café comercial Premium de tueste oscuro, revelando notas achocolatadas que realzan su intensidad. Un café con cuerpo, color y amargor equilibrados, destacando la esencia del chocolate amargo.',
  },
  {
    name: 'Especialidad',
    tip: 'Ideal para tomarlo con frutas frescas o panes de cereales.',
    description:
      'Sumérgete en lo extraordinario con nuestro café de Especialidad de tueste medio. Descubre un equilibrio perfecto entre notas afrutadas y un ligero toque de chocolate, destacando matices de frutas, cítricos y un sutil toque floral para una experiencia única.',
  },
]

const sizes = [
  { name: '250g', tip: 'Ideal para nuestro cafecito diario.' },
  { name: '1kg', tip: 'Cantidad perfecta para la familia.' },
]

const types = [
  { name: 'Molido', tip: 'Práctico para una preparación rápida.' },
  {
    name: 'En grano',
    tip: 'Sabor penetrante. Es necesário un molinillo.',
  },
]

const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0])
  const [selectedType, setSelectedType] = useState(types[0])

  return (
    <section
      id='product'
      className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 relative min-h-screen'
    >
      <div
        className='absolute inset-x-0 top-48 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-amber-600 to-yellow-300'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {/* Product details */}
      <div className='lg:max-w-lg lg:self-end'>
        <div className='mt-4'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Café 100% Arábico
          </h1>
        </div>

        <section aria-labelledby='information-heading' className='mt-4'>
          <h2 id='information-heading' className='sr-only'>
            Product information
          </h2>

          <div className='flex items-center'>
            <p className='text-lg text-gray-900 sm:text-xl'>27,60 PEN</p>

            <div className='ml-4 border-l border-gray-300 pl-4'>
              <h2 className='sr-only'>Reviews</h2>
              <div className='flex items-center'>
                <div>
                  <div className='flex items-center'>
                    {[0, 1, 2, 3, 4].map(rating => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-yellow-400'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden='true'
                      />
                    ))}
                  </div>
                  <p className='sr-only'>{reviews.average} out of 5 stars</p>
                </div>
                <p className='ml-2 text-sm text-gray-500'>
                  {reviews.totalCount} reviews
                </p>
              </div>
            </div>
          </div>

          <div className='mt-4 space-y-6'>
            <p className='text-base text-gray-500'>
              {selectedFlavor.description}
            </p>
          </div>
        </section>
      </div>

      {/* Product image */}
      <div className='lg:sticky lg:top-0 mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
        <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg'>
          <img
            src='/kaffa-koffee.jpg'
            alt=''
            className='mx-auto h-full w-auto object-contain object-center rounded-3xl'
          />
        </div>
      </div>

      {/* Product form */}
      <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
        <section aria-labelledby='options-heading'>
          <h2 id='options-heading' className='sr-only'>
            Product options
          </h2>

          <form className='space-y-4'>
            <div className='sm:flex sm:justify-between'>
              {/* Flavor selector */}
              <RadioGroup
                value={selectedFlavor}
                onChange={setSelectedFlavor}
                className='w-full'
              >
                <RadioGroup.Label className='block text-sm font-medium text-gray-700'>
                  Sabor
                </RadioGroup.Label>
                <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  {flavors.map(flavor => (
                    <RadioGroup.Option
                      as='div'
                      key={flavor.name}
                      value={flavor}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-2 ring-primary-400' : '',
                          'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label
                            as='p'
                            className='text-base font-medium text-gray-900'
                          >
                            {flavor.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='p'
                            className='mt-1 text-sm text-gray-500'
                          >
                            {flavor.tip}
                          </RadioGroup.Description>
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-primary-400'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className='sm:flex sm:justify-between'>
              {/* Size selector */}
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className='w-full'
              >
                <RadioGroup.Label className='block text-sm font-medium text-gray-700'>
                  Tamaño
                </RadioGroup.Label>
                <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  {sizes.map(size => (
                    <RadioGroup.Option
                      as='div'
                      key={size.name}
                      value={size}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-2 ring-primary-400' : '',
                          'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label
                            as='p'
                            className='text-base font-medium text-gray-900'
                          >
                            {size.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='p'
                            className='mt-1 text-sm text-gray-500'
                          >
                            {size.tip}
                          </RadioGroup.Description>
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-primary-400'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className='sm:flex sm:justify-between'>
              {/* Type selector */}
              <RadioGroup
                value={selectedType}
                onChange={setSelectedType}
                className='w-full'
              >
                <RadioGroup.Label className='block text-sm font-medium text-gray-700'>
                  Presentación
                </RadioGroup.Label>
                <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  {types.map(type => (
                    <RadioGroup.Option
                      as='div'
                      key={type.name}
                      value={type}
                      className={({ active }) =>
                        classNames(
                          active ? 'ring-2 ring-primary-400' : '',
                          'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label
                            as='p'
                            className='text-base font-medium text-gray-900'
                          >
                            {type.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='p'
                            className='mt-1 text-sm text-gray-500'
                          >
                            {type.tip}
                          </RadioGroup.Description>
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-primary-400'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <Link
              href='#'
              className='group inline-flex text-sm text-gray-500 hover:text-gray-700'
            >
              <span>Qué presentación debería elegir?</span>
              <QuestionMarkCircleIcon
                className='ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                aria-hidden='true'
              />
            </Link>
            <div className='mt-10'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md border border-transparent bg-primary-500 px-8 py-3 text-base font-medium text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-gray-50'
              >
                Añadir al carrito
              </button>
            </div>
            <div className='mt-6 text-center'>
              <a
                href='https://www.conservation.org/peru/noticias/2019/10/29/que-es-cafe-sostenible'
                target='_blank'
                className='group inline-flex text-base font-medium'
              >
                <GlobeAsiaAustraliaIcon
                  className='mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                  aria-hidden='true'
                />
                <span className='text-gray-500 hover:text-gray-700'>
                  Producto Sostenible
                </span>
              </a>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}
