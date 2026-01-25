import Image from "next/image";

export default function Services() {
  return (
    <>
      <div id="services" className="flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#F9FAFB]">
        <h1 className="font-bold text-[#19334D] text-4xl sm:text-5xl lg:text-6xl text-center">
          I Nostri servizi
        </h1>
        <p className="font-medium text-md sm:text-xl lg:text-2xl text-[#5C738A]  mt-4 sm:mt-6 lg:mt-4 max-w-xl lg:max-w-3xl text-center px-4">
          Soluzioni complete per ogni esigenza di pulizia, con personale qualificato e prodotti ecologici.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 mb-16 w-full max-w-7xl">

          <div className="bg-[#19334D] rounded-3xl p-6 sm:p-8  relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient rounded-full opacity-90 -mr-24 -mt-24"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 glass-30 rounded-xl mb-6 flex items-center justify-center">
                <Image src="/icons/home-happy.svg" alt="Home icon" width={24} height={24} />
              </div>
              <h2 className="text-2xl text-white font-bold mb-2 mt-12">Pulizie professionali</h2>
              <p className="text-md text-white/90 mb-6 w-80">Servizi completi per ambienti civili e industriali, con interventi programmati.</p>
              <ul className="space-y-4 text-md mt-8 text-white/90">
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Pulizia ordinaria e straordinaria</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Lavaggio vetri con piattaforma aerea</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Sanificazione ambienti</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#19334D] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient rounded-full opacity-90 -mr-24 -mt-24"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 glass-30 rounded-xl mb-6 flex items-center justify-center">
                <Image src="/icons/tools.svg" alt="Tools icon" width={24} height={24} />
              </div>
              <h2 className="text-2xl text-white font-bold mb-2 mt-12">Manutenzione immobili</h2>
              <p className="text-md text-white/90 mb-6 w-72">Interventi tecnici mirati per la cura, il ripristino e il mantenimento degli spazi.</p>
              <ul className="space-y-4 text-md mt-8 text-white/90 ">
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Manutenzione beni e impianti</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Disinfestazione e Derattizzazione</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Pulizia pannelli solari</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#19334D] rounded-3xl p-6 sm:p-8  relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient rounded-full opacity-90 -mr-24 -mt-24"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/30 backdrop-blur-2xl rounded-xl mb-6 flex items-center justify-center">
                <Image src="/icons/building-tree.svg" alt="Building icon" width={24} height={24} />
              </div>
              <h2 className="text-2xl text-white font-bold mb-2 mt-12">Servizi integrati</h2>
              <p className="text-md text-white/90 mb-6 w-72">Gestione operativa di strutture e servizi per enti pubblici e privati.</p>
              <ul className="space-y-4 text-md mt-8 text-white/90">
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Facchinaggio e portineria</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Raccolta differenziata personalizzata</span>
                </li>
                <li className="flex items-center gap-4">
                  <Image src="/icons/check-circle.svg" alt="" width={16} height={16} className="shrink-0" />
                  <span>Manutenzione del verde</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}