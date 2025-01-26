import Head from "next/head";
import { useState } from "react";

export default function Feedback({ query }) {
  const [formData, setFormData] = useState({
    kode_transaksi: query.kode_transaksi || "",
    nama_produk: query.nama_produk ? query.nama_produk.split(",") : [],
    rating: [],
    komentar: [],
    nama: "",
  });

  const handleInputChange = (e, index, field) => {
    const updatedField = [...formData[field]];
    updatedField[index] = e.target.value;
    setFormData({ ...formData, [field]: updatedField });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/save-testimoni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert(`Error: ${errorData.error}`);
        return;
      }

      alert("Testimoni berhasil dikirim!");
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Terjadi kesalahan. Coba lagi nanti.");
    }
  };

  if (!query.kode_transaksi || !query.nama_produk) {
    return (
      <div className="text-center mt-8">
        <Head>
          <title>Pawon3D - Kelezatan dalam Setiap Gigitan</title>
        </Head>
        Parameter tidak lengkap. Harap akses halaman ini melalui link resmi.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Pawon3D - Kelezatan dalam Setiap Gigitan</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Form Testimoni</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Kode Transaksi: </label>
              <strong>
                <input
                  type="text"
                  value={formData.kode_transaksi}
                  readOnly
                  className="block w-full mt-1 bg-slate-700 border-gray-300 rounded-md"
                  style={{ all: "unset" }}
                />
              </strong>
            </div>
            <div>
              <label className="block mb-4">
                Nama
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) =>
                    setFormData({ ...formData, nama: e.target.value })
                  }
                  className="block w-full mt-1 px-2 py-1 bg-slate-700 border-gray-300 rounded-md"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </label>
            </div>
            {formData.nama_produk.map((produk, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-semibold mb-2">{produk}</h4>
                <label className="block mt-2">
                  Rating
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating[index] || ""}
                    className="block mt-1 px-2 py-1 bg-slate-700 border-gray-300 rounded-md"
                    onChange={(e) => handleInputChange(e, index, "rating")}
                  />
                </label>
                <label>
                  Komentar
                  <textarea
                    value={formData.komentar[index] || ""}
                    onChange={(e) => handleInputChange(e, index, "komentar")}
                    rows="3"
                    className="block w-full mt-1 px-2 py-1 bg-slate-700 border-gray-300 rounded-md"
                    placeholder={`Tulis komentar untuk ${produk}`}
                  />
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Kirim
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}
