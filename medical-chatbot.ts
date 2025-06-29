interface Doctor {
  name: string
  specialty: string
  schedule: string
  consultationPrice: number
  callPrice: number | null
  phone: string
  address: string
  url: string
}

export class MedicalChatbot {
  private doctors: Doctor[] = [
    // أمراض القلب
    {
      name: "د. أحمد سامي حسن",
      specialty: "أمراض القلب",
      schedule: "السبت والثلاثاء 5م–9م",
      consultationPrice: 250,
      callPrice: 150,
      phone: "16676",
      address: "المعادي - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/test1",
    },
    {
      name: "د. فاطمة محمود عبد السلام",
      specialty: "أمراض القلب",
      schedule: "الأحد والخميس 4م–8م",
      consultationPrice: 260,
      callPrice: 160,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/test2",
    },
    {
      name: "د. هشام عبد الله يوسف",
      specialty: "أمراض القلب",
      schedule: "يوميًا عدا الجمعة 3م–7م",
      consultationPrice: 270,
      callPrice: 140,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/test3",
    },
    {
      name: "د. حسام السيد فؤاد",
      specialty: "أمراض القلب",
      schedule: "الإثنين 2م–6م",
      consultationPrice: 255,
      callPrice: 130,
      phone: "16676",
      address: "الهرم - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/test4",
    },
    {
      name: "د. محمد جلال إبراهيم",
      specialty: "أمراض القلب",
      schedule: "الأحد والثلاثاء 1م–4م",
      consultationPrice: 240,
      callPrice: 110,
      phone: "16676",
      address: "المنصورة - الدقهلية",
      url: "https://www.vezeeta.com/ar/dr/test5",
    },
    {
      name: "د. عادل مصطفى عبد الله",
      specialty: "أمراض القلب",
      schedule: "الثلاثاء والخميس 5م–8م",
      consultationPrice: 265,
      callPrice: 120,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/test6",
    },
    {
      name: "د. عمرو سعيد عبد الرحيم",
      specialty: "أمراض القلب",
      schedule: "يوميًا 6م–9م",
      consultationPrice: 275,
      callPrice: 100,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/test7",
    },
    {
      name: "د. دعاء عبد المنعم أحمد",
      specialty: "أمراض القلب",
      schedule: "الإثنين والخميس 3م–6م",
      consultationPrice: 245,
      callPrice: 140,
      phone: "16676",
      address: "طنطا - الغربية",
      url: "https://www.vezeeta.com/ar/dr/test8",
    },
    {
      name: "د. أحمد حسين إسماعيل",
      specialty: "أمراض القلب",
      schedule: "الجمعة والسبت 4م–7م",
      consultationPrice: 260,
      callPrice: 150,
      phone: "16676",
      address: "العاشر - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/test9",
    },
    {
      name: "د. نسرين عبد الله محمد",
      specialty: "أمراض القلب",
      schedule: "الأحد إلى الأربعاء 2م–5م",
      consultationPrice: 250,
      callPrice: 110,
      phone: "16676",
      address: "أسيوط - أسيوط",
      url: "https://www.vezeeta.com/ar/dr/test10",
    },

    // نساء وتوليد
    {
      name: "د. نهى محمود عبد اللطيف",
      specialty: "نساء وتوليد",
      schedule: "السبت والإثنين ١م–٥م",
      consultationPrice: 190,
      callPrice: 110,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/noha-mahmoud",
    },
    {
      name: "د. رانيا جمال عبد الله",
      specialty: "نساء وتوليد",
      schedule: "الثلاثاء والخميس ٣م–٧م",
      consultationPrice: 200,
      callPrice: 120,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/rania-gamal",
    },
    {
      name: "د. سامية أحمد يوسف",
      specialty: "نساء وتوليد",
      schedule: "الإثنين والأربعاء ٢م–٦م",
      consultationPrice: 210,
      callPrice: null,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/samia-youssef",
    },
    {
      name: "د. نجلاء محمد إبراهيم",
      specialty: "نساء وتوليد",
      schedule: "الأحد والثلاثاء ٤م–٨م",
      consultationPrice: 220,
      callPrice: 130,
      phone: "16676",
      address: "طنطا - الغربية",
      url: "https://www.vezeeta.com/ar/dr/naglaa-ibrahim",
    },
    {
      name: "د. هالة محمود السيد",
      specialty: "نساء وتوليد",
      schedule: "السبت–الأربعاء ١٢ظ–٤م",
      consultationPrice: 230,
      callPrice: 110,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/hala-mahmoud",
    },
    {
      name: "د. فاطمة عبد الغفار علي",
      specialty: "نساء وتوليد",
      schedule: "الثلاثاء والخميس ١م–٥م",
      consultationPrice: 240,
      callPrice: 150,
      phone: "16676",
      address: "المعادي - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/fatma-abdelghaffar",
    },
    {
      name: "د. منى طه عبد الباسط",
      specialty: "نساء وتوليد",
      schedule: "الأحد والإثنين ٣م–٧م",
      consultationPrice: 250,
      callPrice: 140,
      phone: "16676",
      address: "دمنهور - البحيرة",
      url: "https://www.vezeeta.com/ar/dr/mona-taha",
    },
    {
      name: "د. ياسمين حسن فوزي",
      specialty: "نساء وتوليد",
      schedule: "الإثنين إلى الخميس ٢م–٦م",
      consultationPrice: 260,
      callPrice: 120,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/yasmine-fawzy",
    },
    {
      name: "د. محمود عبد الرحمن حسان",
      specialty: "نساء وتوليد",
      schedule: "السبت والثلاثاء ١م–٤م",
      consultationPrice: 255,
      callPrice: 130,
      phone: "16676",
      address: "العاشر من رمضان - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/mahmoud-hassan",
    },
    {
      name: "د. سلوى عبد العال محمد",
      specialty: "نساء وتوليد",
      schedule: "الأحد–الأربعاء ٣م–٨م",
      consultationPrice: 245,
      callPrice: null,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/selwa-abdelal",
    },

    // جلدية وتجميل
    {
      name: "د. سارة محمد عبد القادر",
      specialty: "جلدية وتجميل",
      schedule: "الإثنين والخميس ٢م–٦م",
      consultationPrice: 220,
      callPrice: null,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/sara-mohamed",
    },
    {
      name: "د. إيمان أحمد رشدي",
      specialty: "جلدية وتجميل",
      schedule: "الثلاثاء والسبت ٣م–٧م",
      consultationPrice: 230,
      callPrice: 130,
      phone: "16676",
      address: "أسيوط - أسيوط",
      url: "https://www.vezeeta.com/ar/dr/eman-rashdy",
    },
    {
      name: "د. علاء عبد الرحيم حسن",
      specialty: "جلدية وتجميل",
      schedule: "يوميًا ٤م–٩م",
      consultationPrice: 240,
      callPrice: 120,
      phone: "16676",
      address: "العاشر من رمضان - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/alaa-hassan",
    },
    {
      name: "د. أميرة حسين عبد اللطيف",
      specialty: "جلدية وتجميل",
      schedule: "الأحد والثلاثاء ٢م–٧م",
      consultationPrice: 210,
      callPrice: 110,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/amira-hussein",
    },
    {
      name: "د. محمد عبد الله إسماعيل",
      specialty: "جلدية وتجميل",
      schedule: "السبت إلى الأربعاء ٣م–٨م",
      consultationPrice: 200,
      callPrice: 100,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/mohamed-abdallah",
    },
    {
      name: "د. ريم عبد المنعم يوسف",
      specialty: "جلدية وتجميل",
      schedule: "الاثنين والخميس ٥م–٩م",
      consultationPrice: 250,
      callPrice: 140,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/reem-abdelmonem",
    },
    {
      name: "د. خالد أحمد السيد",
      specialty: "جلدية وتجميل",
      schedule: "الأحد والإثنين ١م–٥م",
      consultationPrice: 195,
      callPrice: 120,
      phone: "16676",
      address: "المعادي - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/khaled-ahmed",
    },
    {
      name: "د. منى أشرف فهمي",
      specialty: "جلدية وتجميل",
      schedule: "الثلاثاء والخميس ٢م–٦م",
      consultationPrice: 215,
      callPrice: 130,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/mona-ashraf",
    },
    {
      name: "د. ياسمين حسن علي",
      specialty: "جلدية وتجميل",
      schedule: "يوميًا ٣م–٨م",
      consultationPrice: 225,
      callPrice: 140,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/yasmine-hassan",
    },
    {
      name: "د. هالة مصطفى عبد العزيز",
      specialty: "جلدية وتجميل",
      schedule: "الإثنين والأربعاء ٢م–٦م",
      consultationPrice: 235,
      callPrice: 110,
      phone: "16676",
      address: "المنصورة - الدقهلية",
      url: "https://www.vezeeta.com/ar/dr/hala-mostafa",
    },

    // مخ وأعصاب
    {
      name: "د. عمر هشام عبد العزيز",
      specialty: "مخ وأعصاب",
      schedule: "كل يوم ٦م–١٠م",
      consultationPrice: 300,
      callPrice: 140,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/omar-hesham",
    },
    {
      name: "د. نجلاء محمد صادق",
      specialty: "مخ وأعصاب",
      schedule: "السبت والثلاثاء ١م–٤م",
      consultationPrice: 310,
      callPrice: 130,
      phone: "16676",
      address: "الزيتون - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/naglaa-sadek",
    },
    {
      name: "د. خالد فتحي عبد السميع",
      specialty: "مخ وأعصاب",
      schedule: "الأحد–الأربعاء ٣م–٨م",
      consultationPrice: 280,
      callPrice: 150,
      phone: "16676",
      address: "المنيا - المنيا",
      url: "https://www.vezeeta.com/ar/dr/khaled-fathy",
    },
    {
      name: "د. محمود السيد حسانين",
      specialty: "مخ وأعصاب",
      schedule: "الإثنين والخميس ٥م–٩م",
      consultationPrice: 290,
      callPrice: 140,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/mahmoud-hassanein",
    },
    {
      name: "د. دعاء عبد الحفيظ أحمد",
      specialty: "مخ وأعصاب",
      schedule: "الأحد والثلاثاء ٢م–٧م",
      consultationPrice: 275,
      callPrice: 130,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/doaa-abdelhafeez",
    },
    {
      name: "د. سامي شوقي محمد",
      specialty: "مخ وأعصاب",
      schedule: "الإثنين إلى الجمعة ١م–٦م",
      consultationPrice: 265,
      callPrice: null,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/samy-shokry",
    },
    {
      name: "د. ليلى عادل عبد العظيم",
      specialty: "مخ وأعصاب",
      schedule: "الثلاثاء والخميس ٣م–٨م",
      consultationPrice: 295,
      callPrice: 135,
      phone: "16676",
      address: "العاشر من رمضان - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/laila-adel",
    },
    {
      name: "د. حسن محمد عارف",
      specialty: "مخ وأعصاب",
      schedule: "الأحد والإثنين ١٢ظ–٤م",
      consultationPrice: 280,
      callPrice: 120,
      phone: "16676",
      address: "شبرا - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/hasan-aref",
    },
    {
      name: "د. ياسمين محمود علي",
      specialty: "مخ وأعصاب",
      schedule: "السبت–الثلاثاء ٣م–٧م",
      consultationPrice: 285,
      callPrice: 125,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/yasmin-mahmoud",
    },
    {
      name: "د. عبد الله حسين عبد الله",
      specialty: "مخ وأعصاب",
      schedule: "السبت إلى الأربعاء ٢م–٦م",
      consultationPrice: 290,
      callPrice: 140,
      phone: "16676",
      address: "طنطا - الغربية",
      url: "https://www.vezeeta.com/ar/dr/abdullah-hussein",
    },

    // أنف وأذن وحنجرة
    {
      name: "د. علي إبراهيم السيد",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الأحد والثلاثاء ٣م–٨م",
      consultationPrice: 230,
      callPrice: 130,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/ali-ibrahim",
    },
    {
      name: "د. حسن فوزي عبد الله",
      specialty: "أنف وأذن وحنجرة",
      schedule: "السبت والإثنين ١م–٥م",
      consultationPrice: 240,
      callPrice: 120,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/hasan-fawzy",
    },
    {
      name: "د. نسرين ياسر أحمد",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الثلاثاء والخميس ٤م–٨م",
      consultationPrice: 220,
      callPrice: 110,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/nesreen-yasser",
    },
    {
      name: "د. سامي شريف عبد العزيز",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الإثنين–الخميس ٥م–٩م",
      consultationPrice: 210,
      callPrice: 100,
      phone: "16676",
      address: "طنطا - الغربية",
      url: "https://www.vezeeta.com/ar/dr/samy-sherif",
    },
    {
      name: "د. أمينة علي إبراهيم",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الأحد والثلاثاء ٢م–٧م",
      consultationPrice: 235,
      callPrice: 130,
      phone: "16676",
      address: "العاشر من رمضان - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/amina-ali",
    },
    {
      name: "د. إيهاب عبد الحميد فؤاد",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الإثنين والأربعاء ٣م–٧م",
      consultationPrice: 250,
      callPrice: 150,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/eyhab-foad",
    },
    {
      name: "د. منى محمد مصطفى",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الثلاثاء والخميس ١م–٦م",
      consultationPrice: 245,
      callPrice: 120,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/mona-mostafa",
    },
    {
      name: "د. حسام محمود السيد",
      specialty: "أنف وأذن وحنجرة",
      schedule: "كل يوم ٢م–٦م",
      consultationPrice: 255,
      callPrice: 135,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/hosam-mahmoud",
    },
    {
      name: "د. فاطمة أحمد عبد العال",
      specialty: "أنف وأذن وحنجرة",
      schedule: "السبت–الثلاثاء ٣م–٨م",
      consultationPrice: 260,
      callPrice: 140,
      phone: "16676",
      address: "دمنهور - البحيرة",
      url: "https://www.vezeeta.com/ar/dr/fatma-abdelal",
    },
    {
      name: "د. خالد حسن عبد الرحيم",
      specialty: "أنف وأذن وحنجرة",
      schedule: "الأحد والخميس ٤م–٩م",
      consultationPrice: 250,
      callPrice: 150,
      phone: "16676",
      address: "المعادي - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/khaled-hassan",
    },

    // باطنة عامة
    {
      name: "د. يوسف جمال عبد الله",
      specialty: "باطنة عامة",
      schedule: "السبت–الأربعاء ٣م–٩م",
      consultationPrice: 180,
      callPrice: 120,
      phone: "16676",
      address: "شبرا - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/youssef-gamal",
    },
    {
      name: "د. ليلى ياسر علي",
      specialty: "باطنة عامة",
      schedule: "الأحد والخميس ٥م–٩م",
      consultationPrice: 185,
      callPrice: 110,
      phone: "16676",
      address: "المنصورة - الدقهلية",
      url: "https://www.vezeeta.com/ar/dr/laila-yasser",
    },
    {
      name: "د. محمود كمال مصطفى",
      specialty: "باطنة عامة",
      schedule: "يوميًا ١م–٩م",
      consultationPrice: 195,
      callPrice: 100,
      phone: "16676",
      address: "طنطا - الغربية",
      url: "https://www.vezeeta.com/ar/dr/mahmoud-kamal",
    },
    {
      name: "د. دعاء نبيل عبد الحميد",
      specialty: "باطنة عامة",
      schedule: "الإثنين والخميس ٤م–٧م",
      consultationPrice: 200,
      callPrice: 110,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/doaa-nabil",
    },
    {
      name: "د. عادل نصر حسن",
      specialty: "باطنة عامة",
      schedule: "الأحد إلى الأربعاء ٣م–٨م",
      consultationPrice: 210,
      callPrice: null,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/adel-nasr",
    },
    {
      name: "د. منال السيد محمد",
      specialty: "باطنة عامة",
      schedule: "الثلاثاء والسبت ١م–٦م",
      consultationPrice: 185,
      callPrice: 100,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/manal-elsayed",
    },
    {
      name: "د. خالد عبد الغني عيسى",
      specialty: "باطنة عامة",
      schedule: "الإثنين والخميس ٢م–٥م",
      consultationPrice: 190,
      callPrice: 130,
      phone: "16676",
      address: "الهرم - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/khaled-abdelghany",
    },
    {
      name: "د. أسماء علاء إبراهيم",
      specialty: "باطنة عامة",
      schedule: "الأحد–الأربعاء ١٢ظ–٤م",
      consultationPrice: 175,
      callPrice: 120,
      phone: "16676",
      address: "المنيا - المنيا",
      url: "https://www.vezeeta.com/ar/dr/asmaa-ibrahim",
    },
    {
      name: "د. محمد عبد الستار حسن",
      specialty: "باطنة عامة",
      schedule: "السبت والثلاثاء ٥م–٩م",
      consultationPrice: 195,
      callPrice: 150,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/mohamed-abdelsttar",
    },
    {
      name: "د. نجلاء عبد السلام حسن",
      specialty: "باطنة عامة",
      schedule: "كل يوم ٢م–٧م",
      consultationPrice: 200,
      callPrice: 140,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/naglaa-abdelsalam",
    },

    // أطفال وحديثي الولادة
    {
      name: "د. مي عبد الفتاح",
      specialty: "أطفال وحديثي الولادة",
      schedule: "الأحد والثلاثاء ٤م–٨م",
      consultationPrice: 200,
      callPrice: 100,
      phone: "16676",
      address: "الهرم - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/mai-abdelfattah",
    },
    {
      name: "د. سامي حسين عبد اللطيف",
      specialty: "أطفال وحديثي الولادة",
      schedule: "السبت والإثنين ٢م–٦م",
      consultationPrice: 190,
      callPrice: 110,
      phone: "16676",
      address: "حلوان - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/samy-hussein",
    },
    {
      name: "د. نهى عبد العزيز سالم",
      specialty: "أطفال وحديثي الولادة",
      schedule: "يوميًا ١٢ظ–٥م",
      consultationPrice: 210,
      callPrice: null,
      phone: "16676",
      address: "دمنهور - البحيرة",
      url: "https://www.vezeeta.com/ar/dr/noha-aziz",
    },
    {
      name: "د. أميرة شكري إبراهيم",
      specialty: "أطفال وحديثي الولادة",
      schedule: "الإثنين والخميس ٣م–٧م",
      consultationPrice: 195,
      callPrice: 110,
      phone: "16676",
      address: "مدينة نصر - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/amira-shokry",
    },
    {
      name: "د. كريم محمد السيد",
      specialty: "أطفال وحديثي الولادة",
      schedule: "الأحد إلى الأربعاء ١م–٤م",
      consultationPrice: 185,
      callPrice: 100,
      phone: "16676",
      address: "فيصل - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/karim-mohamed",
    },
    {
      name: "د. أسماء عبد الفتاح فوزي",
      specialty: "أطفال وحديثي الولادة",
      schedule: "الإثنين والجمعة ٤م–٩م",
      consultationPrice: 200,
      callPrice: 120,
      phone: "16676",
      address: "سموحة - الإسكندرية",
      url: "https://www.vezeeta.com/ar/dr/asmaa-fouzy",
    },
    {
      name: "د. علاء محمد مصطفى",
      specialty: "أطفال وحديثي الولادة",
      schedule: "السبت إلى الثلاثاء ٣م–٨م",
      consultationPrice: 210,
      callPrice: 120,
      phone: "16676",
      address: "الزقازيق - الشرقية",
      url: "https://www.vezeeta.com/ar/dr/alaa-mostafa",
    },
    {
      name: "د. منى حامد عبد الحميد",
      specialty: "أطفال وحديثي الولادة",
      schedule: "السبت والإثنين ١م–٥م",
      consultationPrice: 190,
      callPrice: null,
      phone: "16676",
      address: "مصر الجديدة - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/mona-hamed",
    },
    {
      name: "د. مصطفى عبد السلام حسن",
      specialty: "أطفال وحديثي الولادة",
      schedule: "الثلاثاء والخميس ٢م–٦م",
      consultationPrice: 220,
      callPrice: 130,
      phone: "16676",
      address: "٦ أكتوبر - الجيزة",
      url: "https://www.vezeeta.com/ar/dr/mostafa-abdelsalam",
    },
    {
      name: "د. سمر عادل يوسف",
      specialty: "أطفال وحديثي الولادة",
      schedule: "يوميًا ٤م–٩م",
      consultationPrice: 205,
      callPrice: 140,
      phone: "16676",
      address: "المعادي - القاهرة",
      url: "https://www.vezeeta.com/ar/dr/samar-adel",
    },
  ]

