import Link from 'next/link'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default function FAQ() {
  return (
    <section className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
        Preguntas frecuentes
      </h2>
      <p className='mt-6 max-w-2xl text-base leading-7 text-gray-600'>
        Have a different question and can’t find the answer you’re looking for?
        Reach out to our support team by{' '}
        <Link
          href='#'
          className='font-semibold text-primary-500 hover:text-primary-400'
        >
          sending us an email
        </Link>{' '}
        and we’ll get back to you as soon as we can.
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
