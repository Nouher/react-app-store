import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import axios from 'axios'


const Container=styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap;
`

const Products = ({cat,filters,sort}) => {

    const [products,setProducts]=useState();
    const [filterProducts,setFilterProducts]=useState();
    
    useEffect(() => {
     
        const getProducts = async ()=>{
            try{
                const res = await axios.get(
                    cat
                    ? `http://localhost:5000/api/products?category=${cat}` 
                    : "http://localhost:5000/api/products"
                    );
                    setProducts(res.data)
                }catch(err){}
            };
            getProducts();
            
        }, [cat])
        
        useEffect(() => {
            
            cat && setFilterProducts(
                products.filter(item=>
                    Object.entries(filters).every(([key,value])=>
                    item[key].includes(value)
                    )
                    )
                    )
                    
                }, [products,cat,filters])
                
            
                
                return (
                    
                    <Container>
                    {popularProducts.map(item=>(
                        <Product item={item} key={item.id}/>
                        ))}
                        </Container>
                        
                        )
                    }
                    
                    export default Products
                    