import { Box } from "@mui/material"
import type { Product } from "../../app/models/product"
import ProductCard from "./ProductCard"

type Props={
    products:Product[]

}

function ProductList({products}:Props) {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', gap:3, justifyContent:'center'}}>
    {products.map((product)=>
    (
    //   <li key={index}>{item.name}-{item.price}</li>
    <ProductCard  key={product.id} product={product}/>
    ))}
  </Box>
  )
}
export default ProductList