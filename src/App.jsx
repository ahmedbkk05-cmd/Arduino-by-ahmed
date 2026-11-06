import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // بيانات المكونات
  const componentsData = [
    { name: 'لوحة Arduino UNO', enName: 'Arduino UNO R3', icon: '🧠', desc: 'العقل المدبر للمشاريع، يحتوي على منافذ رقمية وتناظرية.', pins: '5V, GND, Digital Pins, Analog Pins' },
    { name: 'لوحة التجارب', enName: 'Breadboard', icon: '🎛️', desc: 'لبناء الدوائر واختبار التوصيلات مؤقتاً دون الحاجة إلى لحام.', pins: 'خطوط طولية للطاقة، وخطوط عرضية للمكونات' },
    { name: 'الصمام المضيء', enName: 'LED', icon: '💡', desc: 'عنصر يضيء عند مرور تيار كهربائي في الاتجاه الصحيح.', pins: 'طرف موجب (يحتاج مقاومة 220 أوم) وطرف سالب (GND)' },
    { name: 'حساس الموجات', enName: 'HC-SR04', icon: '📡', desc: 'لقياس المسافات بدقة عبر إرسال نبضات صوتية وحساب زمن ارتدادها.', pins: 'VCC, GND, Trig, Echo' },
    { name: 'محرك السيرفو', enName: 'Servo Motor', icon: '⚙️', desc: 'محرك عالي الدقة يدور بزوايا محددة عبر إشارات PWM.', pins: 'بني (GND)، أحمر (5V)، برتقالي (إشارة PWM)' },
    { name: 'مقاومة ضوئية', enName: 'LDR', icon: '☀️', desc: 'حساس تتغير مقاومته بحسب كمية الضوء الساقطة عليه.', pins: 'توصل مع مقاومة 10k إلى منفذ تناظري' }
  ];

  return (
    <div dir="rtl" className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* شريط التنقل العلوي */}
      <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wide flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <span className="text-blue-300 font-mono">&lt;/&gt;</span>
            Arduino by Ahmed
          </div>
          
          <div className="hidden md:flex gap-6 font-medium">
            <button onClick={() => setActiveTab('home')} className={`transition-all pb-1 ${activeTab === 'home' ? 'text-blue-200 border-b-2 border-white font-bold' : 'hover:text-blue-200'}`}>الرئيسية</button>
            <button onClick={() => setActiveTab('lessons')} className={`transition-all pb-1 ${activeTab === 'lessons' ? 'text-blue-200 border-b-2 border-white font-bold' : 'hover:text-blue-200'}`}>الدروس</button>
            <button onClick={() => setActiveTab('components')} className={`transition-all pb-1 ${activeTab === 'components' ? 'text-blue-200 border-b-2 border-white font-bold' : 'hover:text-blue-200'}`}>المكونات</button>
            <button onClick={() => setActiveTab('projects')} className={`transition-all pb-1 ${activeTab === 'projects' ? 'text-blue-200 border-b-2 border-white font-bold' : 'hover:text-blue-200'}`}>المشاريع</button>
            <button onClick={() => setActiveTab('dictionary')} className={`transition-all pb-1 ${activeTab === 'dictionary' ? 'text-blue-200 border-b-2 border-white font-bold' : 'hover:text-blue-200'}`}>القاموس</button>
          </div>

          <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-1.5 bg-blue-800 hover:bg-blue-900 rounded-lg text-sm transition-colors border border-blue-600">
            {darkMode ? '☀️ نهار' : '🌙 ليل'}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        
        {/* الصفحة الرئيسية */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 md:px-12 bg-gradient-to-l from-blue-700 to-indigo-800 text-white rounded-3xl shadow-xl">
              <div className="space-y-6 max-w-xl text-center md:text-right">
                <span className="bg-blue-500/30 text-blue-200 px-4 py-1 rounded-full text-sm font-semibold inline-block">بوابتك لعالم الإلكترونيات</span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight">تعلم Arduino من الصفر واصنع مشاريعك بنفسك</h1>
                <p className="text-blue-100 text-lg leading-relaxed">منصة تعليمية متكاملة لتبسيط مفاهيم الدوائر الكهربائية، الحساسات، والبرمجة التطبيقية خطوة بخطوة باللغة العربية.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button onClick={() => setActiveTab('lessons')} className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl shadow-md transition-all">ابدأ الدروس الآن</button>
                  <button onClick={() => setActiveTab('projects')} className="bg-blue-600/50 hover:bg-blue-600 border border-blue-400 font-bold px-6 py-3 rounded-xl transition-all">اكتشف المشاريع</button>
                </div>
              </div>
              <div className="w-full md:w-5/12 bg-white/10 p-8 rounded-2xl border-4 border-white/20 flex justify-center items-center">
                <span className="text-9xl">🤖</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-bold mb-2">دروس شاملة</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">شرح خطوة بخطوة من الصفر وحتى الاحتراف.</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">🔌</div>
                <h3 className="text-xl font-bold mb-2">مكتبة المكونات</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">تعرف على القطع الإلكترونية وطرق توصيلها.</p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold mb-2">مشاريع عملية</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">أكواد جاهزة ومخططات قابلة للتنفيذ الفوري.</p>
              </div>
            </div>
          </div>
        )}

        {/* قسم الدروس */}
        {activeTab === 'lessons' && (
          <div className="space-y-8">
            <div className="mb-8 border-b-2 border-blue-200 dark:border-blue-900 pb-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300">مسار التعلم من الصفر</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { id: 1, title: 'ما هو Arduino؟', desc: 'مقدمة بسيطة عن المتحكمات الدقيقة وعالم الأردوينو.' },
                { id: 2, title: 'مكونات لوحة Arduino UNO', desc: 'شرح تفصيلي لكل جزء في اللوحة (المنافذ، الطاقة، المعالج).' },
                { id: 3, title: 'تثبيت برنامج Arduino IDE', desc: 'كيفية تجهيز حاسوبك وربط اللوحة لكتابة الأكواد.' },
                { id: 4, title: 'المنافذ الرقمية والتناظرية', desc: 'الفرق بين الإشارات الرقمية (0 و 1) والتناظرية.' },
                { id: 5, title: 'المتغيرات وأنواع البيانات', desc: 'كيفية تخزين الأرقام والنصوص داخل كود الأردوينو.' },
                { id: 6, title: 'الشروط والحلقات (if, for)', desc: 'جعل الأردوينو يتخذ قرارات ويكرر الأوامر تلقائياً.' },
              ].map(lesson => (
                <div key={lesson.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-r-4 border-blue-600 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">الدرس {lesson.id}: {lesson.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{lesson.desc}</p>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">اقرأ الدرس &larr;</button>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">مثال تطبيقي: التحكم في إضاءة LED</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">في هذا الدرس سنقوم ببرمجة اللوحة لتشغيل ضوء LED لمدة ثانية ثم إطفائه.</p>
              <div className="bg-slate-900 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto" dir="ltr">
                <pre>{`int ledPin = 13; // تعريف المنفذ

void setup() {
  pinMode(ledPin, OUTPUT); // ضبط كـ مخرج
}

void loop() {
  digitalWrite(ledPin, HIGH); // تشغيل
  delay(1000);                // انتظار ثانية
  digitalWrite(ledPin, LOW);  // إطفاء
  delay(1000);                // انتظار ثانية
}`}</pre>
              </div>
            </div>
          </div>
        )}

        {/* قسم المكونات */}
        {activeTab === 'components' && (
          <div>
            <div className="mb-8 border-b-2 border-blue-200 dark:border-blue-900 pb-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300">دليل القطع الإلكترونية</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentsData.map((comp, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
                  <div className="text-5xl text-center mb-4">{comp.icon}</div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{comp.name}</h3>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-mono mb-3 block">{comp.enName}</span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">{comp.desc}</p>
                  <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-xs text-slate-700 dark:text-slate-300">
                    <strong>التوصيل: </strong>{comp.pins}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* قسم المشاريع */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="mb-8 border-b-2 border-blue-200 dark:border-blue-900 pb-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300">المشاريع التطبيقية</h2>
            </div>
            
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400">🌱 مشاريع للمبتدئين</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">إشارة مرور (Traffic Light)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">برمجة 3 مصابيح لتعمل بالتناوب كإشارة المرور الحقيقية.</p>
                <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded font-semibold text-sm w-full">عرض المشروع</button>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">التحكم بـ LED باستخدام زر</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">استخدام Push Button لتشغيل وإطفاء الإضاءة.</p>
                <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded font-semibold text-sm w-full">عرض المشروع</button>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">مصباح شارع ذكي (LDR)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">يتحسس الظلام ويقوم بتشغيل الإضاءة تلقائياً.</p>
                <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded font-semibold text-sm w-full">عرض المشروع</button>
              </div>
            </div>

            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">⚙️ مشاريع متوسطة</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">رادار قياس المسافة</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">استخدام حساس الموجات الصوتية لإصدار تنبيه إذا اقترب جسم.</p>
                <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded font-semibold text-sm w-full">عرض المشروع</button>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">نظام إنذار ضد السرقة</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">استخدام حساس الحركة PIR لتشغيل إنذار عند وجود حركة.</p>
                <button className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded font-semibold text-sm w-full">عرض المشروع</button>
              </div>
            </div>
          </div>
        )}

        {/* قسم القاموس */}
        {activeTab === 'dictionary' && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 border-b-2 border-blue-200 dark:border-blue-900 pb-4">
              <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300">قاموس المصطلحات التقنية</h2>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
              <table className="w-full text-right">
                <thead className="bg-blue-50 dark:bg-slate-900 text-blue-900 dark:text-blue-100">
                  <tr>
                    <th className="p-4 font-bold text-lg">المصطلح الإنجليزي</th>
                    <th className="p-4 font-bold text-lg">المعنى بالعربية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr><td className="p-4 font-mono text-blue-600 dark:text-blue-400">Sensor</td><td className="p-4 text-slate-700 dark:text-slate-300">حسّاس / مستشعر</td></tr>
                  <tr><td className="p-4 font-mono text-blue-600 dark:text-blue-400">Resistor</td><td className="p-4 text-slate-700 dark:text-slate-300">مقاومة كهربائية</td></tr>
                  <tr><td className="p-4 font-mono text-blue-600 dark:text-blue-400">Voltage</td><td className="p-4 text-slate-700 dark:text-slate-300">الجهد الكهربائي (الفولت)</td></tr>
                  <tr><td className="p-4 font-mono text-blue-600 dark:text-blue-400">Current</td><td className="p-4 text-slate-700 dark:text-slate-300">التيار الكهربائي (الأمبير)</td></tr>
                  <tr><td className="p-4 font-mono text-blue-600 dark:text-blue-400">Microcontroller</td><td className="p-4 text-slate-700 dark:text-slate-300">متحكم دقيق (عقل اللوحة)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-16 border-t border-slate-800 text-center text-sm">
        <div className="container mx-auto px-4">
          <div className="text-xl font-bold text-white mb-2">Arduino by Ahmed</div>
          <p className="mb-4">منصة تعليمية متخصصة في تبسيط الإلكترونيات وبرمجة Arduino.</p>
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Arduino by Ahmed. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;