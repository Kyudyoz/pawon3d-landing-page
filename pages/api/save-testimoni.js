import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { kode_transaksi, nama, nama_produk, rating, komentar } = req.body;

    // console.log("Request body:", req.body); // Debugging log

    try {
      const { data, error } = await supabase.from("testimoni").insert([
        {
          kode_transaksi,
          nama,
          nama_produk,
          rating,
          komentar,
        },
      ]);

      //   console.log("Supabase response:", data, error); // Log hasil dari Supabase

      if (error) {
        console.error("Supabase error:", error.message);
        throw error;
      }

      res.status(200).json({ message: "Testimoni berhasil disimpan!", data });
    } catch (error) {
      console.error("Server error:", error.message); // Log error ke console
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
