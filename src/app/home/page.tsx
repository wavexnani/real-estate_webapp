import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dwello - Find Your Dream Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.navbar}>
        <div className={styles.logo}>Dwello</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Agents</a>
          <a href="#">Contact</a>
        </nav>
        <button className={`${styles.btn} ${styles.btnDark}`}>Sign In</button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Find Your <span>Dream Home</span>
          </h1>
          <p>
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique home‑buying vision.
          </p>
          <button className={styles.btn}>Sign up</button>
        </div>
        <Image
          src="https://img.freepik.com/premium-photo/modern-house-design-hd-8k-wallpaper-stock-photographic-image_871881-21968.jpg"
          alt="Modern House"
          width={500}
          height={300}
          className={styles.heroImage}
        />
      </section>

      <section className={styles.searchBar}>
        <input type="text" placeholder="Location" />
        <select>
          <option>Type</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>
        <select>
          <option>Price Range</option>
          <option>$100k - $500k</option>
          <option>$500k - $1M</option>
        </select>
        <button className={`${styles.btn} ${styles.btnDark}`}>Search</button>
      </section>

      <section className={styles.stats}>
        <div className={styles.text}>
          <h2>We Help You To Find Your Dream Home</h2>
          <p>
            From cozy cottages to luxurious estates, our dedicated agents can
            guide you through every step of the journey.
          </p>
        </div>
        <div className={styles.numbers}>
          <div>
            <strong>8K+</strong>
            <p>Houses Available</p>
          </div>
          <div>
            <strong>6K+</strong>
            <p>Houses Sold</p>
          </div>
          <div>
            <strong>2K+</strong>
            <p>Trusted Agents</p>
          </div>
        </div>
      </section>

      <section className={styles.whyUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.features}>
          <div className={styles.card}>
            🏠<h3>Expert Guidance</h3>
            <p>
              Navigate every aspect of homeownership confidently with our
              experts.
            </p>
          </div>
          <div className={styles.card}>
            📞<h3>Personalized Service</h3>
            <p>Every step tailored to your individual vision and lifestyle.</p>
          </div>
          <div className={styles.card}>
            📋<h3>Transparent Process</h3>
            <p>No surprises—just a smooth, trustworthy experience.</p>
          </div>
          <div className={styles.card}>
            💬<h3>Exceptional Support</h3>
            <p>
              We’re always available for you, from first look to final
              signature.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.residences}>
        <h2>Our Popular Residences</h2>
        <div className={styles.cards}>
          {[
            {
              src: "https://www.thepinnaclelist.com/wp-content/uploads/2013/05/01-CM-Ramesh-Residence-Jubilee-Hills-Hyderabad-Telangana-India.jpg",
              title: "Madhapur, Hyderabad",
              info: "4 Rooms • 3,200 sqft",
              price: "Rs 5,00,00,000/-",
            },
            {
              src: "https://cdnassets.hw.net/67/2e/339c7a4b4a2c8eed1d546d6787fa/5ee720668d414c71a5b582956f05d688.jpg",
              title: "Jubilee Hills, Hyderabad",
              info: "3 Rooms • 1,800 sqft",
              price: "Rs 15,00,00,000/-",
            },
            {
              src: "https://cdn.dealstreetasia.com/uploads/2019/02/50477453_2356994177869526_6519677183286312960_n.jpg?fit=955,532?resize=940,528",
              title: "KPHB, Hyderabad",
              info: "5 Rooms for rent • 4,000 sqft",
              price: "₹3000/hr",
            },
          ].map((p, i) => (
            <div key={i} className={styles.propertyCard}>
              <Image
                src={p.src}
                alt={`Home ${i + 1}`}
                width={500}
                height={300}
              />
              <h3>{p.title}</h3>
              <p>{p.info}</p>
              <strong>{p.price}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What People Say About Dwello</h2>
        <div className={styles.reviews}>
          {[
            {
              quote:
                "Best service! Clear communication and seamless process. Found my dream home!",
              name: "Sarah Nguyen",
            },
            {
              quote:
                "Helpful, fantastic agents, excellent options and support throughout.",
              name: "Michael Rodriguez",
            },
            {
              quote:
                "Dwello made my dream of owning a beautiful home a reality. Highly recommend!",
              name: "Emily Johnson",
            },
          ].map((r, i) => (
            <div key={i} className={styles.review}>
              <p>"{r.quote}"</p>
              <h4>{r.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>
          Do You Have Any Questions?
          <br />
          Get Help From Us
        </h2>
        <input type="email" placeholder="Enter your email address" />
        <button className={`${styles.btn} ${styles.btnDark}`}>Submit</button>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <div>
            <h4>About</h4>
            <p>
              Our Story
              <br />
              Careers
              <br />
              Team
            </p>
          </div>
          <div>
            <h4>Support</h4>
            <p>
              FAQ
              <br />
              Contact Us
            </p>
          </div>
          <div>
            <h4>Find Us</h4>
            <p>
              Instagram
              <br />
              Facebook
              <br />
              Twitter
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
