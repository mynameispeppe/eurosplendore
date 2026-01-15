import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  const address = "Via Pietro Novelli 7, 95041 Caltagirone";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-[#194066] text-[#F9FAFB]">
      <div className="container max-w-7xl mx-auto py-12 px-4  md:px-4 lg:px-2">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 text-left">

          <div className="lg:w-1/3 space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo-secondary.svg"
                alt="Brand"
                width={200}
                height={200}
                priority
                className="h-16 w-auto"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </div>
            <p className="ml-2">
              Da oltre 32 anni al servizio della pulizia e dell&apos;igiene. Affidabilità, professionalità e
              attenzione ai dettagli sono i nostri valori fondamentali.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 ml-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Link Rapidi</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-white/70 hover:text-white">Servizi</Link></li>
                <li><Link href="#about" className="text-white/70 hover:text-white">Chi Siamo</Link></li>
                <li><Link href="#reviews" className="text-white/70 hover:text-white">Testimonianze</Link></li>
                <li><Link href="#contacts" className="text-white/70 hover:text-white">Contatti</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contatti</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Image src="/icons/phone-white.svg" alt="Phone icon" width={24} height={24} />
                  <a href="tel:+390212345678" className="ml-2 text-white/70 hover:text-white">+39 02 1234 5678</a>
                </li>
                <li className="flex items-center">
                  <Image src="/icons/mail-white.svg" alt="Mail icon" width={24} height={24} />
                  <a href="mailto:info@eurosplendore.it" className="ml-2 text-white/70 hover:text-white">info@eurosplendore.it</a>
                </li>
                <li className="flex items-center">
                  <Image src="/icons/location-white.svg" alt="Location icon" width={24} height={24} />
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-white/70 hover:text-white">
                    {address}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/70 mt-8 pt-8 text-center">
          <p className="text-white/70">&copy; {new Date().getFullYear()} Euro Splendore - Impresa di Pulizie e manutenzione. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}