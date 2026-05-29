import Image from "next/image";

export default function AboutWork() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="px-6 py-6 md:py-10 flex flex-col">
          <div className="relative w-full flex-1 min-h-[280px] md:min-h-[480px] overflow-hidden rounded-2xl">
            <Image
              src="/images/the-work.png"
              alt="Ceramicist working at the pottery wheel"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="px-6 py-8 md:py-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <span className="inline-flex items-center bg-[#7A2533] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
            Buenos Aires — Since 2020
          </span>

          <h2 className="mt-5 text-4xl font-medium italic leading-[1.05] text-black md:text-6xl">
            The Work
          </h2>

          <div className="mt-6 space-y-5 text-sm md:text-base leading-7 text-black/70 max-w-sm mx-auto md:mx-0">
            <p>Ceramics starts with looking.</p>
            <p>
              A strawberry at the market. The shape of a chair nobody sits in.
              An ice cream cone on a summer afternoon. These are the things that
              end up in clay — ordinary moments turned into objects you can hold.
            </p>
            <p>
              The pieces don't try to be art. They try to be familiar. Something
              you recognize without knowing why, something that belongs on your
              table without asking permission.
            </p>
            <p>Made by hand, one at a time. Colored like the world actually looks.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