  private symptomsMapping: Record<string, string> = {
    // أمراض القلب
    "ألم في الصدر": "أمراض القلب",
    "الم في الصدر": "أمراض القلب",
    "وجع في الصدر": "أمراض القلب",
    "ضيق في التنفس": "أمراض القلب",
    "ضيق تنفس": "أمراض القلب",
    خفقان: "أمراض القلب",
    "خفقان القلب": "أمراض القلب",
    "ألم في القلب": "أمراض القلب",
    "ضغط دم مرتفع": "أمراض القلب",
    "ضغط عالي": "أمراض القلب",
    "تسارع ضربات القلب": "أمراض القلب",
    "عدم انتظام ضربات القلب": "أمراض القلب",
    "ألم بالقلب": "أمراض القلب",
    "وجع القلب": "أمراض القلب",

    // مخ وأعصاب
    صداع: "مخ وأعصاب",
    "وجع راس": "مخ وأعصاب",
    "وجع في الراس": "مخ وأعصاب",
    دوخة: "مخ وأعصاب",
    دوخه: "مخ وأعصاب",
    دوار: "مخ وأعصاب",
    دوران: "مخ وأعصاب",
    تنميل: "مخ وأعصاب",
    رعشة: "مخ وأعصاب",
    رعشه: "مخ وأعصاب",
    "صداع شديد": "مخ وأعصاب",
    "صداع نصفي": "مخ وأعصاب",
    شقيقة: "مخ وأعصاب",
    "تنميل في اليد": "مخ وأعصاب",
    "تنميل في القدم": "مخ وأعصاب",
    "ضعف في الذاكرة": "مخ وأعصاب",
    نسيان: "مخ وأعصاب",

    // جلدية وتجميل
    "حكة في الجلد": "جلدية وتجميل",
    حكه: "جلدية وتجميل",
    حكة: "جلدية وتجميل",
    هرش: "جلدية وتجميل",
    "طفح جلدي": "جلدية وتجميل",
    طفح: "جلدية وتجميل",
    "حبوب في الوجه": "جلدية وتجميل",
    حبوب: "جلدية وتجميل",
    "تساقط الشعر": "جلدية وتجميل",
    "بقع في الجلد": "جلدية وتجميل",
    اكزيما: "جلدية وتجميل",
    صدفية: "جلدية وتجميل",
    "حساسية جلدية": "جلدية وتجميل",
    "التهاب جلدي": "جلدية وتجميل",

    // أنف وأذن وحنجرة
    "ألم في الأذن": "أنف وأذن وحنجرة",
    "الم في الاذن": "أنف وأذن وحنجرة",
    "وجع في الاذن": "أنف وأذن وحنجرة",
    "التهاب الحلق": "أنف وأذن وحنجرة",
    "وجع في الحلق": "أنف وأذن وحنجرة",
    "انسداد الأنف": "أنف وأذن وحنجرة",
    زكام: "أنف وأذن وحنجرة",
    رشح: "أنف وأذن وحنجرة",
    "بحة في الصوت": "أنف وأذن وحنجرة",
    بحه: "أنف وأذن وحنجرة",
    "التهاب الجيوب الأنفية": "أنف وأذن وحنجرة",
    "احتقان الأنف": "أنف وأذن وحنجرة",
    "طنين في الأذن": "أنف وأذن وحنجرة",
    "فقدان السمع": "أنف وأذن وحنجرة",

    // باطنة عامة
    "ألم في البطن": "باطنة عامة",
    "الم في البطن": "باطنة عامة",
    "وجع في البطن": "باطنة عامة",
    "وجع بطن": "باطنة عامة",
    مغص: "باطنة عامة",
    غثيان: "باطنة عامة",
    غيثان: "باطنة عامة",
    استفراغ: "باطنة عامة",
    قيء: "باطنة عامة",
    إسهال: "باطنة عامة",
    اسهال: "باطنة عامة",
    إمساك: "باطنة عامة",
    حمى: "باطنة عامة",
    حمي: "باطنة عامة",
    سخونة: "باطنة عامة",
    سخونه: "باطنة عامة",
    "تعب عام": "باطنة عامة",
    تعب: "باطنة عامة",
    إرهاق: "باطنة عامة",
    "فقدان الشهية": "باطنة عامة",

    // نساء وتوليد - أعراض إضافية
    "تأخر الدورة الشهرية": "نساء وتوليد",
    "تاخر الدورة": "نساء وتوليد",
    "ألم أثناء الدورة": "نساء وتوليد",
    "الم الدورة": "نساء وتوليد",
    "وجع الدورة": "نساء وتوليد",
    "إفرازات مهبلية": "نساء وتوليد",
    افرازات: "نساء وتوليد",
    "ألم في الحوض": "نساء وتوليد",
    "أعراض الحمل": "نساء وتوليد",
    "نزيف مهبلي": "نساء وتوليد",
    "عدم انتظام الدورة": "نساء وتوليد",
    "انقطاع الطمث": "نساء وتوليد",
    "ألم في المبايض": "نساء وتوليد",
    "التهابات مهبلية": "نساء وتوليد",
    "حكة مهبلية": "نساء وتوليد",
    "ألم أثناء العلاقة الزوجية": "نساء وتوليد",
    "نزيف بين الدورات": "نساء وتوليد",
    "أعراض سن اليأس": "نساء وتوليد",
    "هبات ساخنة": "نساء وتوليد",
    "تكيس المبايض": "نساء وتوليد",
    "ألم في الثدي": "نساء وتوليد",
    "تورم الثدي": "نساء وتوليد",
    "إفرازات من الثدي": "نساء وتوليد",
    "غثيان الحمل": "نساء وتوليد",
    "قيء الحمل": "نساء وتوليد",
    "ألم أسفل البطن": "نساء وتوليد",
    "تقلصات الرحم": "نساء وتوليد",
    "صعوبة الحمل": "نساء وتوليد",
    العقم: "نساء وتوليد",
    "تأخر الإنجاب": "نساء وتوليد",

    // أطفال وحديثي الولادة
    "حمى عند الطفل": "أطفال وحديثي الولادة",
    "سخونة عند الطفل": "أطفال وحديثي الولادة",
    "الطفل عنده سخونة": "أطفال وحديثي الولادة",
    "سعال عند الطفل": "أطفال وحديثي الولادة",
    "الطفل بيكح": "أطفال وحديثي الولادة",
    "إسهال عند الطفل": "أطفال وحديثي الولادة",
    "قيء عند الطفل": "أطفال وحديثي الولادة",
    "الطفل بيستفرغ": "أطفال وحديثي الولادة",
    "مغص عند الطفل": "أطفال وحديثي الولادة",
  }

