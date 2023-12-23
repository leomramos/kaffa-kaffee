import { RevealWrapper, SectionHeading } from '#/components'
import {
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Estímulo y Energía Sostenida',
    description:
      'El café, conocido por su contenido de cafeína, proporciona un impulso de energía natural. En esta sección, exploraremos cómo el café puede mejorar la concentración y la atención, ofreciendo un estímulo que puede ayudar a afrontar el día con vitalidad y enfoque.',
    href: 'https://mejorconsalud.as.com/beneficios-del-cafe/',
    icon: LightBulbIcon,
  },
  {
    name: 'Antioxidantes y Bienestar',
    description:
      'Sumérgete en los beneficios antioxidantes del café en nuestra segunda parte. Descubriremos cómo los compuestos antioxidantes presentes en el café pueden contribuir a la salud celular y brindar beneficios para el bienestar general, desde la protección contra el estrés oxidativo hasta el apoyo al sistema inmunológico.',
    href: 'https://mejorconsalud.as.com/beneficios-del-cafe/',
    icon: HeartIcon,
  },
  {
    name: 'Sociabilidad y Placer Sensorial',
    description:
      'Finalmente, exploraremos la dimensión social y sensorial del café. Descubre cómo compartir una taza de café puede fortalecer conexiones sociales, proporcionar momentos de pausa y placer. Desde los aromas cautivadores hasta los sabores complejos, el café se convierte en una experiencia multisensorial que va más allá de la estimulación física.',
    href: 'https://mejorconsalud.as.com/beneficios-del-cafe/',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <section id='about' className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <RevealWrapper>
            <SectionHeading>
              Descubre los beneficios en cada sorbo
            </SectionHeading>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Sumérgete en la experiencia única de nuestro café y vive los
              beneficios que aporta a tu día.
            </p>
          </RevealWrapper>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <RevealWrapper delay={0.2}>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {features.map(feature => (
                <div key={feature.name} className='flex flex-col'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500'>
                      <feature.icon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600'>
                    <p className='flex-auto'>{feature.description}</p>
                    <p className='mt-6'>
                      <a
                        href={feature.href}
                        target='_blank'
                        className='text-sm font-semibold leading-6 text-primary-500'
                      >
                        Aprende más <span aria-hidden='true'>→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
