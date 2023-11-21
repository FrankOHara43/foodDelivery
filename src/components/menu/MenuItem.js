export default function MenuItem(){

    return(

        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:shadow-md hover:shadow-black/25 bg-white transition-all">
        <div className="text-center">
        <img src = "pizza.png" className ="max-h-auto max-h-10 block mx-auto" alt="pizza "/>
        </div>
        
         <h4 className="font-semibold text-xl my-3"> Pepperoni Pizza</h4>
         <p className="text-gray-500 text-sm">Lorem impsum dolor sit amet.</p>
          
         <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
        </div>

    );
}