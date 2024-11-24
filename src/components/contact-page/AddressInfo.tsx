import Link from "next/link"; // Import Next.js Link

export default function AddressInfo() {
  return (
    <section className="container mx-auto mb-10 md:mt-28 mt-60">
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-6 md:px-20 px-2">
        <div className="flex flex-col md:gap-4 gap-2 bg-primaryColor text-white p-10 rounded-lg w-full md:w-auto">
          <h3 className="text-2xl font-bold">Corporate Office</h3>
          <p>Level-7 BDBL Bhaban, 12, Kawran Bazar, Dhaka-1215</p>
          <Link
            href="tel:+880255013276"
            className="text-base text-gray-50 cursor-pointer"
          >
            Tel: +8802 55013276
          </Link>
          <Link
            href="mailto:info@ayatht.com"
            className="text-base text-gray-50 cursor-pointer"
          >
            Email: info@ayatht.com
          </Link>
          <p>WeChat & WhatsApp No: +8801913587092</p>
        </div>
        <div className="flex flex-col gap-4 bg-primaryColor text-white p-10 rounded-lg w-full md:w-auto">
          <h3 className="text-2xl font-bold">Business Office</h3>
          <p>House # L-13, Block #L, Extension Pallabi, Mirpur-11</p>
          <Link
            href="tel:+880255013276"
            className="text-base text-gray-50 cursor-pointer"
          >
            Tel: +8802 55013276
          </Link>
          <Link
            href="mailto:info@ayatht.com"
            className="text-base text-gray-50 cursor-pointer"
          >
            Email: info@ayatht.com
          </Link>
          <p>WeChat & WhatsApp No: +8801913587092</p>
        </div>
      </div>
    </section>
  );
}
