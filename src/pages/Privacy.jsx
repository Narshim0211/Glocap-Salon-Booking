import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section__title">Privacy Policy</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <p>We respect your privacy. This policy explains what information we collect, how we use it, and your rights.</p>

          <h3>Information We Collect</h3>
          <p>
            When you join our waitlist or contact us, we collect the information you provide such as email
            address, salon name, and your message.
          </p>

          <h3>How We Use Information</h3>
          <ul className="bullets">
            <li>To contact you about product access and updates</li>
            <li>To improve our product and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h3>Data Retention</h3>
          <p>We keep your information only as long as necessary for the purposes described in this policy.</p>

          <h3>Sharing</h3>
          <p>We do not sell your personal information. We may share data with service providers to operate our services.</p>

          <h3>Your Rights</h3>
          <p>You can request access, correction, or deletion of your information by contacting us.</p>

          <h3>Contact</h3>
          <p>If you have questions, contact us at support@glocap.ai.</p>
          <div style={{ marginTop: '1rem' }}>
            <Link className="btn btn--ghost" to="/">← Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}


