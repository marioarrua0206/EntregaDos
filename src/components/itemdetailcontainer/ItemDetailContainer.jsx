import { useState, useEffect } from "react"
import getProducts from "../tortas.js"
import ItemDetail from "../nuevadetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { idProduct } = useParams()

  useEffect(()=>{
    getProducts
      .then((respuesta)=> {
        const newProduct = respuesta.find((product)=> product.id.toString() === idProduct)
        setProduct(newProduct || null)
      })
      .catch((error)=> console.log(error))
  }, [idProduct]);
  
  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer  
