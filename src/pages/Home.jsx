import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'

export default function Home() {
  const [state, handleSubmit] = useForm('mqaglzob')
  return (
    <>
      <div className="banner" role="status" aria-live="polite">⚡ Only a few beta spots left this month!</div>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 className="hero__title reveal">No More Missed Calls. No More Double Bookings. <span className="nowrap">Just Smooth Scheduling.</span></h1>
              <p className="hero__subtitle reveal reveal-delay-1">Join <strong>50+ salons</strong> already simplifying their appointments with <span className="brand">Glocap AI</span>.</p>
              <div className="hero__ctas reveal reveal-delay-2">
                <a className="btn btn--primary" href="#lead">Get Early Access</a>
                <a className="btn btn--ghost" href="#lead">Join the Waitlist — Spots Filling Fast!</a>
              </div>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="phone phone--float">
                <div className="phone__notch"></div>
                <div className="phone__screen">
                  <div className="flow">
                    <div className="flow__step flow__step--active">
                      <span className="flow__kicker">1</span>
                      <span>Select Service</span>
                    </div>
                    <div className="flow__step">
                      <span className="flow__kicker">2</span>
                      <span>Choose Stylist</span>
                    </div>
                    <div className="flow__step">
                      <span className="flow__kicker">3</span>
                      <span>Pick Date & Time</span>
                    </div>
                    <div className="flow__step">
                      <span className="flow__kicker">4</span>
                      <span>Enter Details</span>
                    </div>
                    <div className="flow__step">
                      <span className="flow__kicker">5</span>
                      <span>Confirm Appointment ✅</span>
                    </div>
                  </div>
                  <div className="screen-cta">Your next booking could be this easy.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Pain Section */}
        <section id="pains" className="pains section">
          <div className="container">
            <div className="section__intro reveal">
              <h2 className="section__title">The daily chaos we fix</h2>
            </div>
            <div className="pains__grid">
              <article className="card pain reveal">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48" role="img">
                    <rect x="4" y="8" width="40" height="32" rx="6" fill="#1E1B24"/>
                    <path d="M12 16h24" stroke="#E91E63" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="18" cy="28" r="6" fill="#6A1B9A"/>
                    <path d="M22 32l6 6" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="card__title">Missed Calls = Missed Clients</h3>
                <p className="card__body">You’re cutting hair, not answering phones — every missed call is money lost.</p>
              </article>
              <article className="card pain reveal reveal-delay-1">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48" role="img">
                    <rect x="6" y="10" width="36" height="28" rx="4" fill="#1E1B24"/>
                    <rect x="12" y="16" width="10" height="8" rx="2" fill="#6A1B9A"/>
                    <rect x="22" y="16" width="10" height="8" rx="2" fill="#E91E63"/>
                    <path d="M16 30h16" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="card__title">Double Bookings</h3>
                <p className="card__body">Two clients show up, one chair ready — chaos.</p>
              </article>
              <article className="card pain reveal reveal-delay-2">
                <div className="icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48" role="img">
                    <circle cx="24" cy="24" r="18" fill="#1E1B24"/>
                    <circle cx="18" cy="21" r="2" fill="#E91E63"/>
                    <circle cx="30" cy="21" r="2" fill="#E91E63"/>
                    <path d="M17 30c3-2 11-2 14 0" stroke="#FFC107" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M12 16l24 16" stroke="#6A1B9A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="card__title">Client Confusion</h3>
                <p className="card__body">Texts, DMs, and notebooks everywhere — time to bring it all together.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="solution section">
          <div className="container solution__grid">
            <div className="solution__copy reveal">
              <h2 className="section__title">One simple system for every booking</h2>
              <p className="lead">Our simple booking software automates appointments, reminders, and confirmations — all in one place.</p>
              <ul className="bullets">
                <li>Online booking 24/7</li>
                <li>Automatic reminders (SMS/email)</li>
                <li>No double-bookings, ever</li>
              </ul>
            </div>
            <div className="solution__visual reveal reveal-delay-1" aria-hidden="true">
              <div className="phone phone--light phone--float">
                <div className="phone__notch"></div>
                <div className="phone__screen phone__screen--light">
                  <div className="mock-steps">
                    <div className="mock-step">
                      <span className="badge">Service</span>
                      <div className="chips">
                        <span className="chip">Cut</span>
                        <span className="chip chip--active">Color</span>
                        <span className="chip">Blowout</span>
                      </div>
                    </div>
                    <div className="mock-step">
                      <span className="badge">Stylist</span>
                      <div className="chips">
                        <span className="chip">Ava</span>
                        <span className="chip chip--active">Mina</span>
                        <span className="chip">Kai</span>
                      </div>
                    </div>
                    <div className="mock-step">
                      <span className="badge">Time</span>
                      <div className="times">
                        <button className="time" disabled>10:00</button>
                        <button className="time is-active" disabled>10:30</button>
                        <button className="time" disabled>11:00</button>
                      </div>
                    </div>
                    <button className="btn btn--primary btn--block" tabIndex={-1}>Confirm →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form (moved last) */}
        <section id="lead" className="lead section">
          <div className="container">
            <div className="section__intro">
              <h2 className="section__title">Tell us about your salon</h2>
              <p className="lead">We’re rolling out access gradually — join before your area fills up.</p>
            </div>

            {state.succeeded ? (
              <p className="form__status" role="status" aria-live="polite" style={{ color: '#27D17F' }}>You're on the list! We’ll reach out shortly.</p>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" inputMode="email" placeholder="you@salon.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form__row">
                  <label htmlFor="salon">Salon Name</label>
                  <input id="salon" name="salon" type="text" placeholder="Your Salon" required />
                </div>

                <div className="form__row">
                  <label htmlFor="message">What’s your biggest headache in your business which you want to be solved right now?</label>
                  <textarea id="message" name="message" rows="4" placeholder="What’s your biggest headache in your business which you want to be solved right now?" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="form__actions">
                  <button type="submit" className="btn btn--primary" disabled={state.submitting}>{state.submitting ? 'Submitting…' : 'Join 50+ Salons — Claim Your Spot'}</button>
                </div>
                <p className="form__status" role="status" aria-live="polite">{state.errors && state.errors.length ? 'Please correct the errors above.' : ''}</p>
              </form>
            )}

            <div className="urgency-note">⚡ Only a few beta spots left this month!</div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__grid">
            <div className="footer__brand"><strong>Glocap AI</strong></div>
            <nav className="footer__nav" aria-label="Footer navigation">
              <a href="#hero">Top</a>
              <a href="#pains">Pain Points</a>
              <a href="#solution">Solution</a>
              <a href="#lead">Join</a>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </nav>
            <small className="footer__legal">© {new Date().getFullYear()} Glocap AI. All rights reserved.</small>
          </div>
        </footer>
      </main>
    </>
  )
}


