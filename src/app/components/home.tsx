import Image from "next/image";

export default function Main () {
  return (
    <div id="home" className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="glass-30 rounded-xl py-2 px-4 sm:px-6 lg:px-8 flex items-center mb-6 sm:mb-8">
        <Image src="/icons/check-verify.svg" alt="check verify" width={20} height={20} />
        <span className="text-[#19334D] font-medium ml-2 text-sm sm:text-base lg:text-lg">Qualità e affidabilità dal 1993</span>
      </div>
      <h1 className="font-bold text-[#19334D] text-5xl sm:text-6xl lg:text-7xl text-center">Pulizia impeccabile,</h1>
      <h2 className="font-bold text-[#128FBA] text-5xl sm:text-6xl lg:text-7xl text-center">ogni giorno</h2>
      <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#5C738A]  mt-4 sm:mt-6 lg:mt-8 max-w-md  lg:max-w-2xl text-center px-4">Trasformiamo i tuoi spazi in ambienti splendenti e accoglienti. Servizi professionali di pulizia e manutenzione per uffici e condomini.</p>
      <div className="flex flex-col sm:flex-row items-center mt-8 sm:mt-10 lg:mt-12 gap-4 sm:gap-6 w-full sm:w-auto px-4">
        <a href="#services">
          <button className="btn-primary w-full sm:w-auto">Scopri i servizi</button>
        </a>
        <a href="#contacts">
          <button className="btn-secondary border w-full sm:w-auto">Richiedi info</button>
        </a>
      </div>
    </div>
  )
}