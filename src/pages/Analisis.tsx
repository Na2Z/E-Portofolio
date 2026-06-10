import {
  BookOpen,
  Cpu,
  Layout,
  RefreshCw,
  TrendingUp,
  FileText,
  ExternalLink,
} from "lucide-react";
import { BentoCard, SectionTitle } from "../components/Shared";

export default function Analisis() {
  return (
    <section>
      <SectionTitle
        title="Analisis Reflektif Artefak"
        subtitle="Refleksi Pembelajaran"
        icon={BookOpen}
      />

      <div className="mb-10 text-slate-900 max-w-3xl leading-relaxed">
        <p>
          Halaman ini memaparkan hasil telaah dan refleksi kritis terhadap
          produk pembelajaran yang telah disusun selama pelaksanaan Program
          Pendidikan Guru (PPG). Melalui refleksi terstruktur, diharapkan model
          dan desain pembelajaran selanjutnya lebih adaptif dengan kondisi nyata
          kelas kejuruan.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-sans">
          Dokumen Artefak Pembelajaran
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* RPP */}
          <BentoCard
            delay={0.1}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] p-5 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">RPP / Modul Ajar</h3>
                <p className="text-xs text-blue-100 mt-1 font-bold">
                  Rencana Pelaksanaan Pembelajaran
                </p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\MODUL AJAR Project IoT.pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF RPP"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\MODUL AJAR Project IoT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-[#4361EE] hover:text-[#3a56d4] bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full transition-colors"
                  title="Buka di tab baru untuk layar penuh dan zoom"
                >
                  <ExternalLink size={20} />
                  Buka di Tab Baru
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Materi */}
          <BentoCard
            delay={0.2}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#FFD60A] to-[#ffaa00] p-5 text-[#2b2d42] flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">Materi Pembelajaran</h3>
                <p className="text-xs text-yellow-900/70 mt-1 font-bold">
                  Bahan Ajar / Handout
                </p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\DIAGRAM BLOK &.pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF Materi"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\DIAGRAM BLOK &.pdf"
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

          {/* LKPD */}
          <BentoCard
            delay={0.3}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#72EFDD] to-[#20c997] p-5 text-[#086054] flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">LKPD</h3>
                <p className="text-xs text-teal-900/70 mt-1 font-bold">
                  Lembar Kerja Peserta Didik
                </p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\LKPD KK1 Proyek IoT Terpadu (1).pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF LKPD"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\LKPD KK1 Proyek IoT Terpadu (1).pdf"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* LK4 */}
          <BentoCard
            delay={0.4}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#4361EE] to-[#4CC9F0] p-5 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">Refleksi</h3>
                <p className="text-xs text-blue-100 mt-1 font-bold">Siklus 1</p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\LK.4.PPLT S1 - SHAHNAZ FERDIANSYAH.pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF Refleksi 1"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\LK.4.PPLT S1 - SHAHNAZ FERDIANSYAH.pdf"
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

          {/* Lk4 */}
          <BentoCard
            delay={0.5}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#FFD60A] to-[#ffaa00] p-5 text-[#2b2d42] flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">Refleksi</h3>
                <p className="text-xs text-yellow-900/70 mt-1 font-bold">
                  Siklus 2
                </p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\LK.4.PPLT S2 - SHAHNAZ FERDIANSYAH.pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF Refleksi 2"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\LK.4.PPLT S2 - SHAHNAZ FERDIANSYAH.pdf"
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

          {/* LKPD */}
          <BentoCard
            delay={0.6}
            className="p-0 overflow-hidden flex flex-col h-[500px] border-none shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="bg-gradient-to-r from-[#72EFDD] to-[#20c997] p-5 text-[#086054] flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-lg">Refleksi</h3>
                <p className="text-xs text-teal-900/70 mt-1 font-bold">
                  Siklus 3
                </p>
              </div>
            </div>
            <div className="p-0 flex-1 bg-white/50 backdrop-blur-md relative border-t border-white/50 flex flex-col">
              <div className="flex-1 w-full relative">
                <iframe
                  src="Public\doc\LK.4.PPLT S3 - SHAHNAZ FERDIANSYAH.pdf"
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen PDF Refleksi 3"
                />
              </div>
              <div className="w-full bg-[#f8fafc]/80 py-2 px-4 flex justify-end items-center border-t border-white/50 shrink-0 z-10">
                <a
                  href="Public\doc\LK.4.PPLT S3 - SHAHNAZ FERDIANSYAH.pdf"
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
      </div>

      {/* <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 font-sans">
          Hasil Telaah & Refleksi
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <BentoCard delay={0.1} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Cpu size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Kendala Penyusunan
          </h4>
          <p className="text-slate-900 leading-relaxed">
            Menyusun rancangan materi keahlian khusus otomotif ke dalam bentuk
            perangkat yang mematuhi paradigma kurikulum merdeka cukup menantang.
            Sinkronisasi antara kedalaman materi teknis yang sangat spesifik
            dengan keterbatasan alokasi waktu sering menjadi hambatan utama
            dalam merancang skenario tatap muka.
          </p>
        </BentoCard>

        <BentoCard delay={0.2} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Layout size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Konsep Pedagogi Adopsi
          </h4>
          <p className="text-slate-900 leading-relaxed">
            Perangkat yang dikembangkan mengadopsi teori{" "}
            <strong>Constructivism</strong> serta pendekatan{" "}
            <strong>Problem Based Learning (PBL)</strong>. Pendekatan ini
            diperkuat dengan skema TPACK sehingga aktivitas kelas memaksa siswa
            SMK N 2 Salatiga mencari tahu dan menemukan formulasi pemecahan
            masalah melalui peranti digital simulasi.
          </p>
        </BentoCard>

        <BentoCard delay={0.3} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">
            Faktor Keberhasilan
          </h4>
          <p className="text-slate-900 leading-relaxed">
            Integrasi visualisasi 3D sebagai media bantu pembelajaran mesin
            berkontribusi mencolok pada keterlibatan dan pemahaman logis peserta
            didik. Ketersediaan panduan kerja (Job Sheet) berbasis scaffolding
            mendukung kemandirian eksplorasi sehingga interaksi lebih terpusat
            ke student-centered.
          </p>
        </BentoCard>

        <BentoCard delay={0.4} className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <RefreshCw size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Rencana Adaptasi</h4>
          <p className="text-slate-900 leading-relaxed">
            Adaptasi ke depannya akan menitikberatkan pada perancangan asesmen
            diferensiasi. Mengingat siswa vokasi unggul dalam keterampilan
            motorik kasar, instruksi tugas akan sedikit lebih dikurangi
            kompleksitas bahasanya dan dialihkan pada instruksi demonstrasi
            visual.
          </p>
        </BentoCard>
      </div> */}
    </section>
  );
}
