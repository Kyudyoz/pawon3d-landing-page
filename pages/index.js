import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pawon3D - Kelezatan dalam Setiap Gigitan</title>
        <meta
          name="description"
          content="Pawon3D menyajikan kue-kue terbaik dengan bahan berkualitas dan cita rasa yang tak terlupakan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Pawon3D - Kelezatan dalam Setiap Gigitan"
        />
        <meta
          property="og:description"
          content="Pawon3D menyajikan kue-kue terbaik dengan bahan berkualitas."
        />

        <meta property="og:image" content="/hero.jpg" />
        <meta property="og:url" content="https://pawon3d.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-yellow-400 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Pawon3D</h1>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <a href="#about" className="hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:underline">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[70vh] flex items-center justify-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">
              Kelezatan dalam Setiap Gigitan
            </h2>
            <p className="text-lg">
              Nikmati kehangatan rasa kue buatan kami yang dibuat dengan cinta.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Tentang Kami</h3>
            <p className="text-gray-700">
              Pawon3D adalah toko kue yang menawarkan berbagai macam kue
              berkualitas tinggi dengan rasa yang otentik dan lezat. Setiap kue
              dibuat dengan bahan-bahan terbaik dan penuh perhatian.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Produk Kami</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Cards */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  className="rounded-md mb-4"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
                <h4 className="text-xl font-bold">Kue Cokelat</h4>
                <p className="text-gray-600">
                  Kue cokelat lembut dengan taburan cokelat premium.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  className="rounded-md mb-4"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
                <h4 className="text-xl font-bold">Kue Keju</h4>
                <p className="text-gray-600">
                  Kue keju dengan rasa yang gurih dan lembut.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  className="rounded-md mb-4"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
                />
                <h4 className="text-xl font-bold">Kue Pandan</h4>
                <p className="text-gray-600">
                  Kue pandan klasik dengan aroma khas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12 py-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Testimoni Pelanggan
          </h2>
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testi) => (
                <div key={testi.id} className="border rounded-lg p-4 shadow-lg">
                  <h3 className="text-lg font-bold mb-2">{testi.nama}</h3>
                  <ul>
                    {testi.nama_produk.map((produk, index) => (
                      <li key={index} className="mb-2">
                        <p>
                          <strong>Produk:</strong> {produk}
                        </p>
                        <p>
                          <strong>Rating:</strong> {testi.rating[index]} / 5
                        </p>
                        <p>
                          <strong>Komentar:</strong> {testi.komentar[index]}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    <strong>Kode Transaksi:</strong> {testi.kode_transaksi}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Belum ada testimoni dari pelanggan.
            </p>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Kontak Kami</h3>
            <p className="text-gray-700">
              Hubungi kami untuk pemesanan dan informasi lebih lanjut.
            </p>
            <a
              href="https://wa.me/6281234567890"
              className="mt-4 inline-block bg-yellow-400 text-white px-6 py-2 rounded-lg hover:bg-yellow-500"
            >
              Pesan Sekarang
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2025 Pawon3D. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
