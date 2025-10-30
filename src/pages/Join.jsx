import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

export default function Join() {
  const [state, handleSubmit] = useForm('mqaglzob')
  return (
    <main>
      <section className="lead section" id="lead">
        <div className="container">
          <div className="section__intro">
            <h2 className="section__title">Tell us about your salon</h2>
            <p className="lead">We’re rolling out access gradually — join Glocap AI before your area fills up.</p>
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
          <div style={{ marginTop: '1rem' }}>
            <Link className="btn btn--ghost" to="/">← Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}


