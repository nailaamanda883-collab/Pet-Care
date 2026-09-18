// Mengambil & menampilkan Data Hewan secara asinkron
// dari data/hewan.json menggunakan Fetch API

async function muatDaftarHewan() {

    const tbody = document.querySelector(
        ".table-responsive table tbody"
    );

    const loading = document.getElementById(
        "loading-indicator"
    );

    if (!tbody) return;

    loading.style.display = "block";
    tbody.innerHTML = "";

    try {

        // Simulasi delay jaringan
        await new Promise((resolve) =>
            setTimeout(resolve, 600)
        );

        const res = await fetch("../data/hewan.json");

        if (!res.ok) {
            throw new Error(
                "Gagal mengambil data (status " +
                res.status +
                ")"
            );
        }

        const daftarHewan = await res.json();

        daftarHewan.forEach(function (hewan) {

            const tr = document.createElement("tr");

            tr.innerHTML =
                "<td>" + hewan.nama + "</td>" +
                "<td>" + hewan.jenis + "</td>" +
                "<td>" + hewan.ras + "</td>" +
                "<td>" + hewan.usia + " tahun</td>" +
                "<td>" +
                "<button type=\"button\">Edit</button> " +
                "<button type=\"button\" class=\"btn-hapus\">Hapus</button>" +
                "</td>";

            tbody.appendChild(tr);

        });

    } catch (err) {

        tbody.innerHTML =
            "<tr>" +
            "<td colspan=\"5\">" +
            "Gagal memuat data: " +
            err.message +
            "</td>" +
            "</tr>";

    } finally {

        loading.style.display = "none";

    }
}

document.addEventListener(
    "DOMContentLoaded",
    muatDaftarHewan
);