// src/app/components/review.tsx

import Image from "next/image";

const reviews = [
  {
    text: "Servizio eccellente! Euro Splendore garantisce pulizie accurate e costanti. Staff organizzato, affidabile e sempre disponibile.",
    author: "Luca Bianchi",
    role: "Responsabile servizi generali – istituto bancario",
  },
  {
    text: "Ottima azienda si occupa sia di pulizie che disinfestazione, personale molto professionale, lo consiglio a chi ne avesse bisogno",
    author: "Irene Nicotra",
    role: "Cliente privato",
  },
  {
    text: "Servizio eccellente! Euro Splendore garantisce pulizie accurate e costanti. Staff organizzato, affidabile e sempre disponibile.",
    author: "Paolo Ferri",
    role: "Amministratore condominiale",
  },
  {
    text: "Ottima esperienza! Ho contattato Euro Splendore per pulizie e disinfestazione. Lavoro preciso, risultati eccellenti e staff organizzato e affidabile.",
    author: "Giulia Romano",
    role: "Cliente privata",
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
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#19334D]">Cosa dicono di noi</h2>
          <p className="text-md sm:text-xl lg:text-2xl mt-4 text-[#5C738A]">
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