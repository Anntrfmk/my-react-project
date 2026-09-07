const FAQdata=[
    {
        id:1,
        question:'Як швидко я можу розпочати?',
        answer:'Ви отримуєте доступ одразу після реєстрації. Налаштування займає не більше 5 хвилин.'
    },
    {
        id:2,
        question:'Чи є безкоштовний тестовий період?',
        answer:'Так, ми надаємо 14 днів безкоштовного користування без необхідності вводити дані картки.'
    }
]

function FAQ (){
    return(
        <section className="max-w-4xl text-center grid grid-cols-1 mx-auto py-8">
            <h1 className="text-3xl sm:text-2xl font-bold text-pink-400 ">Часті запитання</h1>
           <div>
            {FAQdata.map((item)=>(
                <div key={item.id} className="grid mt-5 p-4 max-h-18 max-w-4xl bg-slate-50 grid-cols-2 sm:grid-cols-3 mx-auto shadow-sm border border-slate-100 text-center justify-center ">
                    <h3 className="mb-5 text-center text-sm font-bolt">{item.question}</h3>
                    <div className="items-end max-w-4xl">
                    <button onClick={() => click(item.answer)} className="mb-2 text-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</button>
                    </div>
                </div>
            ))}
           </div>
        </section>
    )
}

function click(text){
    alert(text);
}
export default FAQ;
