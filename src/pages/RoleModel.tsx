import { Target, CheckCircle2 } from "lucide-react";
import { BentoCard, SectionTitle } from "../components/Shared";

export default function RoleModel() {
  return (
    <section>
      <SectionTitle
        title="Visi & Karakter Guru Profesional"
        subtitle="Model Guru"
        icon={Target}
      />

      <div className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-[#2b2d42] font-medium leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
          Sebagai agen perubahan dalam dunia pendidikan vokasi, seorang guru
          wajib memiliki prinsip dan fondasi karakter yang kokoh. Halaman ini
          mendeskripsikan model kepemimpinan serta strategi mendidik yang akan
          saya kembangkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard className="md:col-span-1 !bg-gradient-to-br from-[#4361EE] to-[#4CC9F0] text-white border-none shadow-[0_15px_35px_rgba(67,97,238,0.2)]">
          <h4 className="text-xl font-bold mb-6 text-white absolute top-8 left-8">
            Target Kompetensi Inti
          </h4>
          <ul className="space-y-5 relative z-10 mt-12">
            {[
              "Teknis-Inovatif",
              "Integritas Moral",
              "Adaptabilitas",
              "Keadilan Inklusif",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm border-b border-white/20 pb-4 last:border-0 last:pb-0"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <span className="font-bold text-base tracking-wide text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <h4 className="text-2xl font-bold text-slate-800 mb-8">
            Misi Strategis Pendidikan
          </h4>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="font-bold text-4xl text-[#4CC9F0] opacity-50 italic">
                01
              </div>
              <div>
                <p className="font-bold text-lg text-slate-800 mb-2">
                  Inovasi Pembelajaran Digital
                </p>
                <p className="text-slate-900 leading-relaxed text-sm">
                  Menciptakan ekosistem belajar SMK yang berbasis industri dan
                  relevan secara global. Hal ini diwujudkan melalui
                  pengintegrasian literasi digital dan simulator interaktif ke
                  dalam media pengajaran praktik kejuruan.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="font-bold text-4xl text-[#4CC9F0] opacity-50 italic">
                02
              </div>
              <div>
                <p className="font-bold text-lg text-slate-800 mb-2">
                  Kepemimpinan Karakter & Etos Kerja
                </p>
                <p className="text-slate-900 leading-relaxed text-sm">
                  Menanamkan nilai kejujuran, disiplin, peduli sosial, dan etos
                  kerja yang tahan banting bagi siswa SMK. Pendidikan tidak akan
                  utuh tanpa membekali siswa dengan kesiapan mental menghadapi
                  dinamika dunia profesional.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="font-bold text-4xl text-[#4CC9F0] opacity-50 italic">
                03
              </div>
              <div>
                <p className="font-bold text-lg text-slate-800 mb-2">
                  Belajar Sepanjang Hayat (Lifelong Learning)
                </p>
                <p className="text-slate-900 leading-relaxed text-sm">
                  Menjadi guru bukan berarti berhenti belajar. Saya berkomitmen
                  untuk senantiasa melatih kepekaan reflektif, menerima umpan
                  balik untuk memperbaiki diri, serta up-to-date terkait tren
                  industri teknik mutakhir.
                </p>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
