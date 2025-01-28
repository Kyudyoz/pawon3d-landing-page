import Image from "next/image";
import Head from "next/head";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Tabs,
  Carousel,
  Rating,
} from "flowbite-react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase.from("testimoni").select("*");
      if (!error) setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

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
        <meta property="og:url" content="https://pawon3d.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <main className="min-h-screen bg-gray-100 ">
        {/* Header */}
        <Navbar className="sticky top-0 z-50 shadow-md">
          <NavbarBrand as={Link} href="/" className="ml-10">
            <Image
              src="/favicon.ico"
              className="mr-3 h-6 sm:h-9"
              alt="Pawon3D logo"
              width={36}
              height={36}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
              Pawon3D
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="lg:mr-10">
            <NavbarLink href="#">Home</NavbarLink>
            <NavbarLink href="#about">Tentang Kami</NavbarLink>
            <NavbarLink href="#products">Produk</NavbarLink>
            <NavbarLink href="#testimonials">Testimoni</NavbarLink>
            <NavbarLink href="#contact">Kontak</NavbarLink>
          </NavbarCollapse>
          <DarkThemeToggle className="lg:block hidden mr-10" />
        </Navbar>

        {/* Hero Section */}
        <section>
          <div className="hero dark:bg-slate-700 bg-gray-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <Image
                src="/next.svg"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="Hero image"
                width={400}
                height={400}
              />
              <div className="lg:mr-32 text-black dark:text-white">
                <h1 className="text-5xl font-bold">
                  Kelezatan dalam Setiap Gigitan
                </h1>
                <p className="py-6">
                  Nikmati kehangatan rasa kue buatan kami yang dibuat dengan
                  cinta.
                </p>
                <button className="btn btn-success text-white">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">Tentang Kami</h3>
            <p className="text-gray-700">
              Pawon3D adalah toko kue yang menawarkan berbagai macam kue
              berkualitas tinggi dengan rasa yang otentik dan lezat. Setiap kue
              dibuat dengan bahan-bahan terbaik dan penuh perhatian.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">Produk Kami</h3>
            <Tabs
              aria-label="Pills"
              variant="pills"
              className="flex justify-center"
            >
              <Tabs.Item active title="Tab 1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
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
                    <h4 className="text-xl font-bold text-black">
                      Kue Cokelat
                    </h4>
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
                    <h4 className="text-xl font-bold text-black">Kue Keju</h4>
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
                    <h4 className="text-xl font-bold text-black">Kue Pandan</h4>
                    <p className="text-gray-600">
                      Kue pandan klasik dengan aroma khas.
                    </p>
                  </div>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Tab 2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 2
                </p>
              </Tabs.Item>
              <Tabs.Item title="Tab 3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 3
                </p>
              </Tabs.Item>
              <Tabs.Item title="Tab 4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 4
                </p>
              </Tabs.Item>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-12 py-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Testimoni Pelanggan
          </h2>
          {testimonials.length > 0 ? (
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 text-black px-6">
              <Carousel
                className="px-10"
                indicators={false}
                pauseOnHover
                slideInterval={5000}
                leftControl=" "
                rightControl=" "
              >
                {testimonials.map((testi) => (
                  <div
                    key={`${testi.kode_transaksi}-${testi.produk}`}
                    className="flex bg-slate-200 justify-center items-center border rounded-lg p-4 shadow-lg h-56 sm:h-64 xl:h-80 2xl:h-96"
                  >
                    <div>
                      <h3 className="text-lg font-bold mb-2">{testi.nama}</h3>
                      <div className="mb-2">
                        <p>
                          <strong>Produk:</strong> {testi.produk}
                        </p>
                        <div className="flex items-center">
                          <strong>Rating:</strong>
                          <Rating>
                            <Rating.Star filled={testi.rating >= 1} />
                            <Rating.Star filled={testi.rating >= 2} />
                            <Rating.Star filled={testi.rating >= 3} />
                            <Rating.Star filled={testi.rating >= 4} />
                            <Rating.Star filled={testi.rating >= 5} />
                          </Rating>
                        </div>
                        <p>
                          <strong>Komentar:</strong> {testi.komentar}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
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
