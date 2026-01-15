import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="bg-[#F7F7F7] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 max-w-7xl mx-auto">

        <div className="text-[#19334D]">
          <h2 className="font-bold text-4xl sm:text-6xl lg:text-6xl ">
            Chi è  <span className="text-[#128FBA]">Euro Splendore</span>
          </h2>
          <p className="mt-4 ml-1 text-lg sm:text-xl lg:text-2xl text-[#5C738A] font-medium">
            Da oltre 32 anni, EuroSplendore è sinonimo di eccellenza nel settore delle pulizie professionali. La nostra missione è semplice: rendere ogni ambiente splendente, sicuro e accogliente.
          </p>
          <p className="mt-4 ml-1 text-lg sm:text-lg lg:text-xl text-[#5C738A] font-medium">
            Il nostro team di professionisti altamente qualificati utilizza tecniche all&lsquo;avanguardia e prodotti eco-compatibili per garantire risultati impeccabili. La soddisfazione del cliente è la nostra priorità assoluta.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center bg-[#DCF2F9] border font-medium p-1  px-4 rounded-full text-md">
              <Image src="/icons/shield-check.svg" alt="Shield icon" width={20} height={20} />
              <span className='ml-2'>Certificati ISO</span>
            </div>
            <div className="flex items-center bg-[#DCF2F9] border font-medium  p-1 px-6 rounded-full text-md">
              <Image src="/icons/world.svg" alt="World icon" width={20} height={20} />
              <span className='ml-2'>Prodotti ecologici</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-[#DCF2F9]  rounded-lg mb-2 flex items-center justify-center">
              <Image src="/icons/clock.svg" alt="Clock icon" width={24} height={24} />
            </div>
            <p className="text-4xl font-bold  text-[#19334D]">32+</p>
            <p className="text-[#5C738A] font-bold mt-2">Anni di esperienza</p>
          </div>

          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-[#DCF2F9]  rounded-lg mb-4 flex items-center justify-center">
              <Image src="/icons/community.svg" alt="Community icon" width={24} height={24} />
            </div>
            <p className="text-4xl font-bold text-[#19334D]">500+</p>
            <p className="text-[#5C738A] font-bold mt-2">Clienti soddisfatti</p>
          </div>

          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-[#DCF2F9]  rounded-lg mb-4 flex items-center justify-center">
              <Image src="/icons/shield.svg" alt="Shield icon" width={24} height={24} />
            </div>
            <p className="text-4xl font-bold text-[#19334D]">100%</p>
            <p className="text-[#5C738A] font-bold mt-2">Garanzia e Qualità</p>
          </div>

          <div className="bg-[#F9FAFB]  border  p-4 rounded-2xl  flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-[#DCF2F9]  rounded-lg mb-4 flex items-center justify-center">
              <Image src="/icons/like.svg" alt="Like icon" width={24} height={24} />
            </div>
            <p className="text-4xl font-bold text-[#19334D]">24/7</p>
            <p className="text-[#5C738A] font-bold mt-2">Supporto Clienti</p>
          </div>
        </div>
      </div>
    </div>
  );
}