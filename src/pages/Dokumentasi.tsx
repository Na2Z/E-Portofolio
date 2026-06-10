import { Camera } from "lucide-react";
import { BentoCard, SectionTitle } from "../components/Shared";

export default function Dokumentasi() {
  return (
    <section>
      <SectionTitle
        title="Dokumentasi PPL"
        subtitle="Galeri Lensa"
        icon={Camera}
      />

      <div className="mb-12 text-slate-900 max-w-3xl leading-relaxed">
        <p>
          Kumpulan bukti fisik dan dokumentasi lapangan selama pelaksanaan
          kegiatan Praktik Pengalaman Lapangan (PPL) di SMK Negeri 2 Salatiga.
          Potret ini menjadi jejak nyata kolaborasi dengan elemen sekolah dan
          interaksi dinamis bersama peserta didik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="p-4" delay={0.1}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <img
              src="https://res.cloudinary.com/dbc8npin5/image/upload/WhatsApp_Image_2026-04-16_at_11.01.41_AM_ng3p4j"
              alt="Mengajar di Kelas"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 1
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">
            Pelaksanaan Pembelajaran
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Interaksi dua arah dalam kelas.
          </p>
        </BentoCard>

        <BentoCard className="p-4" delay={0.2}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <img
              src="https://res.cloudinary.com/dbc8npin5/image/upload/WhatsApp_Image_2026-06-10_at_8.42.02_AM_fw54wt"
              alt="Perencanaan"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 3
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">
            Perencanaan Project IoT
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Rencana Project IoT kelas X TKJ B
          </p>
        </BentoCard>

        <BentoCard className="p-4" delay={0.3}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <video
              src="https://res.cloudinary.com/dbc8npin5/video/upload/v1781101048/IMG_0507_fykumx.mp4"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              muted
              loop
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 2
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">
            Diskusi Proyek Siswa
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Fasilitasi pemecahan masalah bersama.
          </p>
        </BentoCard>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="p-4" delay={0.4}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <img
              src="https://res.cloudinary.com/dbc8npin5/image/upload/WhatsApp_Image_2026-06-04_at_9.24.00_PM_nvkozr"
              alt="Mengajar di Kelas"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 1
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">Presentasi</h4>
          <p className="text-sm text-slate-500 mt-1">
            Presentasi Prokect IoT kelas X TKJ A dan X TKJ B
          </p>
        </BentoCard>

        <BentoCard className="p-4" delay={0.5}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <video
              src="https://res.cloudinary.com/dbc8npin5/video/upload/v1781101039/WhatsApp_Video_2026-06-10_at_8.42.01_AM_ncnfxr.mp4"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              muted
              loop
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 2
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">Hasil Produk</h4>
          <p className="text-sm text-slate-500 mt-1">
            Hasil Produk Project IoT Kelas X TKJ
          </p>
        </BentoCard>

        <BentoCard className="p-4" delay={0.6}>
          <div className="w-full aspect-video md:aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4 group relative">
            <img
              src="https://res.cloudinary.com/dbc8npin5/image/upload/WhatsApp_Image_2026-06-10_at_8.42.01_AM_du2vrz"
              alt="Dokumentasi Bersama"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-semibold flex items-center gap-2">
                <Camera size={16} /> Siklus 3
              </span>
            </div> */}
          </div>
          <h4 className="font-bold text-slate-800 text-lg">
            Dokumentasi bersama
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            Dokumentasi bersama X TKJ A dan X TKJ B, Guru Pamong dan Mahasiswa
            PPL
          </p>
        </BentoCard>
      </div>
    </section>
  );
}
