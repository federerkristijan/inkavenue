export default function HomePage() {
  return (
    <>
      <div className="sparkles" />

      <main>
        {/* HERO */}
        <div className="hero">
          <div className="hero-text">
            <h1>Fast &amp; Bold Airbrush Tattoos</h1>
            <div className="subheadline">made live at festivals.</div>
            <p className="intro">
              Find your match: choose from hundreds of designs or request something unique!
            </p>
            <a href="#contact" className="btn">
              Book / Find Us
            </a>
          </div>

          <div className="hero-banner" />
        </div>

        {/* ABOUT */}
        <section>
          <h2>About Ink Avenue</h2>
          <p>
            Ink Avenue is a roaming festival stall specialising in airbrush body art and temporary tattoos.
            We create eye-catching designs in minutes using professional equipment and skin-safe products.
            Our high-grade ink dries fast, is durable, and water-proof!
          </p>
          <p>Whether you want something small and subtle or a bold statement piece, we’ve got you covered.</p>
        </section>

        {/* SERVICES */}
        <section>
          <h2>Services</h2>

          <div className="services">
            <div className="service-card">
              <h3>Temporary Tattoos</h3>
              <p>Quick-apply designs for arms, shoulders, legs, and more.</p>
            </div>

            <div className="service-card">
              <h3>Airbrush Body Art</h3>
              <p>Creative sleeves in a wide range of styles.</p>
            </div>

            <div className="service-card">
              <h3>Face Art</h3>
              <p>No one says ‘no’ to glitter – especially when it’s bio degradable!</p>
            </div>
          </div>
        </section>

        {/* WHY LOVE */}
        <section>
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
        <section>
          <h2>Gallery / Designs</h2>

          <div className="gallery">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://dl.dropboxusercontent.com/s/wz7rmf7l3t5rr4zyf77t3/gallery-image-1.JPG"
              alt="Airbrush tattoo design 1"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://dl.dropboxusercontent.com/s/ytsf3ahwi61hh9qgj1fh8/Gallery-image-2.jpg"
              alt="Airbrush tattoo design 2"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://dl.dropboxusercontent.com/s/jollqk6h26y8udn2kq6z4/gallery-image-3.jpeg"
              alt="Airbrush tattoo design 3"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://dl.dropboxusercontent.com/s/d8d7rxrk04t7xenth7xem/Gallery-image-4.jpeg"
              alt="Airbrush tattoo design 4"
            />
          </div>
        </section>

        {/* FAQ */}
        <section>
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
        <div className="artist-wrap" id="contact">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://dl.dropboxusercontent.com/s/ts6fz49spgid3pu1eblwb/artist-image.jpg"
            alt="Ink Avenue artist at work"
          />

          <div className="artist-overlay">
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

        <footer>© Ink Avenue – Festival Airbrush Body Art</footer>
      </main>
    </>
  );
}
