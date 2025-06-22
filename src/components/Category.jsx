import ProductCard from "./ProductCard"




export default function Catergory () {
    return (
            <div>    
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
        {/* NavBAR */}


             {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => {
                return(
                            <ProductCard key={item.id} />
                )
     
     
       })}
       </div>
      {/* Footer */}
       </div>   
    )







}