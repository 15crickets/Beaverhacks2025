export default function Home() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="py-20 text-center bg-white shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Next.js Site
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Fast. Scalable. Beautiful.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>
  
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Performance", "SEO Friendly", "Developer Experience"].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        <footer className="py-6 text-center text-sm text-gray-500 bg-white mt-10 border-t">
          &copy; {new Date().getFullYear()} My Next.js Site. All rights reserved.
        </footer>
      </main>
    );
  }
  