  private currentStep: "symptoms" | "doctor_selection" | "appointment_selection" | "booking_confirmation" = "symptoms"
  private selectedSpecialty = ""
  private availableDoctors: Doctor[] = []
  private selectedDoctor: Doctor | null = null
  private availableAppointments: string[] = []
  private selectedAppointment = ""

  processMessage(userInput: string): string {
    const userInputLower = userInput.toLowerCase().trim()

    if (this.currentStep === "symptoms") {
      return this.handleSymptoms(userInputLower)
    } else if (this.currentStep === "doctor_selection") {
      return this.handleDoctorSelection(userInput)
    } else if (this.currentStep === "appointment_selection") {
      return this.handleAppointmentSelection(userInput)
    } else if (this.currentStep === "booking_confirmation") {
      return this.handleBookingConfirmation(userInput)
    }

    return "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى."
  }

  private handleSymptoms(userInput: string): string {
    let detectedSpecialty = ""

    // البحث عن التخصص المناسب
    for (const [symptom, specialty] of Object.entries(this.symptomsMapping)) {
      if (userInput.includes(symptom.toLowerCase())) {
        detectedSpecialty = specialty
        break
      }
    }

    if (!detectedSpecialty) {
      return `لم أتمكن من تحديد التخصص المناسب للعرض "${userInput}".

يرجى وصف الأعراض بوضوح أكثر أو اختيار من الأمثلة التالية:

**أمراض القلب:** ألم في الصدر، خفقان، ضيق تنفس
**مخ وأعصاب:** صداع، دوخة، تنميل
**جلدية:** حكة، طفح جلدي، حبوب
**أنف وأذن:** ألم في الأذن، التهاب الحلق، زكام
**باطنة عامة:** ألم في البطن، حمى، غثيان
**نساء وتوليد:** تأخر الدورة، إفرازات، ألم في الحوض
**أطفال:** حمى عند الطفل، سعال، مغص`
    }

    const doctors = this.doctors.filter((doctor) => doctor.specialty === detectedSpecialty)

    if (doctors.length === 0) {
      return `لا يوجد أطباء متاحون في تخصص ${detectedSpecialty}.`
    }

    this.selectedSpecialty = detectedSpecialty
    this.availableDoctors = doctors
    this.currentStep = "doctor_selection"

    let response = `تم تحديد التخصص: **${detectedSpecialty}** ✅

الأطباء المتاحون:

`

    doctors.forEach((doctor, index) => {
      const callInfo = doctor.callPrice ? `📞 ${doctor.callPrice} جنيه` : "📞 غير متاحة"
      response += `**${index + 1}.** ${doctor.name}
`
      response += `   📍 ${doctor.address}
`
      response += `   💰 كشف: ${doctor.consultationPrice} جنيه | ${callInfo}
`
      response += `   ⏰ ${doctor.schedule}

`
    })

    response += `اختر رقم الطبيب (1-${doctors.length}):`
    return response
  }

