import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="sparkles" />

      <main className="relative z-10 max-w-275 mx-auto px-5 pt-10 pb-20 -mt-2">
        {/* HERO */}
        <div className="relative rounded-[22px] shadow-soft overflow-hidden bg-light/60">
          {/* Banner image */}
          <div className="relative w-full h-100 md:h-105 lg:h-130">
            <Image
              src="/media/hero-banner.jpg"
              alt="Ink Avenue hero banner"
              fill
              priority
              className="object-cover object-top"
            />
            {/* subtle overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Text overlay: position differs by breakpoint */}
          <div
            className="
      absolute z-10 text-white
      left-6 top-38
      md:left-2 md:top-0
      lg:left-6 lg:top-2
      max-w-[18rem] md:max-w-md
    "
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Fast &amp; Bold Airbrush Tattoos
            </h1>

            <div className="mt-2 font-extrabold text-lg md:text-xl">
              made live at festivals.
            </div>

            <p className="mt-2 text-sm md:text-lg leading-relaxed">
              Find your match: choose from hundreds of designs or request
              something unique!
            </p>
          </div>

          {/* Contact button: always bottom-right of the whole hero card */}
          <a
            href="#contact"
            className="
      absolute bottom-6 right-6 z-20
      px-4 py-2 rounded-xl
      bg-brand text-white font-bold
      shadow-lg hover:scale-105 transition
    "
          >
            Contact
          </a>
        </div>

        {/* ABOUT */}
        <section className="mt-16 bg-light/60 p-10 rounded-[22px] shadow-section">
          <h2>About Ink Avenue</h2>
          <p>
            Ink Avenue is a roaming festival stall specialising in airbrush body
            art and temporary tattoos. We create eye-catching designs in minutes
            using professional equipment and skin-safe products. Our high-grade
            ink dries fast, is durable, and water-proof!
          </p>
          <p>
            Whether you want something small and subtle or a bold statement
            piece, we’ve got you covered.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mt-16 bg-light/60 p-10 rounded-[22px] shadow-section">
          <h2>Services</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white p-6 rounded-[18px]">
              <h3>Temporary Tattoos</h3>
              <p>Quick-apply designs for arms, shoulders, legs, and more.</p>
            </div>

            <div className="bg-white p-6 rounded-[18px]">
              <h3>Airbrush Body Art</h3>
              <p>Creative sleeves in a wide range of styles.</p>
            </div>

            <div className="bg-white p-6 rounded-[18px]">
              <h3>Face Art</h3>
              <p>
                No one says ‘no’ to glitter – especially when it’s bio
                degradable!
              </p>
            </div>
          </div>
        </section>

        {/* WHY LOVE */}
        <section className="mt-16 bg-light/60 p-10 rounded-[22px] shadow-section">
          <h2>Why People Love Us</h2>

          <ul className="checks">
            <li>Fast application</li>
            <li>Long-lasting festival wear</li>
            <li>Skin-safe materials</li>
            <li>Friendly and talented artists</li>
            <li>Huge design selection</li>
          </ul>
        </section>

        {/* GALLERY */}
        <section className="mt-16 bg-light/60 p-10 rounded-[22px] shadow-section">
          <h2>Gallery / Designs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Image
              className="w-full aspect-square object-cover rounded-2xl"
              src="/media/gallery-image-1.jpg"
              alt="Airbrush tattoo design 1"
              width={800}
              height={800}
            />
            <Image
              className="w-full aspect-square object-cover rounded-2xl"
              src="/media/gallery-image-2.jpg"
              alt="Airbrush tattoo design 2"
              width={800}
              height={800}
            />
            <Image
              className="w-full aspect-square object-cover rounded-2xl"
              src="/media/gallery-image-3.jpg"
              alt="Airbrush tattoo design 3"
              width={800}
              height={800}
            />
            <Image
              className="w-full aspect-square object-cover rounded-2xl"
              src="/media/gallery-image-4.jpg"
              alt="Airbrush tattoo design 4"
              width={800}
              height={800}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 bg-light/60 p-10 rounded-[22px] shadow-section">
          <h2>FAQ</h2>

          <details>
            <summary>How long do designs last?</summary>
            <p>Typically 2–6 days depending on placement and care.</p>
          </details>

          <details>
            <summary>Is it safe for skin?</summary>
            <p>Yes, we only use cosmetic-grade products.</p>
          </details>

          <details>
            <summary>Do you take card?</summary>
            <p>Yes, card and contactless accepted.</p>
          </details>

          <details>
            <summary>Is it suitable for kids?</summary>
            <p>Yes, best for real kids and kids at heart.</p>
          </details>
        </section>

        {/* ARTIST + CONTACT */}
        <div
          className="relative rounded-[22px] overflow-hidden mt-16 shadow-heavy"
          id="contact"
        >
          <Image
            className="w-full max-h-137.5 object-cover block artist-mask"
            src="/media/artist_image.jpg"
            alt="Ink Avenue artist at work"
            width={1200}
            height={800}
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/70 to-transparent text-white">
            <h3>
              Want to know where we’ll be next or book Ink Avenue for an event?
              <br />
              Send us a message and we’ll get back to you.
            </h3>

            <a className="email" href="mailto:inkavenue.uk@gmail.com">
              inkavenue.uk@gmail.com
            </a>
          </div>
        </div>

        <footer className="text-center mt-16 text-muted">
          © Ink Avenue – Festival Airbrush Body Art
        </footer>
      </main>
    </>
  );
}
