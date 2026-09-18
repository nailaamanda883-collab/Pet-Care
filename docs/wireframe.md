# Wireframe PetCare

## 1. Beranda

Halaman utama menampilkan:

- Nama aplikasi PetCare
- Navigasi
- Ringkasan jumlah hewan
- Ringkasan jumlah pemilik
- Jumlah perawatan aktif

---

## 2. Data Hewan

Halaman menampilkan:

- Kolom pencarian nama hewan
- Tabel data hewan
- Nama hewan
- Jenis hewan
- Ras
- Usia
- Tombol Edit
- Tombol Hapus

Data ditampilkan secara dinamis menggunakan Fetch API dan JSON.

---

## 3. Tambah Hewan

Form berisi:

- Nama hewan
- Jenis hewan
- Ras
- Usia
- Nama pemilik
- Tombol Simpan

Validasi dilakukan menggunakan JavaScript.

---

## 4. Data Pemilik

Halaman menampilkan:

- Kolom pencarian nama pemilik
- ID pemilik
- Nama
- Alamat
- Nomor HP
- Tombol Edit
- Tombol Hapus

Data ditampilkan secara dinamis menggunakan Fetch API dan JSON.

---

## 5. Tambah Pemilik

Form berisi:

- Nama
- Alamat
- Nomor HP
- Tombol Simpan

Validasi dilakukan menggunakan JavaScript.

---

## Alur Data

Pengguna membuka halaman
        ↓
JavaScript dijalankan
        ↓
Fetch API meminta file JSON
        ↓
Data JSON diterima
        ↓
Data diproses menggunakan JavaScript
        ↓
Data ditampilkan ke tabel

Jika terjadi kesalahan:
Fetch API
        ↓
try/catch
        ↓
Pesan error ditampilkan