function HeroSection(){
    return(
        <section className="bg-linear-to-r from-purple-900 via-purple-600 to-indigo-900 text-white py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-6xl font-extrabolt tracking-tight font-bold mb-6 leading-tight text-pink-400">
                    Перші 3 секунди вирішують все</h1>
            <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora dignissimos dolor nostrum repellendus ut magnam aspernatur iste hic assumenda fugiat? Repellat magni hic placeat itaque recusandae ipsa corrupti commodi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                <button className="bg-pink-400  rounded-xl font-semibold px-8 py-3 shadow-lg " onClick={click}>Start</button>
                <button className="bg-purple-900 text-purple-200 border rounded-xl border-purple-200 px-8 py-3 shadow-lg" onClick={click}>Learn more</button>
            </div>
            </div>
            
        </section>
    );
}
function click (){
    alert('click');
}
export default HeroSection;