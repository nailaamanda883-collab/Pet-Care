// ===== Hamburger Menu =====

function initNavToggle() {

    const toggleBtn =
        document.getElementById("nav-toggle-btn");

    const nav =
        document.querySelector("header nav");

    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener(
        "click",
        function () {

            nav.classList.toggle("nav-open");

        }
    );
}


// ===== Konfirmasi Hapus =====

function initHapusConfirm() {

    document.addEventListener(
        "click",
        function (e) {

            const btn =
                e.target.closest(".btn-hapus");

            if (!btn) return;

            const row =
                btn.closest("tr");

            const nama =
                row
                    ? row.querySelector("td")?.textContent
                    : "data ini";

            const yakin =
                confirm(
                    'Yakin ingin menghapus "' +
                    nama +
                    '"?'
                );

            if (yakin && row) {

                row.remove();

            }

        }
    );
}


// ===== Filter / Pencarian =====

function initTableFilter() {

    const input =
        document.getElementById("search-input");

    const table =
        document.querySelector(
            ".table-responsive table"
        );

    if (!input || !table) return;

    input.addEventListener(
        "keyup",
        function () {

            const keyword =
                input.value.toLowerCase();

            const rows =
                table.querySelectorAll(
                    "tbody tr"
                );

            rows.forEach(
                function (row) {

                    const teks =
                        row.textContent.toLowerCase();

                    row.style.display =
                        teks.includes(keyword)
                            ? ""
                            : "none";

                }
            );

        }
    );
}


// ===== Menampilkan Error =====

function tampilkanError(input, pesan) {

    hapusError(input);

    const span =
        document.createElement("span");

    span.className = "error";

    span.textContent = pesan;

    input.insertAdjacentElement(
        "afterend",
        span
    );
}


function hapusError(input) {

    const next =
        input.nextElementSibling;

    if (
        next &&
        next.classList.contains("error")
    ) {

        next.remove();

    }
}


// ===== Validasi Form =====

function initValidasiForm() {

    const form =
        document.getElementById(
            "form-tambah"
        );

    if (!form) return;

    form.addEventListener(
        "submit",
        function (e) {

            let valid = true;

            const nama =
                form.querySelector(
                    "[name='nama']"
                );

            if (
                nama &&
                nama.value.trim() === ""
            ) {

                tampilkanError(
                    nama,
                    "Nama wajib diisi."
                );

                valid = false;

            } else if (nama) {

                hapusError(nama);

            }


            const usia =
                form.querySelector(
                    "[name='usia']"
                );

            if (usia) {

                const nilai =
                    parseInt(
                        usia.value,
                        10
                    );

                if (
                    isNaN(nilai) ||
                    nilai < 0
                ) {

                    tampilkanError(
                        usia,
                        "Usia harus berupa angka 0 atau lebih."
                    );

                    valid = false;

                } else {

                    hapusError(usia);

                }

            }


            if (!valid) {

                e.preventDefault();

            } else {

                e.preventDefault();

                alert(
                    "Data berhasil divalidasi!"
                );

            }

        }
    );
}


// ===== Jalankan Semua Fungsi =====

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initNavToggle();
        initHapusConfirm();
        initTableFilter();
        initValidasiForm();

    }
);