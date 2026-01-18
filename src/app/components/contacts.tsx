import Image from "next/image";

export default function Contacts() {
  const address = "Via Pietro Novelli 7/A, 95041 Caltagirone";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div id="contacts" className="py-16 sm:py-24 bg-[#F7F7F7]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl  text-[#19334D]">Contattaci</h2>
          <p className="text-md sm:text-xl lg:text-2xl mt-4 text-[#5C738A]">
            Siamo a tua disposizione per qualsiasi informazione
            sui nostri servizi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex items-center">
            <div className="w-14 h-14 bg-[#DCF2F9]  rounded-lg mb-2 flex items-center justify-center">
              <Image src="/icons/phone.svg" alt="Phone icon" width={28} height={28} />
            </div>
            <div className="flex flex-col ml-4">
              <p className=" text-[#5C738A]">Telefono</p>
              <a href="tel:+393311681233" className="text-[#19334D] font-bold mt-2 hover:underline">+39 331 168 1233</a>
            </div>
          </div>
          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex items-center">
            <div className="w-14 h-14 bg-[#DCF2F9]  rounded-lg mb-2 flex items-center justify-center">
              <Image src="/icons/mail.svg" alt="Mail icon" width={28} height={28} />
            </div>
            <div className="flex flex-col ml-4">
              <p className=" text-[#5C738A]">Email</p>
              <a href="mailto:eurosplendore@gmail.it" className="text-[#19334D] font-bold mt-2 hover:underline">eurosplendore@gmail.it</a>
            </div>
          </div>
          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex items-center">
            <div className="w-14 h-14 bg-[#DCF2F9]  rounded-lg mb-2 flex items-center justify-center">
              <Image src="/icons/location.svg" alt="Location icon" width={28} height={28} />
            </div>
            <div className="flex flex-col ml-4">
              <p className=" text-[#5C738A]">Indirizzo</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#19334D] font-bold mt-2 hover:underline">{address}</a>
            </div>
          </div>
          <div className="bg-[#F9FAFB]  border p-4 rounded-2xl  flex items-center">
            <div className="w-14 h-14 bg-[#DCF2F9]  rounded-lg mb-2 flex items-center justify-center">
              <Image src="/icons/clock.svg" alt="Clock icon" width={28} height={28} />
            </div>
            <div className="flex flex-col ml-4">
              <p className=" text-[#5C738A]">Orari</p>
              <p className="text-[#19334D] font-bold mt-2">Lun-Ven: 07:00-13:00 / 15:00-18:00</p>
            </div>
          </div>
        </div>
        <iframe
          title="Euro Splendore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.3724664240563!2d14.520305575973095!3d37.2151320442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13110e526c1e795b%3A0xb309c08c2fb48e26!2sVia%20Pietro%20Novelli%2C%207%2C%2095041%20Caltagirone%20CT!5e0!3m2!1sit!2sit!4v1768404094951!5m2!1sit!2sit"
          className="rounded-2xl shadow-md w-full h-96 mt-6" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}