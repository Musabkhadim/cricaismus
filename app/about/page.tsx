import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Daily Urdu News Network",
  description: "Learn more about Daily Urdu News Network, our mission, and our team",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="mb-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-6">
            <img
              src="/about.jpg"
              alt="Daily Urdu News Network Team"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-white-600 dark:text-gray-400 mb-6">
          Latest Cricket News,  & Expert Analysis – Only on Cricaismus.<br></br>
          Read the latest cricket news, match reports, live scores, player interviews, and expert
           opinions only on Daily Urdu News Network – your trusted source for high-quality, reliable, 
           and engaging cricket content loved by fans worldwide
          
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cricaismus started as a dedicated platform focused on cricket news and analysis.
           What began as a small blog for passionate fans has now grown into a widely respected source for 
           reliable cricket updates, covering everything from international tournaments to domestic leagues,
            player interviews, and live match commentary.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
          With a team of experienced cricket writers and sports journalists, we are committed to delivering 
          accurate, timely, and engaging content that reflects the spirit of the game. Whether it’s the 
          ICC World Cup, T20 leagues, or rising stars in the cricket world, our mission is to keep fans 
          informed with high-quality reporting and expert insights.
          <br></br>At Cricaismus, we believe in the power of authentic journalism and strive to be your
             go-to destination for everything cricket – news, stats, highlights, and more.
          </p>
          

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {/* Accuracy */}
  <div className="relative rounded-lg shadow-sm">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
    <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
    <div className="relative z-10 p-6 text-white">
      <h3 className="text-xl font-medium mb-2">Accuracy</h3>
      <p>
        We are committed to factual reporting and thorough fact-checking to ensure the accuracy of our content.
      </p>
    </div>
  </div>

  {/* Integrity */}
  <div className="relative rounded-lg shadow-sm">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
    <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
    <div className="relative z-10 p-6 text-white">
      <h3 className="text-xl font-medium mb-2">Integrity</h3>
      <p>
        We maintain editorial independence and adhere to the highest ethical standards in our reporting.
      </p>
    </div>
  </div>

  {/* Inclusivity */}
  <div className="relative rounded-lg shadow-sm">
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
    <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
    <div className="relative z-10 p-6 text-white">
      <h3 className="text-xl font-medium mb-2">Inclusivity</h3>
      <p>
        We strive to represent diverse perspectives and voices in our coverage.
      </p>
    </div>
  </div>
</div>


          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
          Our team of experienced cricket journalists, skilled editors, and dedicated 
          content creators is committed to delivering high-quality cricket news and in-depth
           match analysis. With deep knowledge of the game and a passion for cricket, we provide 
           accurate, reliable, and timely updates on everything from international tournaments
            to domestic leagues, ensuring our readers stay informed and engaged with every match.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Have questions or feedback? We'd love to hear from you! Visit our{" "}
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact Us
            </a>{" "}
            page to get in touch with our team.
          </p>
        </div>
      </div>
    </div>
  )
}
