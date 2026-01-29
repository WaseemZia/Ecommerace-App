import { useParams } from "react-router-dom"
import Grid from "@mui/material/Grid";
import { Button, Divider, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useFetchProductDetailsQuery } from "./catalogApi";
import { useAddBasketItemMutation, useFetchBasketQuery, useRemoveBasketItemMutation } from "../basket/basketApi";
import {  useState, type ChangeEvent } from "react";

function ProductDetails() {
  const {id}=useParams();
  const [addBasketItem]=useAddBasketItemMutation();
  const [removeBasketItem]=useRemoveBasketItemMutation();
  const {data:basket}=useFetchBasketQuery();
  const item=basket?.items.find(x=>x.productId===+id!);
const [quantity, setQuantity] = useState(() => item?.quantity ?? 0);  

//   useEffect(() => {
//   if (item) setQuantity(item.quantity);
// }, [item]);
  
  // const [product,setProduct]=useState<Product | null>(null);
  // useEffect(()=>{
  //   fetch(`https://localhost:5001/api/Product/${id}`)
  //   .then(response=>response.json()
  // .then(data=>setProduct(data)))
  // .catch(error=>console.log(error))
  // },[id]);
const {data:product,isLoading}=useFetchProductDetailsQuery(id?+id:0);

  if(!product||isLoading) return <div>....Loading</div>
  const handleUpdateBasket=()=>{
    const updatedQuantity=item?Math.abs(quantity-item.quantity):quantity;
    if(!item||quantity>item.quantity){
      addBasketItem({product,quantity:updatedQuantity});
    }
    else{
      removeBasketItem({productId:product.id,quantity:updatedQuantity})
     } 
  }
  const handleInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
    const value =+event?.currentTarget.value;
    if(value>=0)setQuantity(value);

  }
const productDetails = [
  { label: 'Name', value: product.name },
  { label: 'Description', value: product.description },
  { label: 'Price', value: `$${product.price}` },
  { label: 'Brand', value: product.brand },
  { label: 'Type', value: product.type },
  { label: 'Quantity in Stock', value: product.quantityInStock }
];


  return (
    <Grid container spacing={2} maxWidth='lg' sx={{mx:'auto'}}>
      <Grid size={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}} />
      </Grid>
      <Grid size={6}>
       <Typography variant="h3">{product.name}</Typography>
       <Divider sx={{mb:3}}/>
       <Typography variant="h4"  color="secondary">${(product.price/100).toFixed(2)}</Typography>
       <TableContainer>
        <Table sx={{
          '& td':{fontSize:'1rem'}
        }}>
          <TableBody>
          {productDetails.map((details,index)=>
          (
            <TableRow key={index}>
            <TableCell sx={{fontWeight:'bold'}}>{details.label}</TableCell>
            <TableCell>{details.value}</TableCell>

            </TableRow>
          ))}
          </TableBody>
        </Table>
       </TableContainer>
       {/* Selecting and Adding to Basket Button  */}
       <Grid container spacing={2} marginTop={3}>
       <Grid size={6}>
        <TextField
        variant="outlined"
        type="number"
        label='Quantity In Basket'
        fullWidth
        value={quantity}
        onChange={handleInputChange}>
        </TextField>
       </Grid>
       <Grid size={6}>
       <Button
       sx={{height:'55px'}}
       onClick={handleUpdateBasket}
       disabled={quantity==item?.quantity ||!item && quantity==0}
       color="primary"
       size='large'
       variant="contained"
       fullWidth>
        {item?'Update Quantity':'Add To Basket'}

       </Button>
       </Grid>
       </Grid>
      </Grid>
    </Grid>
  )
}
export default ProductDetails