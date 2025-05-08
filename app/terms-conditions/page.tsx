import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Daily Urdu News Network",
  description: "Terms and Conditions for Daily Urdu News Network",
}

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: May 5, 2023</p>

          <h2>Introduction</h2>
          <p>
            These terms and conditions ("Terms") govern your use of the Daily Urdu News Network website and all content,
            services, and products available at or through the website. By accessing or using our website, you agree to
            be bound by these Terms.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by Daily Urdu News Network and
            are protected by international copyright, trademark, patent, trade secret, and other intellectual property
            or proprietary rights laws.
          </p>

          <h2>User Contributions</h2>
          <p>
            Our website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards,
            and other interactive features that allow users to post, submit, publish, display, or transmit content or
            materials on or through our website.
          </p>
          <p>
            All User Contributions must comply with the Content Standards set out in these Terms. Any User Contribution
            you post to the site will be considered non-confidential and non-proprietary.
          </p>

          <h2>Content Standards</h2>

          <p>
            These content standards apply to any and all User Contributions and use of our website. User Contributions
            must in their entirety comply with all applicable federal, state, local, and international laws and
            regulations.
          </p>

          <p>User Contributions must not:</p>
          <ul>
            <li>
              Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent,
              hateful, inflammatory, or otherwise objectionable.
            </li>
            <li>
              Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex,
              religion, nationality, disability, sexual orientation, or age.
            </li>
            <li>
              Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other rights of
              any other person.
            </li>
            <li>
              Violate the legal rights (including the rights of publicity and privacy) of others or contain any material
              that could give rise to any civil or criminal liability under applicable laws or regulations.
            </li>
            <li>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</li>
            <li>
              Impersonate any person, or misrepresent your identity or affiliation with any person or organization.
            </li>
            <li>
              Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions, barter,
              or advertising.
            </li>
          </ul>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to our website immediately, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Daily Urdu News Network, nor its directors, employees, partners, agents, suppliers, or
            affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
            access to or use of or inability to access or use the website.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <ul>
            <li>Email: terms@dailyurdunews.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: 123 News Street, Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
