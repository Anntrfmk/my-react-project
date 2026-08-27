function CaseStudies (){
    return(
        <section className="grid grid-rows-1 bg-blue-950 mx-auto text-center mt-8 py-16 px-6">
            <p className="text-sm text-pink-400 font-bold mt-8 ">РЕЗУЛЬТАТИ {'>'} ОБІЦЯНКИ</p>
        <h2 className="text-white text-2xl font-bold">Реальний кейс використання</h2>
        <div className="grid bg-slate-700 border rounded-2xl border-slate-700 max-w-2xl grid-cols-2 mx-auto  ">
            <div className=" grid p-8 bg-slate-600 border rounded-2xl border-slate-700 max-w-3.5 max-h-0.5 text-center mx-auto mt-8">
                <p className="mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                 </svg>
                 </p>
            </div>
            <div className="grid grid-rows-1 mx-auto">
            <p className="text-sm text-pink-400 border rounded-3xl max-w-30 font-bold bg-pink-500/50">+300 доходу</p>
            <h1 className="text-white text-2xl font-bold">Як компанія зросла у 3 рази за місяць</h1>
            <p className="text-white/75">Завдяки впровадженню нашого рішення клієнт повністю автоматизував рутинні процеси та збільшив конверсію продажів.</p>
            <p className="text-sm text-pink-400">Читати повний кейс -{">"}</p>
            </div>
        </div>
        </section>
        
    )
}
export default CaseStudies;