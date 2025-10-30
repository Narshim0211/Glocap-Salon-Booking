import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section__title">Terms of Service</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <h3>Acceptance of Terms</h3>
          <p>By accessing or using our website and services, you agree to these Terms of Service.</p>

          <h3>Use of Service</h3>
          <ul className="bullets">
            <li>You must provide accurate information when interacting with us.</li>
            <li>You agree not to misuse or disrupt the service.</li>
            <li>We may change or discontinue features at any time.</li>
          </ul>

          <h3>Intellectual Property</h3>
          <p>All content and materials are owned by us or our licensors and protected by law.</p>

          <h3>Limitation of Liability</h3>
          <p>Our service is provided “as is.” We are not liable for indirect or consequential damages.</p>

          <h3>Changes to Terms</h3>
          <p>We may update these terms from time to time. Continued use constitutes acceptance of changes.</p>

          <h3>Contact</h3>
          <p>Questions about these terms? Contact legal@glocap.ai.</p>
          <div style={{ marginTop: '1rem' }}>
            <Link className="btn btn--ghost" to="/">← Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}


