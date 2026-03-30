import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, Shield, Heart, BookOpen } from 'lucide-react';

export function MotivationPage() {
  const motivations = [
    {
      title: "Perlindungan dari Dajjal",
      content: "\"Barangsiapa menghafal sepuluh ayat pertama dari surah Al-Kahfi, maka ia akan terlindungi dari (fitnah) Dajjal.\" (HR. Muslim)",
      icon: <Shield className="text-[#2E7D32]" size={24} />
    },
    {
      title: "Cahaya di Hari Kiamat",
      content: "\"Barangsiapa membaca surah Al-Kahfi pada hari Jumat, maka akan dipancarkan cahaya untuknya di antara dua Jumat.\" (HR. Al-Hakim)",
      icon: <Star className="text-[#C8A951]" size={24} />
    },
    {
      title: "Ketenangan Hati",
      content: "Membaca dan menghafal Al-Qur'an mendatangkan ketenangan (sakinah) dan rahmat dari Allah SWT.",
      icon: <Heart className="text-rose-500" size={24} />
    },
    {
      title: "Pahala Berlipat Ganda",
      content: "Setiap huruf yang dibaca dan dihafal bernilai 10 kebaikan. Menghafal 10 ayat adalah tabungan pahala yang luar biasa.",
      icon: <BookOpen className="text-blue-500" size={24} />
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <header className="text-center pt-8 pb-2">
        <h1 className="text-2xl font-bold text-[#2E7D32] mb-2">Motivasi Menghafal</h1>
        <p className="text-slate-600 text-sm">Keutamaan menghafal 10 ayat pertama Surah Al-Kahfi</p>
      </header>

      <div className="space-y-4">
        {motivations.map((item, index) => (
          <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 bg-slate-50 rounded-full">
                {item.icon}
              </div>
              <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