  private handleDoctorSelection(userInput: string): string {
    const doctorIndex = Number.parseInt(userInput.trim()) - 1

    if (isNaN(doctorIndex) || doctorIndex < 0 || doctorIndex >= this.availableDoctors.length) {
      return `يرجى اختيار رقم صحيح من 1 إلى ${this.availableDoctors.length}`
    }

    const doctor = this.availableDoctors[doctorIndex]
    this.selectedDoctor = doctor
    this.currentStep = "appointment_selection"

    const appointments = this.generateAppointments()
    this.availableAppointments = appointments

    let response = `تم اختيار: **${doctor.name}** ✅

`
    response += `📋 **معلومات الطبيب:**
`
    response += `🏥 التخصص: ${doctor.specialty}
`
    response += `📍 العنوان: ${doctor.address}
`
    response += `💰 سعر الكشف: ${doctor.consultationPrice} جنيه
`
    response += `📞 سعر المكالمة: ${doctor.callPrice ? doctor.callPrice + " جنيه" : "غير متاحة"}

`
    response += `**المواعيد المتاحة:**

`

    appointments.forEach((appointment, index) => {
      response += `**${index + 1}.** ${appointment}
`
    })

    response += `
اختر رقم الموعد (1-${appointments.length}):`
    return response
  }

