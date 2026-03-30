export interface Word {
  arabic: string;
  translation: string;
}

export interface Ayah {
  id: number;
  arabic: string;
  translation: string;
  words: Word[];
  tadabbur: string;
  tafsir: string;
  audioUrls: {
    mishary: string;
    sudais: string;
  };
}

export const ayahData: Ayah[] = [
  {
    id: 1,
    arabic: "ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَـٰبَ وَلَمْ يَجْعَل لَّهُۥ عِوَجَا ۜ",
    translation: "Segala puji bagi Allah yang telah menurunkan Kitab (Al-Qur'an) kepada hamba-Nya dan Dia tidak menjadikannya bengkok;",
    words: [
      { arabic: "ٱلْحَمْدُ", translation: "Segala puji" },
      { arabic: "لِلَّهِ", translation: "bagi Allah" },
      { arabic: "ٱلَّذِىٓ", translation: "yang" },
      { arabic: "أَنزَلَ", translation: "telah menurunkan" },
      { arabic: "عَلَىٰ", translation: "kepada" },
      { arabic: "عَبْدِهِ", translation: "hamba-Nya" },
      { arabic: "ٱلْكِتَـٰبَ", translation: "Kitab (Al-Qur'an)" },
      { arabic: "وَلَمْ", translation: "dan tidak" },
      { arabic: "يَجْعَل", translation: "Dia menjadikan" },
      { arabic: "لَّهُۥ", translation: "baginya" },
      { arabic: "عِوَجَا", translation: "bengkok" }
    ],
    tadabbur: "Pujian hanya milik Allah yang menurunkan Al-Qur'an sebagai pedoman lurus tanpa kecacatan. Ini adalah nikmat terbesar bagi umat manusia.",
    tafsir: "Dalam Tafsir Ibnu Katsir dijelaskan bahwa Allah memuji diri-Nya sendiri pada awal surah ini karena telah menurunkan Al-Qur'an kepada Rasul-Nya, Muhammad SAW. Al-Qur'an adalah nikmat terbesar bagi penduduk bumi karena mengeluarkan mereka dari kegelapan menuju cahaya. Allah menjadikannya kitab yang lurus, tidak ada kebengkokan dan penyimpangan di dalamnya.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018001.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018001.mp3"
    }
  },
  {
    id: 2,
    arabic: "قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِّن لَّدُنْهُ وَيُبَشِّرَ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا",
    translation: "sebagai bimbingan yang lurus, untuk memperingatkan akan siksa yang sangat pedih dari sisi-Nya dan memberikan kabar gembira kepada orang-orang mukmin yang mengerjakan kebajikan bahwa mereka akan mendapat balasan yang baik,",
    words: [
      { arabic: "قَيِّمًا", translation: "yang lurus" },
      { arabic: "لِّيُنذِرَ", translation: "untuk memperingatkan" },
      { arabic: "بَأْسًا", translation: "siksaan" },
      { arabic: "شَدِيدًا", translation: "yang sangat pedih" },
      { arabic: "مِّن", translation: "dari" },
      { arabic: "لَّدُنْهُ", translation: "sisi-Nya" },
      { arabic: "وَيُبَشِّرَ", translation: "dan memberi kabar gembira" },
      { arabic: "ٱلْمُؤْمِنِينَ", translation: "kepada orang-orang mukmin" },
      { arabic: "ٱلَّذِينَ", translation: "yang" },
      { arabic: "يَعْمَلُونَ", translation: "mengerjakan" },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", translation: "kebajikan" },
      { arabic: "أَنَّ", translation: "bahwa" },
      { arabic: "لَهُمْ", translation: "bagi mereka" },
      { arabic: "أَجْرًا", translation: "balasan" },
      { arabic: "حَسَنًا", translation: "yang baik" }
    ],
    tadabbur: "Al-Qur'an itu lurus, memberi peringatan bagi yang ingkar dan kabar gembira berupa surga bagi yang beriman dan beramal saleh.",
    tafsir: "Ibnu Katsir menafsirkan 'Qayyiman' sebagai lurus dan pertengahan. Tujuannya adalah untuk memberi peringatan kepada orang-orang kafir tentang azab yang pedih di dunia dan akhirat, serta memberi kabar gembira kepada orang-orang mukmin yang beramal saleh bahwa mereka akan mendapatkan pahala yang baik, yaitu surga.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018002.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018002.mp3"
    }
  },
  {
    id: 3,
    arabic: "مَّـٰكِثِينَ فِيهِ أَبَدًا",
    translation: "mereka kekal di dalamnya untuk selama-lamanya.",
    words: [
      { arabic: "مَّـٰكِثِينَ", translation: "mereka tinggal/kekal" },
      { arabic: "فِيهِ", translation: "di dalamnya" },
      { arabic: "أَبَدًا", translation: "selama-lamanya" }
    ],
    tadabbur: "Balasan surga itu bukanlah kenikmatan sementara, melainkan tempat tinggal yang abadi tanpa batas waktu.",
    tafsir: "Maksudnya adalah mereka akan tinggal di dalam surga tersebut untuk selama-lamanya, tidak akan pernah pindah atau dikeluarkan darinya. Kenikmatan yang tidak akan pernah terputus.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018003.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018003.mp3"
    }
  },
  {
    id: 4,
    arabic: "وَيُنذِرَ ٱلَّذِينَ قَالُوا۟ ٱتَّخَذَ ٱللَّهُ وَلَدًا",
    translation: "Dan untuk memperingatkan kepada orang yang berkata, \"Allah mengambil seorang anak.\"",
    words: [
      { arabic: "وَيُنذِرَ", translation: "Dan untuk memperingatkan" },
      { arabic: "ٱلَّذِينَ", translation: "orang-orang yang" },
      { arabic: "قَالُوا۟", translation: "berkata" },
      { arabic: "ٱتَّخَذَ", translation: "telah mengambil" },
      { arabic: "ٱللَّهُ", translation: "Allah" },
      { arabic: "وَلَدًا", translation: "seorang anak" }
    ],
    tadabbur: "Peringatan keras bagi mereka yang menyekutukan Allah dengan menganggap-Nya memiliki anak, sebuah kebohongan besar.",
    tafsir: "Ayat ini secara khusus turun untuk membantah kaum musyrikin Arab yang mengatakan malaikat adalah anak perempuan Allah, serta kaum Yahudi dan Nasrani yang mengatakan Uzair dan Isa adalah anak Allah. Ibnu Katsir menegaskan peringatan keras bagi mereka atas kebohongan ini.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018004.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018004.mp3"
    }
  },
  {
    id: 5,
    arabic: "مَّا لَهُم بِهِۦ مِنْ عِلْمٍ وَلَا لِءَابَآئِهِمْ ۚ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَٰهِهِمْ ۚ إِن يَقُولُونَ إِلَّا كَذِبًا",
    translation: "Mereka sama sekali tidak mempunyai pengetahuan tentang hal itu, begitu pula nenek moyang mereka. Alangkah jeleknya kata-kata yang keluar dari mulut mereka; mereka hanya mengatakan (sesuatu) kebohongan belaka.",
    words: [
      { arabic: "مَّا", translation: "Tidak" },
      { arabic: "لَهُم", translation: "bagi mereka" },
      { arabic: "بِهِۦ", translation: "tentangnya" },
      { arabic: "مِنْ", translation: "dari" },
      { arabic: "عِلْمٍ", translation: "pengetahuan" },
      { arabic: "وَلَا", translation: "dan tidak (pula)" },
      { arabic: "لِءَابَآئِهِمْ", translation: "bagi nenek moyang mereka" },
      { arabic: "كَبُرَتْ", translation: "Alangkah besarnya (jeleknya)" },
      { arabic: "كَلِمَةً", translation: "perkataan" },
      { arabic: "تَخْرُجُ", translation: "yang keluar" },
      { arabic: "مِنْ", translation: "dari" },
      { arabic: "أَفْوَٰهِهِمْ", translation: "mulut mereka" },
      { arabic: "إِن", translation: "Tidaklah" },
      { arabic: "يَقُولُونَ", translation: "mereka mengatakan" },
      { arabic: "إِلَّا", translation: "kecuali" },
      { arabic: "كَذِبًا", translation: "kebohongan" }
    ],
    tadabbur: "Klaim bahwa Allah punya anak adalah ucapan tanpa dasar ilmu, warisan kebodohan yang sangat dimurkai Allah.",
    tafsir: "Ibnu Katsir menjelaskan bahwa ucapan mereka (bahwa Allah punya anak) adalah kebohongan yang sangat besar. Mereka mengucapkannya tanpa dasar ilmu, hanya membebek kepada nenek moyang mereka yang juga sesat. Itu adalah kalimat yang sangat keji yang keluar dari mulut mereka.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018005.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018005.mp3"
    }
  },
  {
    id: 6,
    arabic: "فَلَعَلَّكَ بَـٰخِعٌ نَّفْسَكَ عَلَىٰٓ ءَاثَـٰرِهِمْ إِن لَّمْ يُؤْمِنُوا۟ بِهَـٰذَا ٱلْحَدِيثِ أَسَفًا",
    translation: "Maka barangkali engkau (Muhammad) akan membinasakan dirimu karena bersedih hati setelah mereka berpaling, sekiranya mereka tidak beriman kepada keterangan ini (Al-Qur'an).",
    words: [
      { arabic: "فَلَعَلَّكَ", translation: "Maka barangkali engkau" },
      { arabic: "بَـٰخِعٌ", translation: "akan membinasakan" },
      { arabic: "نَّفْسَكَ", translation: "dirimu" },
      { arabic: "عَلَىٰٓ", translation: "atas" },
      { arabic: "ءَاثَـٰرِهِمْ", translation: "jejak (berpalingnya) mereka" },
      { arabic: "إِن", translation: "jika" },
      { arabic: "لَّمْ", translation: "tidak" },
      { arabic: "يُؤْمِنُوا۟", translation: "mereka beriman" },
      { arabic: "بِهَـٰذَا", translation: "dengan ini" },
      { arabic: "ٱلْحَدِيثِ", translation: "keterangan (Al-Qur'an)" },
      { arabic: "أَسَفًا", translation: "karena bersedih hati" }
    ],
    tadabbur: "Nabi Muhammad SAW sangat peduli pada umatnya hingga bersedih jika mereka menolak kebenaran. Namun, hidayah adalah hak Allah semata.",
    tafsir: "Ibnu Katsir menjelaskan bahwa Allah menghibur Nabi Muhammad SAW yang merasa sangat sedih dan berduka karena kaumnya (Quraisy) enggan beriman kepada Al-Qur'an. Allah mengingatkan agar beliau tidak membinasakan dirinya karena kesedihan, sebab tugas Rasul hanyalah menyampaikan, sedangkan hidayah di tangan Allah.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018006.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018006.mp3"
    }
  },
  {
    id: 7,
    arabic: "إِنَّا جَعَلْنَا مَا عَلَى ٱلْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا",
    translation: "Sesungguhnya Kami telah menjadikan apa yang ada di bumi sebagai perhiasan baginya, untuk Kami menguji mereka, siapakah di antaranya yang terbaik perbuatannya.",
    words: [
      { arabic: "إِنَّا", translation: "Sesungguhnya Kami" },
      { arabic: "جَعَلْنَا", translation: "telah menjadikan" },
      { arabic: "مَا", translation: "apa yang" },
      { arabic: "عَلَى", translation: "di atas" },
      { arabic: "ٱلْأَرْضِ", translation: "bumi" },
      { arabic: "زِينَةً", translation: "sebagai perhiasan" },
      { arabic: "لَّهَا", translation: "baginya" },
      { arabic: "لِنَبْلُوَهُمْ", translation: "untuk Kami menguji mereka" },
      { arabic: "أَيُّهُمْ", translation: "siapakah di antara mereka" },
      { arabic: "أَحْسَنُ", translation: "yang terbaik" },
      { arabic: "عَمَلًا", translation: "perbuatannya" }
    ],
    tadabbur: "Dunia dan isinya hanyalah perhiasan sementara untuk menguji manusia, siapa yang paling baik amalnya, bukan yang paling banyak hartanya.",
    tafsir: "Menurut Ibnu Katsir, Allah menjadikan segala sesuatu di bumi (harta, anak, kekuasaan, keindahan alam) sebagai perhiasan sementara untuk menguji manusia. Ujian ini adalah untuk melihat siapa yang paling zuhud terhadap dunia dan paling taat kepada Allah, bukan siapa yang paling banyak hartanya.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018007.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018007.mp3"
    }
  },
  {
    id: 8,
    arabic: "وَإِنَّا لَجَـٰعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا",
    translation: "Dan sesungguhnya Kami benar-benar akan menjadikan (pula) apa yang di atasnya menjadi tanah yang tandus lagi kering.",
    words: [
      { arabic: "وَإِنَّا", translation: "Dan sesungguhnya Kami" },
      { arabic: "لَجَـٰعِلُونَ", translation: "benar-benar akan menjadikan" },
      { arabic: "مَا", translation: "apa yang" },
      { arabic: "عَلَيْهَا", translation: "di atasnya" },
      { arabic: "صَعِيدًا", translation: "tanah" },
      { arabic: "جُرُزًا", translation: "yang tandus/kering" }
    ],
    tadabbur: "Pada akhirnya, segala keindahan dunia akan hancur dan lenyap menjadi tanah tandus. Janganlah tertipu oleh kefanaannya.",
    tafsir: "Ibnu Katsir menafsirkan bahwa setelah masa ujian selesai, Allah akan menghancurkan segala perhiasan dunia tersebut. Bumi yang tadinya hijau, indah, dan subur akan dikembalikan menjadi tanah yang tandus, kering, dan tidak ada tumbuhan sama sekali pada hari kiamat.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018008.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018008.mp3"
    }
  },
  {
    id: 9,
    arabic: "أَمْ حَسِبْتَ أَنَّ أَصْحَـٰبَ ٱلْكَهْفِ وَٱلرَّقِيمِ كَانُوا۟ مِنْ ءَايَـٰتِنَا عَجَبًا",
    translation: "Apakah engkau mengira bahwa orang yang mendiami gua dan (yang mempunyai) raqim itu, termasuk tanda-tanda (kebesaran) Kami yang menakjubkan?",
    words: [
      { arabic: "أَمْ", translation: "Atau" },
      { arabic: "حَسِبْتَ", translation: "apakah engkau mengira" },
      { arabic: "أَنَّ", translation: "bahwa" },
      { arabic: "أَصْحَـٰبَ", translation: "penghuni" },
      { arabic: "ٱلْكَهْفِ", translation: "gua" },
      { arabic: "وَٱلرَّقِيمِ", translation: "dan (yang mempunyai) raqim" },
      { arabic: "كَانُوا۟", translation: "mereka adalah" },
      { arabic: "مِنْ", translation: "termasuk" },
      { arabic: "ءَايَـٰتِنَا", translation: "tanda-tanda Kami" },
      { arabic: "عَجَبًا", translation: "yang menakjubkan" }
    ],
    tadabbur: "Kisah pemuda Ashabul Kahfi memang menakjubkan, namun penciptaan langit dan bumi jauh lebih dahsyat sebagai bukti kekuasaan Allah.",
    tafsir: "Ibnu Katsir menjelaskan bahwa kisah Ashabul Kahfi (para pemuda gua) dan Ar-Raqim (batu bersurat/nama lembah tempat gua itu berada) memang menakjubkan. Tetapi, penciptaan langit, bumi, matahari, bulan, dan pergantian siang-malam jauh lebih menakjubkan dan merupakan bukti kekuasaan Allah yang lebih besar daripada sekadar kisah mereka.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018009.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018009.mp3"
    }
  },
  {
    id: 10,
    arabic: "إِذْ أَوَى ٱلْفِتْيَةُ إِلَى ٱلْكَهْفِ فَقَالُوا۟ رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    translation: "(Ingatlah) ketika pemuda-pemuda itu berlindung ke dalam gua lalu mereka berdoa, \"Ya Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah petunjuk yang lurus bagi kami dalam urusan kami.\"",
    words: [
      { arabic: "إِذْ", translation: "(Ingatlah) ketika" },
      { arabic: "أَوَى", translation: "berlindung" },
      { arabic: "ٱلْفِتْيَةُ", translation: "pemuda-pemuda itu" },
      { arabic: "إِلَى", translation: "ke dalam" },
      { arabic: "ٱلْكَهْفِ", translation: "gua" },
      { arabic: "فَقَالُوا۟", translation: "lalu mereka berkata (berdoa)" },
      { arabic: "رَبَّنَآ", translation: "Ya Tuhan kami" },
      { arabic: "ءَاتِنَا", translation: "berikanlah kepada kami" },
      { arabic: "مِن", translation: "dari" },
      { arabic: "لَّدُنكَ", translation: "sisi-Mu" },
      { arabic: "رَحْمَةً", translation: "rahmat" },
      { arabic: "وَهَيِّئْ", translation: "dan persiapkanlah/sempurnakanlah" },
      { arabic: "لَنَا", translation: "bagi kami" },
      { arabic: "مِنْ", translation: "dari" },
      { arabic: "أَمْرِنَا", translation: "urusan kami" },
      { arabic: "رَشَدًا", translation: "petunjuk yang lurus" }
    ],
    tadabbur: "Doa Ashabul Kahfi mengajarkan kita untuk selalu memohon rahmat dan petunjuk Allah saat menghadapi kesulitan dan fitnah demi mempertahankan iman.",
    tafsir: "Ibnu Katsir menceritakan bahwa para pemuda ini lari meninggalkan kaumnya demi menyelamatkan agama mereka dari fitnah kesyirikan. Saat berlindung di gua, mereka memohon rahmat Allah agar disembunyikan dari musuh, dan memohon petunjuk agar urusan mereka diberi jalan keluar yang baik dan lurus.",
    audioUrls: {
      mishary: "https://everyayah.com/data/Alafasy_128kbps/018010.mp3",
      sudais: "https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/018010.mp3"
    }
  }
];
