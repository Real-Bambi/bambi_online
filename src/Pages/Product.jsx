import ProductCard from "../components/ProductCard"

export default function Product () {
   return(
     <div className="flex gap-20 ">
      {[1,2,3].map(item=>{
         return (
            <ProductCard  key={item.id}  /> 
         )
      })}  
    </div>
   )
}