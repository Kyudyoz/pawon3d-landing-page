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
    const response = await fetch("/api/save-testimoni", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Testimoni berhasil dikirim!");
    } else {
      alert("Gagal mengirim testimoni.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div>
        <label>Kode Transaksi:</label>
        <input
          type="text"
          value={formData.kode_transaksi}
          readOnly
          className="w-full"
        />
      </div>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          value={formData.nama}
          onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          className="w-full"
        />
      </div>
      {formData.nama_produk.map((produk, index) => (
        <div key={index}>
          <h4>{produk}</h4>
          <label>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={formData.rating[index] || ""}
            onChange={(e) => handleInputChange(e, index, "rating")}
          />
          <label>Komentar:</label>
          <textarea
            value={formData.komentar[index] || ""}
            onChange={(e) => handleInputChange(e, index, "komentar")}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Kirim
      </button>
    </form>
  );
}

export async function getServerSideProps({ query }) {
  return { props: { query } };
}
