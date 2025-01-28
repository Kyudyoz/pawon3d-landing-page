// pages/api/save-testimoni.js
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { kode_transaksi, nama, produk, rating_komentar } = req.body;

    try {
      // Loop through produk array and insert each row individually
      const insertData = rating_komentar.map((item) => ({
        kode_transaksi,
        nama,
        produk: item.produk,
        rating: item.rating,
        komentar: item.komentar,
      }));

      const { error } = await supabase.from("testimoni").insert(insertData);

      if (error) throw error;

      res.status(200).json({ message: "Testimoni berhasil disimpan!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
