function CTA(){
    return(
        <section className="bg-linear-to-r from-pink-500 to-blue-500 text-center">
            <div className="py-8 gap-10 ">
            <h1 className=" text-white text-2xl font-bold ">Готові зробити перший крок?</h1>
            <p className="text-sm text-mauve-700">Приєднуйтесь до тисяч задоволених користувачів прямо зараз.</p>
            <input type="email" placeholder="Enter your Email" className="border-2 mr-8 rounded-xl py-3 px-8 shadow-lg border-mauve-600"/>
            <button className="bg-black text-white rounded-xl font-semibold px-8 py-3 shadow-lg mt-8" onClick={click}>Start now</button>
            </div>
            
            
        </section>
    )
}
function click (){
    alert('click');
}
export default CTA;