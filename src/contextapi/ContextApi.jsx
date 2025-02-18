import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const Productdetails = createContext()



function ContextApi({ children }) {

    const [storeproducts, setproductdetails] = useState([])
    console.log(storeproducts);


    useEffect(() => {

        fetchproducts()

    }, [])



    const fetchproducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            // console.log(response.data); 
            setproductdetails(response.data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <>

            <Productdetails.Provider value={{ storeproducts, setproductdetails }}>
                {children}
            </Productdetails.Provider>

        </>
    )
}

export default ContextApi