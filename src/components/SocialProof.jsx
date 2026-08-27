const SocialData= [
    {
        id:1,
        name:'Kate',
        review:'"Це повністю змінило наш підхід до роботи. Результат перевершив усі очікування!"',
        stars:"⭐️⭐️⭐️⭐️⭐️"
    },
    {
       id:2,
        name:'John',
        review:'"Простий інтерфейс і неймовірно чудова підтримка. Рекомендую усім!"',
        stars:"⭐️⭐️⭐️⭐️⭐️" 
    }
]
function SocialProof(){
    return(
      <section>
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl text-mauve-500 mt-8 ">НАМ ДОВІРЯЮТЬ ПОНАД 10,000+ КЛІЄНТІВ</h2>
            <div className="grid md:grid-cols-2 gap-6">
       {SocialData.map((item)=>(
        <div key={item.id} className="bg-slate-50 border rounded-2xl shadow-sm border-slate-50 mt-8">
            <div className="text-2xl mb-3">{item.stars}</div>
            <p>{item.review}</p>
            <p>{item.name}</p>
        </div>
    ))} 
    </div>
    </div>
    </section>  
    )
}
export default SocialProof;