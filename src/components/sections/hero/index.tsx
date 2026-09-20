import Navigation from "../../shared/Navbar";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Landor's Cottage — The Falling"
      className="relative min-h-screen w-full overflow-hidden bg-landor-secondary text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/art/hero-valley.jpg')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-landor-light/10"
      />

      <Navigation />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-12 md:px-12 md:pb-16 lg:px-16">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Landor&apos;s Cottage
          </h1>
        </div>
      </div>
    </section>
  );
}
