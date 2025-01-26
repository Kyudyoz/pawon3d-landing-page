import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { kode_transaksi, nama_produk, rating, komentar, nama } = req.body;

    try {
      const { data, error } = await supabase
        .from("testimoni")
        .insert([{ kode_transaksi, nama_produk, rating, komentar, nama }]);

      if (error) throw error;

      res.status(200).json({ message: "Testimoni berhasil disimpan!", data });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
