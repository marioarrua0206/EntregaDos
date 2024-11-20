import './itemlistcontainer.css'
import getProducts from '../tortas';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemlist/ItemList'



function ItemListContainer () {

    const [products, setProducts] = useState ([]);

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts
        .then((respuesta) => {
            if(categoryId){
                const newProducts = respuesta.filter((producto)=> producto.categoria === categoryId)
                setProducts(newProducts)
            }else{
                setProducts(respuesta)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> console.log ("Final promesa"))
    },[categoryId])


      
   
    return (
        <> <div className='item-list-container'>
            <ItemList products={products}/>

        </div>     
        </>
    )
}

export default ItemListContainer;