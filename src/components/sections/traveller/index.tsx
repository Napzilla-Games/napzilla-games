import Image from "next/image";

const journalEntries = [
  {
    text: "The road was strangely well kept.",
    position: "left-[8%] top-[15%]",
    rotate: "-rotate-2",
  },
  {
    text: "I could hear water somewhere beyond the trees.",
    position: "right-[8%] top-[42%]",
    rotate: "rotate-2",
  },
];

export default function Traveller() {
  return (
    <section
      id="the-traveller"
      className="relative min-h-[135vh] overflow-hidden bg-[#2E3323] text-[#F2DC9B]"
    >
      {/* Traveller environmental scene */}
      <div className="relative min-h-[110vh]">
        {/* Background artwork */}
        <Image
          src="/art/hero-valley.jpg"
          alt="A quiet path leading through the valley"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* Blend from the Hero above */}
        <div className="absolute inset-x-0 top-0 h-[25vh] bg-linear-to-b from-[#F2DC9B] via-[#A67C49]/70 to-transparent" />

        {/* Overall painted atmosphere */}
        <div className="absolute inset-0 bg-linear-to-b from-[#2E3323]/25 via-transparent to-[#2E3323]" />

        <div className="absolute inset-0 bg-linear-to-r from-[#2E3323]/30 via-transparent to-[#2E3323]/20" />

        {/* Foreground fade */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-linear-to-t from-[#2E3323] via-[#2E3323]/65 to-transparent" />

        {/* Traveller introduction */}
        <div className="relative z-10 flex pt-24 items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <p className="mb-3 font-serif text-sm italic text-[#F2DC9B]/65">
              somewhere along the road
            </p>

            <h2 className="font-serif text-5xl font-normal text-[#F2DC9B] md:text-7xl">
              The Traveller
            </h2>

            <div className="mx-auto mt-6 h-px w-12 bg-[#BF9924]/60" />
          </div>
        </div>

        {/* Journal observations */}
        {journalEntries.map((entry) => (
          <div
            key={entry.text}
            className={`absolute z-20 hidden w-64 md:block ${entry.position}`}
          >
            <div
              className={`relative bg-[#805D2B]/95 px-7 py-8 shadow-xl ${entry.rotate}`}
            >
              <div className="absolute inset-2 border border-[#F2DC9B]/20" />

              <p className="relative font-serif text-lg leading-relaxed text-[#F2DC9B]">
                {entry.text}
              </p>
            </div>
          </div>
        ))}

        {/* Traveller perspective */}
        <div className="relative z-10 flex pt-16 items-center justify-center px-6 pb-20">
          <div className="max-w-xl text-center space-y-4">
            <p className="font-serif text-2xl leading-relaxed text-[#F2DC9B] md:text-3xl">
              You had not intended to stay long.
            </p>

            <p className="font-serif text-lg leading-relaxed text-[#F2DC9B]/75 md:text-xl">
              Yet the road ahead seemed to ask otherwise.
            </p>

            <p className="font-serif text-base leading-relaxed text-[#F2DC9B]/60 italic md:text-lg">
              The air carried the faint scent of damp earth and distant
              woodsmoke, whispering of a hidden shelter waiting just beyond the
              ridge.
            </p>
          </div>
        </div>

        {/* Ponto's footprints */}
        <div className="absolute bottom-[8%] left-1/2 z-20 h-44 w-44 -translate-x-1/2 opacity-75 pointer-events-none">
          <div className="absolute left-0 top-0 h-10 w-10 rotate-160">
            <Image
              src="/art/ponto-paw.png"
              alt=""
              fill
              sizes="40px"
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="absolute left-10 top-12 h-9 w-9 rotate-160">
            <Image
              src="/art/ponto-paw.png"
              alt=""
              fill
              sizes="36px"
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <div className="absolute left-20 top-24 h-8 w-8 rotate-160">
            <Image
              src="/art/ponto-paw.png"
              alt=""
              fill
              sizes="32px"
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Continue into the journey */}
      <div className="relative flex min-h-[35vh] items-center justify-center overflow-hidden px-6 py-12">
        <div className="absolute inset-0 bg-linear-to-b from-[#2E3323] to-[#593F1E]" />

        <div className="relative z-10 max-w-2xl text-center">
          <p className="mb-4 font-serif text-sm italic text-[#BF9924]">
            the road continues
          </p>

          <p className="font-serif text-2xl leading-relaxed text-[#F2DC9B] md:text-4xl">
            Perhaps the cottage was not as far away as it first appeared.
          </p>
        </div>
      </div>
    </section>
  );
}