  private handleAppointmentSelection(userInput: string): string {
    const appointmentIndex = Number.parseInt(userInput.trim()) - 1

    if (isNaN(appointmentIndex) || appointmentIndex < 0 || appointmentIndex >= this.availableAppointments.length) {
      return `يرجى اختيار رقم صحيح من 1 إلى ${this.availableAppointments.length}`
    }

    const appointment = this.availableAppointments[appointmentIndex]
    this.selectedAppointment = appointment
    this.currentStep = "booking_confirmation"

    const response =
      `📋 **ملخص الحجز:**

` +
      `👨‍⚕️ **الطبيب:** ${this.selectedDoctor?.name}
` +
      `🏥 **التخصص:** ${this.selectedDoctor?.specialty}
` +
      `📅 **الموعد:** ${appointment}
` +
      `📍 **العنوان:** ${this.selectedDoctor?.address}
` +
      `💰 **السعر:** ${this.selectedDoctor?.consultationPrice} جنيه
` +
      `📞 **الهاتف:** ${this.selectedDoctor?.phone}

` +
      `هل تريد تأكيد الحجز؟ (نعم/لا)`

    return response
  }

  private handleBookingConfirmation(userInput: string): string {
    const userInputLower = userInput.trim().toLowerCase()

    if (["نعم", "yes", "موافق", "تأكيد", "احجز"].includes(userInputLower)) {
      const bookingId = `BK${Math.floor(Math.random() * 90000) + 10000}`

      const response =
        `✅ **تم تأكيد الحجز بنجاح!**

` +
        `🎫 **رقم الحجز:** ${bookingId}
` +
        `👨‍⚕️ **الطبيب:** ${this.selectedDoctor?.name}
` +
        `📅 **الموعد:** ${this.selectedAppointment}
` +
        `📍 **العنوان:** ${this.selectedDoctor?.address}
` +
        `💰 **المبلغ:** ${this.selectedDoctor?.consultationPrice} جنيه
` +
        `📞 **للاستفسار:** ${this.selectedDoctor?.phone}

` +
        `🔗 **رابط الطبيب:** ${this.selectedDoctor?.url}

` +
        `شكراً لاستخدام خدمتنا! 🙏

` +
        `💡 **نصيحة:** احتفظ برقم الحجز للمراجعة

هل تحتاج لحجز موعد آخر؟ أخبرني عن الأعراض الجديدة.`

      // Reset for new conversation
      this.reset()
      return response
    } else if (["لا", "no", "إلغاء", "الغاء"].includes(userInputLower)) {
      this.reset()
      return `تم إلغاء الحجز. 🚫

هل تريد البحث عن طبيب آخر؟ أخبرني عن الأعراض.`
    } else {
      return "يرجى الإجابة بـ 'نعم' أو 'لا'"
    }
  }

  private generateAppointments(): string[] {
    const appointments = []
    const today = new Date()
    const days = ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
    const timeSlots = ["10:00 صباحاً", "2:00 مساءً", "6:00 مساءً"]

    for (let i = 1; i <= 4; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dayName = days[date.getDay()]
      const timeSlot = timeSlots[Math.floor(Math.random() * timeSlots.length)]
      const appointment = `${dayName} ${date.toLocaleDateString("ar-EG")} - ${timeSlot}`
      appointments.push(appointment)
    }

    return appointments
  }

  reset(): void {
    this.currentStep = "symptoms"
    this.selectedSpecialty = ""
    this.availableDoctors = []
    this.selectedDoctor = null
    this.availableAppointments = []
    this.selectedAppointment = ""
  }
}
