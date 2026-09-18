// Mengambil & menampilkan Data Pemilik secara asinkron
// dari data/pemilik.json menggunakan Fetch API

async function muatDaftarPemilik() {

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

        const res = await fetch("../data/pemilik.json");

        if (!res.ok) {
            throw new Error(
                "Gagal mengambil data (status " +
                res.status +
                ")"
            );
        }

        const daftarPemilik = await res.json();

        daftarPemilik.forEach(function (pemilik) {

            const tr = document.createElement("tr");

            tr.innerHTML =
                "<td>" + pemilik.id_pemilik + "</td>" +
                "<td>" + pemilik.nama + "</td>" +
                "<td>" + pemilik.alamat + "</td>" +
                "<td>" + pemilik.no_hp + "</td>" +
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
    muatDaftarPemilik
);