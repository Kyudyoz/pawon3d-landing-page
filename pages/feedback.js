import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Feedback({ query }) {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [ratings, setRatings] = useState({});
  const [komentar, setKomentar] = useState({});
  const [produk, setProduk] = useState(
    query.nama_produk ? query.nama_produk.split(",") : []
  );

  const handleRatingChange = (e, item) => {
    setRatings({ ...ratings, [item]: e.target.value });
  };

  const handleKomentarChange = (e, item) => {
    setKomentar({ ...komentar, [item]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      kode_transaksi: query.kode_transaksi,
      nama,
      rating_komentar: produk.map((item) => ({
        produk: item,
        rating: ratings[item] || 0,
        komentar: komentar[item] || "",
      })),
    };

    try {
      const response = await fetch("/api/save-testimoni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert(`Error: ${errorData.error}`);
        return;
      }

      alert("Testimoni berhasil dikirim!");
      setNama("");
      setRatings({});
      setKomentar({});
      router.push("/");
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Terjadi kesalahan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query.kode_transaksi || !query.nama_produk) {
      setShowError(true);
      const timeoutId = setTimeout(() => {
        router.push("/");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [query.kode_transaksi, query.nama_produk]);

  return (
    <>
      <Head>
        <title>Pawon3D - Kelezatan dalam Setiap Gigitan</title>
      </Head>
      {showError && (
        <div className="text-center mt-8">
          <p className="text-red-500 font-semibold">
            Parameter tidak lengkap. Harap akses halaman ini melalui link resmi.
          </p>
        </div>
      )}
      {!showError && (
        <main className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Form Testimoni
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Kode Transaksi:
                </label>
                <input
                  type="text"
                  value={query.kode_transaksi}
                  readOnly
                  className="block w-full px-3 py-2 bg-gray-200 rounded-md text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama:
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              {produk.map((item, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-700">
                    {item}
                  </h4>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Rating (1–5):
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={ratings[item] || ""}
                      onChange={(e) => handleRatingChange(e, item)}
                      className="block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Komentar:
                    </label>
                    <textarea
                      value={komentar[item] || ""}
                      onChange={(e) => handleKomentarChange(e, item)}
                      rows="3"
                      className="block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-800"
                      placeholder={`Tulis komentar untuk ${item}`}
                      required
                    />
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          </div>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}
