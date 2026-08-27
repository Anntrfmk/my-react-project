const FeaturesData=[
 {
    id:1,
     icon: "⚡️", 
    title: "Швидка робота",
    desc: "Код оптимізований під високу швидкість завантаження сторінки."
 },
  {
    id: 2,
    icon: "📱",
    title: "Адаптивний дизайн",
    desc: "Сайт однаково чудово виглядає на смартфонах, планшетах та ПК."
  },
  {
    id: 3,
    icon: "🛠️",
    title: "Чистий код",
    desc: "Легко підтримувати та масштабувати завдяки компонентному підходу."
  }
];
function Features(){
 return(
    <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Основні можливості</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FeaturesData.map((item)=>(
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
        ))}  
        </div>
    </section>
 );
}
export default Features;

