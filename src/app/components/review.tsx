// src/app/components/review.tsx

import Image from "next/image";

const reviews = [
  {
    text: "Servizio impeccabile! Da quando ho scelto Euro Splendore, la mia casa è sempre splendente. Personale puntuale e professionale.",
    author: "Mario Rossi",
    role: "Amministratore condominiale",
  },
  {
    text: "Servizio impeccabile! Da quando ho scelto Euro Splendore, la mia casa è sempre splendente. Personale puntuale e professionale.",
    author: "Mario Rossi",
    role: "Amministratore condominiale",
  },
  {
    text: "Servizio impeccabile! Da quando ho scelto Euro Splendore, la mia casa è sempre splendente. Personale puntuale e professionale.",
    author: "Mario Rossi",
    role: "Amministratore condominiale",
  },
  {
    text: "Servizio impeccabile! Da quando ho scelto Euro Splendore, la mia casa è sempre splendente. Personale puntuale e professionale.",
    author: "Mario Rossi",
    role: "Amministratore condominiale",
  },
];

const ReviewCard = ({ text, author, role }: { text: string; author: string; role: string; }) => (
  <div className="bg-[#F7F7F7] rounded-2xl px-4 py-5 border">
    <Image src="/icons/article.svg" alt="World icon" width={24} height={24} />
    <p className="text-[#19334D] mt-6 mb-4 lg:w-md text-md">"{text}"</p>
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-[#19334D]">{author}</p>
        <p className="text-sm text-[#5C738A]">{role}</p>
      </div>
      {/* Placeholder per le stelle */}
      <div className="flex space-x-1">
        <Image src="/icons/star.svg" alt="World icon" width={20} height={20} />
        <Image src="/icons/star.svg" alt="World icon" width={20} height={20} />
        <Image src="/icons/star.svg" alt="World icon" width={20} height={20} />
        <Image src="/icons/star.svg" alt="World icon" width={20} height={20} />
        <Image src="/icons/star.svg" alt="World icon" width={20} height={20} />
      </div>
    </div>
  </div>
);


export default function Review () {
  return (
    <div id="reviews" className="py-16 sm:py-24 bg-[#F9FAFB]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-bold text-5xl sm:text-6xl lg:text-6xl text-[#19334D]">Cosa dicono di noi</h2>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4 text-[#5C738A]">
            La soddisfazione dei nostri clienti è la nostra migliore prestazione.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  )
}