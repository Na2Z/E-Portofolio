import {
  ClipboardCheck,
  FileText,
  ExternalLink,
  TrendingUp,
  Layout,
  RefreshCw,
  Cpu,
} from "lucide-react";
import { BentoCard, SectionTitle } from "../components/Shared";

export default function Penilaian() {
  return (
    <section>
      <SectionTitle
        title="Evaluasi & Penilaian Supervisi"
        subtitle="Instrumen Penilaian"
        icon={ClipboardCheck}
      />

      <div className="mb-12 text-slate-900 max-w-3xl leading-relaxed">
        <p>
          Rekapitulasi dokumen PDF terkait Rencana Perangkat Pembelajaran
          (Lampiran 7) dan Praktik Mengajar Lapangan (Lampiran 8) yang
          disupervisi langsung oleh Guru Pamong SMK Negeri 2 Salatiga selama
          pelaksanaan PPL bersiklus.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Lampiran 7 */}
        <BentoCard className="p-0 overflow-hidden flex flex-col h-[600px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
          <div className="bg-gradient-to-r from-[#FFD60A] to-[#ffaa00] p-6 text-[#2b2d42] flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-bold text-lg">Lampiran 7</h3>
              <p className="text-xs text-yellow-900/70 mt-1 font-bold">
                Dokumen Lampiran 7
              </p>
            </div>
          </div>
          <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative flex flex-col">
            <div className="flex-1 w-full relative">
              <iframe
                src="https://drive.google.com/file/d/1VBN5h-F5m3daIlk31IA5AtU5SfobBFZZ/preview"
                className="w-full h-full border-0 absolute inset-0"
                title="Dokumen PDF Lampiran 7"
              />
            </div>
            <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
              <a
                href="https://drive.google.com/file/d/1VBN5h-F5m3daIlk31IA5AtU5SfobBFZZ/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#4361EE] hover:text-[#3a56d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                title="Buka di tab baru untuk layar penuh dan zoom"
              >
                <ExternalLink size={14} />
                Buka di Tab Baru
              </a>
            </div>
          </div>
        </BentoCard>

        {/* Lampiran 8 */}
        <BentoCard className="p-0 overflow-hidden flex flex-col h-[600px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
          <div className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] p-6 text-white flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-bold text-lg">Lampiran 8</h3>
              <p className="text-xs text-blue-100 mt-1 font-bold">
                Dokumen Lampiran 8
              </p>
            </div>
          </div>
          <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative flex flex-col">
            <div className="flex-1 w-full relative">
              <iframe
                src="https://drive.google.com/file/d/1leqFqlEvGzgqYhymnZXqlJ1x8Ognz8GS/preview"
                className="w-full h-full border-0 absolute inset-0"
                title="Dokumen PDF Lampiran 8"
              />
            </div>
            <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
              <a
                href="https://drive.google.com/file/d/1leqFqlEvGzgqYhymnZXqlJ1x8Ognz8GS/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#4361EE] hover:text-[#3a56d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                title="Buka di tab baru untuk layar penuh dan zoom"
              >
                <ExternalLink size={14} />
                Buka di Tab Baru
              </a>
            </div>
          </div>
        </BentoCard>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Analisis Artefak */}
        <BentoCard className="p-0 overflow-hidden flex flex-col h-[600px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
          <div className="bg-gradient-to-r from-[#FFD60A] to-[#ffaa00] p-6 text-[#2b2d42] flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-bold text-lg">Analisis Mendalam</h3>
              <p className="text-xs text-yellow-900/70 mt-1 font-bold">
                Tujuan, Kelebihan dan kekurangan serta kajian teori
              </p>
            </div>
          </div>
          <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative flex flex-col">
            <div className="flex-1 w-full relative">
              <iframe
                src="https://drive.google.com/file/d/1gLOLgwbAlAqCBnTkM1yANiEE9INQZBCK/preview"
                className="w-full h-full border-0 absolute inset-0"
                title="Analisis mendalam"
              />
            </div>
            <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
              <a
                href="https://drive.google.com/file/d/1gLOLgwbAlAqCBnTkM1yANiEE9INQZBCK/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#4361EE] hover:text-[#3a56d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                title="Buka di tab baru untuk layar penuh dan zoom"
              >
                <ExternalLink size={14} />
                Buka di Tab Baru
              </a>
            </div>
          </div>
        </BentoCard>

        {/* Refleksi Akhir */}
        <BentoCard className="p-0 overflow-hidden flex flex-col h-[600px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
          <div className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] p-6 text-white flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-bold text-lg">
                Analisis Artefak dengan aspek
              </h3>
              <p className="text-xs text-blue-100 mt-1 font-bold">
                kendala, konsep, keberhasilan dan perubahan situasi
              </p>
            </div>
          </div>
          <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative flex flex-col">
            <div className="flex-1 w-full relative">
              <iframe
                src="https://drive.google.com/file/d/11ol3Fc6xGV_0BiKBqCCbyVsuwkdQRsq_/preview"
                className="w-full h-full border-0 absolute inset-0"
                title="Analisis artefak dengan aspek"
              />
            </div>
            <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
              <a
                href="https://drive.google.com/file/d/11ol3Fc6xGV_0BiKBqCCbyVsuwkdQRsq_/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#4361EE] hover:text-[#3a56d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                title="Buka di tab baru untuk layar penuh dan zoom"
              >
                <ExternalLink size={14} />
                Buka di Tab Baru
              </a>
            </div>
          </div>
        </BentoCard>
      </div>

      <br />
      <br />

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-sans">
          Refleksi Akhir PPL terbimbing
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <BentoCard delay={0.1} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Cpu size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Apa yang telah dipelajari
          </h4>
          <p className="text-slate-900 leading-relaxed">
            Melalui penyusunan Modul Ajar Project IoT ini, saya mempelajari
            bagaimana merancang{" "}
            <strong>pembelajaran berbasis proyek (PjBL) </strong>
            yang autentik dan kontekstual untuk siswa SMK kelas X dalam kerangka
            Kurikulum Merdeka. Saya memahami cara mengintegrasikan berbagai
            teori pedagogis secara terpadu mulai dari konstruktivisme{" "}
            <strong>Vygotsky, Experiential Learning Kolb</strong>, hingga{" "}
            <strong>
              Deep Learning framework (Mindful, Joyful, Meaningful)
            </strong>{" "}
            ke dalam aktivitas nyata seperti perakitan hardware ESP32,
            pemrograman, hingga integrasi platform cloud IoT. Selain itu, saya
            juga belajar menyusun instrumen asesmen autentik berlapis yang tidak
            hanya mengukur hasil akhir, tetapi juga proses berpikir dan
            kolaborasi siswa.
          </p>
        </BentoCard>

        <BentoCard delay={0.2} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Layout size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Pengalaman menantang
          </h4>
          <p className="text-slate-900 leading-relaxed">
            Tantangan terbesar yang saya hadapi adalah menyeimbangkan kedalaman
            konten teknis IoT dengan keterbacaan modul bagi siswa kelas X yang
            sebagian besar belum pernah memegang ESP32 sebelumnya. Di sisi lain,
            manajemen waktu menjadi kendala nyata. Heterogenitas kemampuan awal
            siswa juga menjadi tantangan tersendiri karena belum ada mekanisme
            pemetaan kompetensi awal yang eksplisit dalam modul. Perangkat yang
            dikembangkan mengadopsi teori{" "}
          </p>
        </BentoCard>

        <BentoCard delay={0.3} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Solusi</h4>
          <p className="text-slate-900 leading-relaxed">
            Untuk mengatasi tantangan tersebut, saya menerapkan beberapa
            strategi adaptif kedepannya seperti penggunaan simulasi Wokwi
            sebagai alternatif ketika komponen fisik terbatas atau sebagai
            latihan sebelum praktik nyata, penyediaan dua versi LKPD (guided
            untuk pemula dan open-ended untuk yang sudah berpengalaman), serta
            menyiapkan rencana kontingensi demo live berupa rekaman video atau
            dokumentasi foto apabila perangkat gagal berfungsi saat presentasi.
            saya juga merekomendasikan penambahan pre-assessment singkat di awal
            pembelajaran dan exit ticket di setiap akhir pertemuan agar strategi
            mengajar dapat disesuaikan secara real-time.
          </p>
        </BentoCard>

        <BentoCard delay={0.4} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <RefreshCw size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Refleksi Pribadi</h4>
          <p className="text-slate-900 leading-relaxed">
            Secara keseluruhan, modul ini dinilai kuat dalam hal keaslian
            konteks lokal Indonesia dan kesesuaiannya dengan teori-teori
            pembelajaran kontemporer, namun masih memerlukan penyempurnaan di
            beberapa area penting. Tujuan pembelajaran perlu
            dioperasionalisasikan dengan kriteria yang lebih terukur dan
            spesifik, prosedur K3 perlu diperkuat dari sekadar pengingat verbal
            menjadi checklist tertulis yang terverifikasi, serta strategi
            diferensiasi pembelajaran perlu dieksplisitkan agar siswa dengan
            berbagai tingkat kemampuan awal dapat terlayani dengan optimal.
            Dengan perbaikan pada area-area tersebut, modul ini berpotensi besar
            untuk diadaptasi dan disebarluaskan ke sekolah-sekolah kejuruan lain
            di Indonesia.
          </p>
        </BentoCard>
      </div>
    </section>
  );
}
