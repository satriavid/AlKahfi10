'use client'

export default function MotivationPage() {
  const motivations = [
    {
      title: "Perlindungan dari Dajjal",
      content: "\"Barangsiapa menghafal sepuluh ayat pertama dari surah Al-Kahfi, maka ia akan terlindungi dari (fitnah) Dajjal.\" (HR. Muslim)",
      icon: "🛡️"
    },
    {
      title: "Cahaya di Hari Kiamat",
      content: "\"Barangsiapa membaca surah Al-Kahfi pada hari Jumat, maka akan dipancarkan cahaya untuknya di antara dua Jumat.\" (HR. Al-Hakim)",
      icon: "⭐"
    },
    {
      title: "Ketenangan Hati",
      content: "Membaca dan menghafal Al-Qur'an mendatangkan ketenangan (sakinah) dan rahmat dari Allah SWT.",
      icon: "💖"
    },
    {
      title: "Pahala Berlipat Ganda",
      content: "Setiap huruf yang dibaca dan dihafal bernilai 10 kebaikan. Menghafal 10 ayat adalah tabungan pahala yang luar biasa.",
      icon: "📖"
    }
  ]

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl font-bold text-[#2E7D32] mb-2">Motivasi Menghafal</h1>
        <p className="text-slate-600 text-sm">Keutamaan menghafal 10 ayat pertama Surah Al-Kahfi</p>
      </header>

      <div className="space-y-4">
        {motivations.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-lg text-slate-800 font-medium">{item.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}