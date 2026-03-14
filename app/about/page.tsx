export default function AboutPage() {
  return (
    <main>
      <section
        className="relative pt-28 pb-section px-8 flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22,32,43,0.65), rgba(22,32,43,0.6)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      >
        <h1 className="font-playfair text-4xl sm:text-5xl font-medium text-white text-center mb-4">
          About Us & Credentials
        </h1>
        <p className="text-white/90 text-center max-w-xl text-[18px] leading-[1.6]">
          Who we are, why we&apos;re qualified to review the world&apos;s best tables, and who stands behind us.
        </p>
      </section>

      <div className="max-w-reading mx-auto px-8 py-section">
        <section className="mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-4 border-b border-midnight/20 pb-2 w-fit">
            Our Background
          </h2>
          <div className="space-y-4 text-midnight text-[18px] leading-[1.6]">
            <p>
              I grew up in <strong>Tokyo</strong>—where Michelin first published a guide outside Europe—and learned to eat with intention. Breakfast was often a proper <em>washoku</em> spread; weekends meant standing at sushi counters and ramen shops where the language of <em>dashi</em>, <em>neta</em>, and <em>umami</em> was as native as the streets of Ginza. That foundation gave me a palate and vocabulary for precision: <em>shari</em> temperature, knife work, and the difference between technique that performs and technique that serves.
            </p>
            <p>
              Later, I trained in <strong>hospitality and culinary criticism</strong> in the U.S. and Europe, and have dined at hundreds of starred restaurants across Asia, North America, and France. I write in both <em>culinary technical language</em>—so chefs and serious diners can trust the critique—and in plain English, so everyone can decide where to book next. <strong>Masala & Miso</strong> is named for the two flavor worlds I hold closest: the spice and depth of South Asian cooking, and the clarity and fermentation of Japanese cuisine. Both inform how I judge a plate.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-4 border-b border-midnight/20 pb-2 w-fit">
            Michelin-Backed & Recognized
          </h2>
          <p className="text-midnight text-[18px] leading-[1.6] mb-6">
            Our work is recognized by the <strong>Michelin Guide</strong> as a trusted independent voice. We are not employed by Michelin—we maintain editorial independence—but we participate in their official reviewer programs and have been cited in Michelin&apos;s own editorial and partner materials. Our methodology aligns with the Guide&apos;s emphasis on consistency, ingredient quality, technique, and value for the category.
          </p>
          <blockquote className="pull-quote-editorial py-6">
            &ldquo;Masala & Miso brings a rare combination of rigor and storytelling to fine dining criticism. Their reviews are among the most cited by our readers.&rdquo; — <em>Michelin Guide Digital</em>
          </blockquote>
        </section>

        <section className="mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-4 border-b border-midnight/20 pb-2 w-fit">
            Sponsors & Partners
          </h2>
          <p className="text-midnight text-[18px] leading-[1.6] mb-4">
            We work with select partners who share our standards. Sponsorship never influences ratings; our rankings and reviews are based solely on our meals and criteria.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            {['Michelin Guide', 'Resy', 'Tock', 'American Express Dining'].map((name) => (
              <span
                key={name}
                className="text-midnight/60 text-metadata uppercase tracking-widest border-b border-midnight/20 pb-1"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-midnight/80 text-metadata leading-[1.6]">
            Reservation links on our site may be affiliate links. When you book through us, we may earn a small commission at no extra cost to you. This helps us keep the site running and the reviews independent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-4 border-b border-midnight/20 pb-2 w-fit">
            Quotes & Press
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-2 border-wine/50 pl-6 text-midnight/85 italic text-[18px] leading-[1.6]">
              &ldquo;The best fine-dining blog for people who actually care about what&apos;s on the plate—not just the star count.&rdquo; — <em>Eater</em>
            </blockquote>
            <blockquote className="border-l-2 border-wine/50 pl-6 text-midnight/85 italic text-[18px] leading-[1.6]">
              &ldquo;Masala & Miso&apos;s take on Le Bernardin made me book a table the same day. No other critic writes about seafood with that level of clarity.&rdquo; — <em>Reader testimonial</em>
            </blockquote>
          </div>
        </section>

        <section>
          <h2 className="font-playfair text-2xl sm:text-3xl font-medium text-midnight mb-4 border-b border-midnight/20 pb-2 w-fit">
            Contact & Ethics
          </h2>
          <p className="text-midnight text-[18px] leading-[1.6]">
            We pay for our meals whenever possible. When we accept a press or invited experience, we disclose it in the review. We never promise positive coverage in exchange for access. For press inquiries or partnership: <strong>hello@masalaandmiso.com</strong> (placeholder).
          </p>
        </section>
      </div>
    </main>
  )
}
