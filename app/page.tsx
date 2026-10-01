"use client";

import { useEffect, useState } from "react";

const INSTAGRAM = "https://www.instagram.com/setsbynickiii/";
const PHONE = "sms:+18086423317";

function Flower({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <g fill={color}>
        <ellipse cx="60" cy="32" rx="16" ry="29" />
        <ellipse
          cx="60"
          cy="32"
          rx="16"
          ry="29"
          transform="rotate(72 60 60)"
        />
        <ellipse
          cx="60"
          cy="32"
          rx="16"
          ry="29"
          transform="rotate(144 60 60)"
        />
        <ellipse
          cx="60"
          cy="32"
          rx="16"
          ry="29"
          transform="rotate(216 60 60)"
        />
        <ellipse
          cx="60"
          cy="32"
          rx="16"
          ry="29"
          transform="rotate(288 60 60)"
        />
      </g>
      <circle cx="60" cy="60" r="12" fill="#F8DB71" />
      <circle cx="60" cy="60" r="4" fill="#E14C4F" />
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      {/* NAVIGATION */}

      <header className={menuOpen ? "header menu-active" : "header"}>
        <a className="brand" href="#top" onClick={closeMenu}>
          sets by <strong>nickiii</strong>
          <Flower className="brand-flower" color="#E14C4F" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Meet Nicki</a>
          <a href="#nails">The Nail Club</a>
          <a href="#location">Location</a>
          <a href="#booking">Booking</a>
        </nav>

        <a
          className="nav-cta"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          DM TO BOOK <Arrow />
        </a>

        <button
          className={menuOpen ? "menu-toggle active" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div
          className={menuOpen ? "mobile-menu open" : "mobile-menu"}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <span className="mobile-menu-label">THE BIG ISLAND NAIL CLUB</span>

          <nav aria-label="Mobile navigation">
            <a href="#about" onClick={closeMenu}>
              <small>01</small> Meet Nicki
            </a>
            <a href="#nails" onClick={closeMenu}>
              <small>02</small> The Nail Club
            </a>
            <a href="#location" onClick={closeMenu}>
              <small>03</small> Location
            </a>
            <a href="#booking" onClick={closeMenu}>
              <small>04</small> Booking
            </a>
          </nav>

          <a
            className="mobile-menu-book"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            MESSAGE NICKI <Arrow />
          </a>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-meta">
          <span>KEA'AU, HAWAI'I</span>
          <span>CERTIFIED NAIL TECHNICIAN</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">WELCOME TO THE NAIL CLUB ♡</span>

            <h1>
              YOUR
              <br />
              ISLAND.
              <br />
              YOUR <em>NAILS.</em>
            </h1>

            <div className="hero-subline">
              <span>YOUR NICKI.</span>
              <Flower className="hero-small-flower" color="#E14C4F" />
            </div>

            <p>
              Nail artistry by Nicki, a certified nail technician based on
              Hawai&apos;i Island.
            </p>

            <div className="hero-actions">
              <a
                className="button button-red"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                DM NICKI TO BOOK <Arrow />
              </a>

              <a className="text-link" href="#about">
                GET TO KNOW NICKI ↓
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-sun" />

            <div className="hero-petal hero-petal-one" />
            <div className="hero-petal hero-petal-two" />

            <div className="hero-graphic">
              <span className="graphic-top">ISLAND NAIL CLUB</span>

              <Flower className="hero-main-flower" color="#E14C4F" />

              <div className="graphic-sticker">
                <span>SETS BY</span>
                <strong>NICKIII</strong>
                <small>HAWAI'I ISLAND</small>
              </div>

              <span className="graphic-bottom">♡ MADE FOR YOUR NEXT SET ♡</span>
            </div>

            <div className="hero-round-label">
              <span>BIG ISLAND</span>
              <strong>HI</strong>
              <span>NAIL TECH</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE ↓</span>
          <span>NAILS WITH A LITTLE ISLAND ENERGY</span>
        </div>
      </section>

      {/* MARQUEE */}

      <div className="marquee" aria-label="Sets by Nickiii, Big Island nail tech">
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>
              SETS BY NICKIII <b>✿</b> BIG ISLAND NAIL CLUB <b>✿</b>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}

      <section className="about section-pad" id="about">
        <div className="section-index">
          <span>01 / INTRODUCING NICKI</span>
          <span>ALOHA FROM THE BIG ISLAND</span>
        </div>

        <div className="about-layout">
          <div className="about-art">
            <div className="about-art-inner">
              <Flower className="about-flower" color="#E14C4F" />

              <span className="about-art-top">THE GIRL BEHIND THE SETS</span>

              <strong>
                NICK
                <br />
                III
              </strong>

              <span className="about-art-bottom">KEA'AU · HAWAI'I</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">HI, I'M NICKI ♥︎</span>

            <h2>
              THE GIRL
              <br />
              BEHIND
              <br />
              <em>THE SETS.</em>
            </h2>

            <div className="about-description">
              <p>
                Meet Nicki — a certified nail technician based in Kea'au on
                Hawai'i's Big Island.
              </p>

              <p>
                Sets by Nickiii is her home for nail artistry, appointment
                updates and connecting with clients.
              </p>

              <p>
                Looking to book? Nicki welcomes enquiries through Instagram
                DM or text.
              </p>
            </div>

            <a
              className="underline-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              FIND NICKI ON INSTAGRAM <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* NAIL CLUB */}

      <section className="nail-club section-pad" id="nails">
        <div className="section-index">
          <span>02 / THE NAIL CLUB</span>
          <span>YOUR NEXT SET STARTS HERE</span>
        </div>

        <div className="club-heading">
          <span className="eyebrow">SETS BY NICKIII PRESENTS</span>

          <h2>
            THE
            <br />
            <em>NAIL</em> CLUB.
          </h2>

          <p>
            Discover Nicki's current nail work and updates directly on her
            Instagram page.
          </p>
        </div>

        <div className="club-gallery">
          <div className="club-card club-card-one">
            <span>01 / THE DETAILS</span>

            <div className="illustrated-nail nail-illustration-one">
              <div className="nail-shape">
                <i>✿</i>
              </div>
            </div>

            <strong>DETAILS</strong>
          </div>

          <div className="club-card club-card-two">
            <span>02 / THE ENERGY</span>

            <div className="illustrated-nail nail-illustration-two">
              <div className="nail-shape">
                <i>♡</i>
              </div>
            </div>

            <strong>ISLAND</strong>
          </div>

          <div className="club-card club-card-three">
            <span>03 / THE FINISH</span>

            <div className="illustrated-nail nail-illustration-three">
              <div className="nail-shape">
                <i>✦</i>
              </div>
            </div>

            <strong>NAILS</strong>
          </div>
        </div>

        <div className="club-bottom">
          <p>
            Follow <strong>@setsbynickiii</strong> to see Nicki's actual sets,
            latest work and appointment updates.
          </p>

          <a
            className="button button-red"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW NICKI'S WORK <Arrow />
          </a>
        </div>
      </section>

      {/* CERTIFICATION */}

      <section className="certified">
        <div className="certified-flower-wrap">
          <Flower className="certified-flower" color="#F8DB71" />
        </div>

        <span className="eyebrow">A LITTLE ABOUT THE ARTIST</span>

        <h2>
          CERTIFIED
          <br />
          <em>NAIL TECHNICIAN.</em>
        </h2>

        <div className="certified-bottom">
          <span>SETS BY NICKIII</span>
          <span>KEA'AU, HAWAI'I</span>
          <span>BOOK VIA DM OR TEXT</span>
        </div>
      </section>

      {/* LOCATION */}

      <section className="location" id="location">
        <div className="location-copy">
          <span className="section-index-single">03 / FIND NICKI</span>

          <span className="eyebrow">BIG ISLAND, HAWAI'I</span>

          <h2>
            ISLAND
            <br />
            <em>BASED.</em>
          </h2>

          <p>
            Nicki is based in Kea'au, Hawai'i. Reach out directly for current
            appointment details and booking information.
          </p>

          <a
            className="underline-link"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            CONNECT WITH NICKI <Arrow />
          </a>
        </div>

        <div className="location-art">
          <div className="location-sun" />

          <Flower className="location-flower" color="#E14C4F" />

          <span className="location-top">THE BIG ISLAND</span>

          <strong>
            KEA'AU
            <br />
            HAWAI'I
          </strong>

          <span className="location-bottom">ISLAND NAIL CLUB · 96749</span>
        </div>
      </section>

      {/* BOOKING */}

      <section className="booking section-pad" id="booking">
        <div className="section-index">
          <span>04 / BOOKING</span>
          <span>READY WHEN YOU ARE ♡</span>
        </div>

        <div className="booking-content">
          <div className="booking-heading">
            <span className="eyebrow">COME GET YOUR NAILS DONE</span>

            <h2>
              LET'S GET
              <br />
              YOU <em>BOOKED.</em>
            </h2>

            <p>
              Ready for your next appointment? Message Nicki directly on
              Instagram or send a text to get started.
            </p>
          </div>

          <div className="booking-card">
            <Flower className="booking-flower" color="#E14C4F" />

            <span className="eyebrow">BOOK WITH NICKI</span>

            <h3>
              YOUR NEXT
              <br />
              SET AWAITS.
            </h3>

            <a
              className="booking-option primary"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <small>OPTION 01</small>
                INSTAGRAM DM
              </span>
              <Arrow />
            </a>

            <a className="booking-option" href={PHONE}>
              <span>
                <small>OPTION 02</small>
                TEXT NICKI
              </span>
              <Arrow />
            </a>

            <a className="booking-phone" href="tel:+18086423317">
              +1 (808) 642-3317
            </a>

            <p className="booking-policy">
              Please read all current booking policies on Nicki's Instagram
              before requesting an appointment.
            </p>

            <a
              className="policy-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW INSTAGRAM / POLICIES <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL */}

      <section className="social section-pad">
        <span className="eyebrow">STAY IN THE LOOP</span>

        <h2>
          SEE YOU
          <br />
          <em>ON THE 'GRAM.</em>
        </h2>

        <a
          className="social-link"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@setsbynickiii</span>
          <Arrow />
        </a>

        <Flower className="social-flower" color="#E14C4F" />
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-main">
          <a href="#top" className="footer-brand">
            sets by <strong>nickiii</strong> ✿
          </a>

          <p>CERTIFIED NAIL TECHNICIAN · KEA'AU, HAWAI'I</p>
        </div>

        <div className="footer-bottom">
          <span>SETS BY NICKIII</span>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM ↗
          </a>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}