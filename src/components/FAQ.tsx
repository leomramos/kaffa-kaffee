import Link from 'next/link'

const faqs = [
  {
    id: 1,
    question:
      '¿Cuál es la diferencia entre las variedades de café que ofrecen?',
    answer:
      'Cada variedad de nuestro café tiene perfiles de sabor únicos. Desde el Premium con sus notas achocolatadas hasta el Supremo con su distintiva floralidad, te invitamos a explorar y encontrar el que mejor se adapte a tus gustos.',
  },
  {
    id: 2,
    question: '¿Cuál es el método de envío y cuánto tiempo tarda?',
    answer:
      'Utilizamos métodos de envío eficientes para entregar tu café fresco en 24 a 48 horas. Obtén más detalles sobre el proceso y el seguimiento de tu pedido en nuestra sección de envíos.',
  },
  {
    id: 3,
    question: '¿Dónde se cultiva su café y cuál es el proceso de producción?',
    answer:
      'Nuestro café arábico 100% se cultiva en Villa Rica - Cerro de Pasco, una región conocida por su excelencia cafetera. Desde la cosecha hasta el tostado, cada etapa refleja nuestro compromiso con la calidad y la autenticidad.',
  },
  {
    id: 4,
    question: '¿Tienen opciones de café descafeinado?',
    answer:
      'En K’affa Kaffeé nos enfocamos en ofrecer auténtico café arábico 100%, por lo que actualmente no contamos con opciones de café descafeinado. Nuestra pasión está en brindar experiencias de café ricas y auténticas que resalten las características únicas de cada grano. ¡Descubre la intensidad y sabor completo de nuestro café en cada taza!',
  },
  {
    id: 5,
    question: '¿Cuál es su política de devoluciones y cambios?',
    answer:
      'Nos esforzamos por garantizar tu satisfacción. Si no estás completamente satisfecho con tu compra, consulta nuestra política de devoluciones en la sección correspondiente de nuestra página web o comunícate directamente con nuestro equipo para obtener asistencia. Tu felicidad con nuestro café es nuestra prioridad.',
  },
  {
    id: 6,
    question: '¿Cómo almaceno adecuadamente el café para mantener su frescura?',
    answer:
      'Para preservar la frescura y los aromas de nuestro café, te recomendamos almacenarlo en un lugar fresco y oscuro, en un recipiente hermético. Evita la luz directa y la humedad. ¡Así garantizarás que cada taza mantenga su sabor excepcional!',
  },
]

export default function FAQ() {
  return (
    <section className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
        Preguntas frecuentes
      </h2>
      <p className='mt-6 max-w-2xl text-base leading-7 text-gray-600'>
        ¿Tienes una consulta diferente y no encuentras la respuesta que buscas?
        Ponte en contacto con nosotros{' '}
        <Link
          href='#'
          className='font-semibold text-primary-500 hover:text-primary-400'
        >
          enviándonos un correo electrónico,
        </Link>{' '}
        y nos pondremos en contacto contigo tan pronto como sea posible.
      </p>
      <div className='mt-20'>
        <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10'>
          {faqs.map(faq => (
            <div key={faq.id}>
              <dt className='text-base font-semibold leading-7 text-gray-900'>
                {faq.question}
              </dt>
              <dd className='mt-2 text-base leading-7 text-gray-600'>
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
