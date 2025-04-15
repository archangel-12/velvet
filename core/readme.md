<!--
  Ucapan terimakaih kepada [othneildrew](https://github.com/othneildrew/Best-README-Template)
  dan [race2infinity](https://github.com/race2infinity/The-Documentation-Compendium).
  Untuk referensi lebih lanjut, bisa melihat ke deskripsi ``readme`` mereka masing-masing...
-->

<p align="center">
  <img src="/core/app/favicon.ico" alt="Velvet-logo" width="90" height="90" />
</p>

<h3 align="center">Velvet</h3>

<p align="center">
  Untuk melihat deskripsi asli, bisa membaca teks <a href="./core/readme.md">sebelumnya</a>
</p>

<p align="center">
  <a href="https://github.com/archangel-12/velvet/core"><strong>kode sumber bisa diakses disini »</strong></a>
</p>

<p align="center">
  <a href="/LICENSE">
    <img src="https://img.shields.io/badge/lisensi-MIT-blue.svg" alt="Lisensi MIT" />
  </a>
</p>

<details>
    <summary>Daftar Isi</summary>
    <ol>
        <li>
            <a href="#Apa-itu-velvet?">Apa itu Velvet?</a>
        </li>
        <li>
            <a href="#Hah-maksud?">Hah, maksud?</a>
        </li>
        <li>
            <a href="#Kok-kepikiran-sih-buat-beginian?">Kok kepikiran sih buat beginian?</a>
        </li>
        <li><a href="#Pakai-plugin-apa-aja-untuk-buat-velvet?">Pakai plugin apa aja untuk buat velvet?</a></li>
        <li><a href="#Alur-waktu-pengembangan-Velvet">📘 Alur waktu pengembangan Velvet</a></li>
    </ol>
</details>

> [!IMPORTANT]  
> Proyek ini masih dalam fase pengembangan. Harap bersabar, sebentar lagi akan dirilis :)

### Apa itu Velvet?
> Sebuah chatbot! tapi chatbot ini hanya menjawab pertanyaan seputar sejarah saja 🤗

### Hah, maksud?
Velvet ini adalah *chatbot* yang sudah di*code* dan diprogram untuk memprioritaskan semua jawaban seputar materi sejarah dan yang yang paling utama, proyek *chatbot* ini berusaha untuk *adressing* sejarah yang awalnya membosankan dan isinya begitu-gitu aja __menjadi__ jauh lebih menyenangkan dan informatif :)

### Kok kepikiran sih buat beginian?
Ku membuat proyek ini adalah karena ku menyukai gagasan tentang mata kuliah yang digabung bersama terlepas dari perbedaan fakultas dan ilmu itu sendiri (*multidisiplin*). Ku percaya jika sejarah dapat diintegrasikan dengan kecerdasan buatan, ini bisa membuka wawasan inovatif yang belum pernah dibayangkan manusia, atau membantu kita menemukan hal-hal yang belum pernah kita temukan sebelumnya.

Proyek ini hanyalah bukti kecil bahwa siapa pun dapat melakukan hal-hal menakjubkan dengan kecerdasan buatan dengan cara yang positif dan mudah-mudahan bermakna. Ini semua tentang menggunakannya dengan hati-hati dan tujuan yang jelas untuk mendidik anak-anak, terutama dalam mata kuliah seperti sejarah, yang sering dianggap membosankan. Sebaga *developer*, ku bertujuan untuk mengubahnya, untuk membuat sejarah lebih menyenangkan dan benar-benar menarik.

### Pakai plugin apa aja untuk buat velvet?
   1. Segala jenis *IDE* berbasis *virtual*: Menggunakan <a href="https://gitpod.io/"><img src="https://img.shields.io/badge/-Gitpod-orange?logo=gitpod&logoColor=white&label=" alt="gitpod" /></a> atau <a href="https://idx.dev/"><img src="https://img.shields.io/badge/Project%20Idx-beta-blue?logo=googlecloud&logoColor=white" alt="idx.dev"/></a> sebagai lingkungan pengembangan berbasis *cloud*,

   2. *Runtime*: Memakai <a href="https://bun.sh/"><img src="https://img.shields.io/badge/Bun-%23000000.svg?logo=bun&logoColor=white" alt="bun"></a> karena performanya yang cepat dan efisien,

   3. Kerangka kerja: Memakai <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-%23000000.svg?logo=next.js&logoColor=white" alt="next"></a> untuk fitur yang kuat serta dukungan [*server-side rendering*](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering),

   4. *Styling*: Menggunakan <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/tailwind.css-%2338B2AC.svg?logo=tailwindcss&logoColor=white" alt="tailwind"></a> sebagai solusi *styling* berbasis [*utility-first*](https://tailwindcss.com/docs/styling-with-utility-classes).
   
   5. Pustaka komponen: Menggunakan <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn/ui-%2318181B.svg?logo=vercel&logoColor=white" alt="shadcn/ui"></a> untuk mempercepat pengembangan antarmuka pengguna,

   6. Bahasa: Memakai <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?logo=typescript&logoColor=white" alt="ts"></a>,

   7. Penyedia untuk model LLM: [Groq](https://groq.com/),

   8. Memakai [*DeepSeek*](https://www.deepseek.com/) sebagai model LLM utama alih-alih memakai model LLM lain seperti GPT-4 atau Grok ataupun Claude (~~alasan lebih sederhananya karena aku kere~~)

   9. Dan terakhir, memakai <a href="https://dashboard.clerk.com/"><img src="https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white" alt="clerk"></a> hal-hal yang berhubungan dengan *back-end* 
---

### 📘 Alur sejarah pengembangan Velvet
Proyek ini dimulai pada pertengahan akhir 2023 sebagai wacana semata, kemudian berhenti sepanjang 2024 karena KKN dan magang mengajar, dan sekarang bisa dikatakan proyek ini hampir selesai. Berikut adalah *timeline* sejauh ini:
| fase               | Status          | Tanggal dimulai | Tanggal berakhir | Catatan                                      |
|----------------------------|------------------|--------------|--------------|---------------------------------------------|
| Ide dan konsep awal    | ✅ Selesai     | Sept 2023     |  Nov 2023     | Berawal dari pengembangan model LLM sederhana akan tetapi terhenti gegara terlalu kompleks dan juga karena operasi         |
| Proyek berhenti untuk sementara waktu             | ⏸️ Berhenti untuk sementara waktu       | Dec 2023     | Sepanjang 2024     | Gegara KKN dan magang mengajar + libur natal       |
| Melanjutkan ide menjadi topik skripsi (Reboot & Redesign)          | ✅ Selesai     | Nov 2024     | Feb 2025     | Restorasi Awal     |
| Integrasi model LLM *DeepSeek* dan kesuksesan tes pertama (Dosen pembimbing sebagai tester pertama) | ✅ Selesai     | Feb 2025     | Mar 2025     | Kerangka dasar untuk *Chatbot* berhasil di-implementasikan                 |
| Pengembangan UI selanjutnya       | 🔄 dalam progres   | Mar 2025     | —      | Penambahan fitur seperti log dan sign in + list *chat* terakhir                |
| Testing terakhir dan perilisan ke publik     | ⏳ Segera   | May 2025     | —            | Mohon bersabar ini ujian :)                         |