import { MapPin, GraduationCap, Quote, ArrowRight, User } from "lucide-react";
import { BentoCard, SectionTitle } from "../components/Shared";

export default function Profil() {
  return (
    <section id="profil" className="flex flex-col gap-8">
      {/* Profil Pribadi (Hero) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <BentoCard className="h-full relative overflow-hidden flex flex-col justify-end min-h-[400px]">
            <div className="absolute top-0 right-0 p-8">
              {/* <span className="px-3 py-1 rounded-full bg-[#4361EE]/10 text-[#4361EE] text-[10px] font-bold uppercase tracking-widest border border-[#4361EE]/20">Calon Guru Profesional</span> */}
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                Shahnaz Ferdiansyah<span className="text-[#4361EE]">.</span>
              </h1>
              <p className="text-slate-600 leading-relaxed max-w-2xl text-lg">
                Terinspirasi oleh kekuatan transformatif pendidikan dalam
                membentuk karakter dan membuka peluang bagi generasi muda, saya
                bertekad untuk menjadi seorang guru profesional yang
                berintegritas dan efektif. Tujuan saya adalah menciptakan
                lingkungan belajar yang inklusif, memotivasi, dan inovatif, di
                mana setiap peserta didik dapat menumbuhkan rasa ingin tahu,
                empati, dan keterampilan berpikir kritis. Dengan mengombinasikan
                penguasaan pedagogi yang kuat serta integrasi teknologi masa
                kini.
              </p>
              <div className="mt-8">
                <a
                  href="/instrumen-penilaian"
                  className="inline-block bg-[#4361EE] hover:bg-[#3a56d4] text-white px-8 py-3 rounded-full font-bold shadow-[0_5px_15px_rgba(67,97,238,0.3)] hover:scale-105 transition-all"
                >
                  Lihat Analisis Reflektif
                </a>
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="md:col-span-4">
          <BentoCard className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] text-white p-0 overflow-hidden group">
            <img
              src="https://res-console.cloudinary.com/dbc8npin5/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/U2hhaG5hel9HcmFkLTIzXzMuSlBHX3d4ZzNsZg==/template_primary"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </BentoCard>
        </div>
      </div>

      <SectionTitle
        title="Informasi Identitas"
        subtitle="Profil & Lokasi"
        icon={User}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Lokasi Kampus */}
        <BentoCard className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Universitas Kristen Satya Wacana (UKSW)
          </h3>
          <p className="text-sm font-semibold text-[#4361EE] uppercase tracking-wider">
            Lokasi Kampus
          </p>
          <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              src="https://www.google.com/maps?q=Universitas+Kristen+Satya+Wacana+Salatiga&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Menempuh Program Pendidikan Guru (PPG) Calon Guru di UKSW Salatiga.
            Menjadi pusat pembelajaran pedagogi modern, tempat di mana saya
            menyerap berbagai wawasan terkait psikologi pendidikan dan
            metodologi pengajaran berbasis pemecahan masalah terkini.
          </p>
        </BentoCard>

        {/* Lokasi Tempat PPL */}
        <BentoCard className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600">
            <MapPin size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            SMK Negeri 2 Salatiga
          </h3>
          <p className="text-sm font-semibold text-[#72EFDD] uppercase tracking-wider">
            Lokasi Tempat PPL
          </p>
          <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              src="https://www.google.com/maps?q=SMK+Negeri+2+Salatiga&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Tempat saya mengaplikasikan ilmu dan berinteraksi langsung dengan
            para siswa vokasi. Fokus pada keahlian pengembangan perangkat
            pembelajaran nyata, evaluasi pembelajaran, serta membimbing
            siswa-siswa hebat memasuki gerbang dunia industri dan wirausaha.
          </p>
        </BentoCard>
      </div>

      <div className="mb-8">
        {/* Biodata Singkat */}
        <div className="w-full">
          <BentoCard className="h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-6 font-bold">
              Biodata Singkat Saya
            </h3>
            <div className="space-y-4 text-slate-600">
              <div className="flex border-b border-slate-100 pb-3">
                <span className="w-40 font-semibold text-slate-800">
                  Nama Lengkap
                </span>
                <span>Shahnaz Ferdiansyah</span>
              </div>
              <div className="flex border-b border-slate-100 pb-3">
                <span className="w-40 font-semibold text-slate-800">
                  Asal Daerah
                </span>
                <span>Purbalingga, Jawa Tengah</span>
              </div>
              <div className="flex border-b border-slate-100 pb-3">
                <span className="w-40 font-semibold text-slate-800">
                  Program
                </span>
                <span>PPG Calon Guru</span>
              </div>
              <div className="flex border-b border-slate-100 pb-3">
                <span className="w-40 font-semibold text-slate-800">
                  Filosofi Mengajar
                </span>
                <span className="italic">
                  "Menanamkan Akar yang Kuat untuk Cabang yang Menggapai
                  Langit."
                </span>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
              Filosofi mengajar saya berakar pada ideologi progresivisme dan
              humanisme yang tertuang dalam prinsip "Menanamkan Akar yang Kuat
              untuk Cabang yang Menggapai Langit." Saya memiliki keyakinan
              mendalam bahwa pendidikan bukan sekadar proses transfer keilmuan,
              melainkan upaya menuntun kekuatan kodrat anak agar mereka dapat
              mencapai keselamatan dan kebahagiaan setinggi-tingginya, sejalan
              dengan pemikiran Ki Hadjar Dewantara. "Akar yang kuat"
              melambangkan penanaman karakter, etika kerja, dan konsep dasar
              yang kokoh. Sementara "cabang yang menggapai langit" adalah simbol
              kemandirian siswa untuk berinovasi, berekspresi, dan melejitkan
              potensi terbaik mereka di dunia industri sesuai dengan bakat
              alamiahnya.
            </p>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
              Nilai utama yang saya junjung tinggi dalam proses ini adalah
              inklusivitas, adaptabilitas, dan keadilan dalam merespons keunikan
              tiap individu. Nilai-nilai tersebut saya manifestasikan ke dalam
              prinsip pembelajaran dan asesmen diferensiasi (differentiated
              instruction) yang dipopulerkan oleh Carol Ann Tomlinson. Saya
              menyadari bahwa keadilan di dalam ruang kelas bukan berarti
              memperlakukan semua siswa dengan cara yang sama, melainkan
              memberikan dukungan yang tepat sesuai kebutuhan mereka. Mengingat
              siswa vokasi sering kali memiliki dominasi kecerdasan
              kinestetik-jasmani dan visual-spasial berdasarkan teori Multiple
              Intelligences, maka sudah sepatutnya ruang belajar dirancang untuk
              merayakan kekuatan fisik dan praktis mereka, bukan menjebak mereka
              dalam sekat-sekat teori yang kaku.
            </p>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed">
              Sebagai langkah konkret ke depan, adaptasi pembelajaran saya akan
              menitikberatkan pada perancangan asesmen diferensiasi yang ramah
              terhadap karakteristik siswa vokasi yang unggul dalam keterampilan
              motorik kasar. Mengacu pada teori pragmatisme John Dewey tentang
              learning by doing (belajar lewat tindakan), saya berkomitmen untuk
              mengurangi kompleksitas bahasa dalam instruksi tugas tertulis dan
              mengalihkannya pada instruksi demonstrasi visual serta pemodelan
              langsung. Melalui pendekatan yang lebih aplikatif dan intuitif
              ini, siswa tidak lagi dinilai dari seberapa banyak teori yang
              mereka hafal, melainkan dari bagaimana mereka mampu
              mendemonstrasikan keahlian nyata. Dengan fondasi yang adaptif ini,
              mereka akan siap tumbuh menjadi lulusan yang tangguh, terampil,
              dan siap menaklukkan tantangan di masa depan.
            </p>
          </BentoCard>
        </div>
      </div>

      {/* <BentoCard className="w-full">
        <h2 className="text-2xl font-bold text-[#4361EE] mb-6">
          Statistik Kelas Ceria
        </h2>
        <div className="overflow-x-auto">
          <table
            className="w-full text-left border-separate"
            style={{ borderSpacing: "0 10px" }}
          >
            <thead>
              <tr className="text-[#4361EE]">
                <th className="p-4 font-bold border-b border-white/50">
                  Kelas
                </th>
                <th className="p-4 font-bold border-b border-white/50">
                  Topik Pembelajaran
                </th>
                <th className="p-4 font-bold border-b border-white/50">
                  Tingkat Antusiasme
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 bg-white/50 rounded-l-[15px] font-semibold text-slate-700">
                  TKR - Kelas 10 A
                </td>
                <td className="p-4 bg-white/50 text-slate-600">
                  Simulasi Sistem Injeksi (Gamifikasi)
                </td>
                <td className="p-4 bg-white/50 rounded-r-[15px]">
                  <span className="bg-[#72EFDD] text-[#086054] px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    Sangat Tinggi
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-white/50 rounded-l-[15px] font-semibold text-slate-700">
                  TKR - Kelas 11 B
                </td>
                <td className="p-4 bg-white/50 text-slate-600">
                  Analisis Trouble Shooting Mesin
                </td>
                <td className="p-4 bg-white/50 rounded-r-[15px]">
                  <span className="bg-[#72EFDD]/80 text-[#086054] px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    Tinggi
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-white/50 rounded-l-[15px] font-semibold text-slate-700">
                  TKR - Kelas 12 (Persiapan Prakerin)
                </td>
                <td className="p-4 bg-white/50 text-slate-600">
                  Etika Profesi & Wirausaha Bengkel
                </td>
                <td className="p-4 bg-white/50 rounded-r-[15px]">
                  <span className="bg-[#FFD60A] text-slate-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    Maksimal
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BentoCard> */}
    </section>
  );
}
