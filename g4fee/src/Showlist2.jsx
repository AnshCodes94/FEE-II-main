import React, { useEffect, useState } from "react";

export function ShowList2(){
    const [num, setNum] = useState(0);
    const [str, setStr] = useState("");
    const [bool, setBool] = useState(false);
    const [arr, setArr] = useState([]);// 4, 5, 6, 7 are use for our knowledge

    const [brand, setBrand] = useState("All");
    const [products, setProducts] = useState([]);

    useEffect(() => {},[]);//dependency array is emply and it is also known as side array and if we will not used thsi dependency array then this code 

    useEffect(() => {
        const data = localStorage.getItem("products");
        if(data){
            setProducts(JSON.parse(data));
        }
    }, []);

    //filter
    const filteredProducts = 
        brand ==="All"
            ? products
            :products.filter((products) => products.brand === brand);
    return (
        <section className="fyc">
            <div className="b1" style={{Padding:"1rem"}}>
                <h3>Product List</h3>

                {/* {Contrelled COMPONENT} */}

                <label>Select Brand: </label>{/* </>this is packet and it is iknow as fragment and it as not gain  */}

                <select value={brand} onChange={(e) => setBrand(e.target.value)}>{/* brand is s astate variable  */}
                    <option value="All">All</option>
                    <option value="Levis">Levis</option>
                    <option value="Wrangler">Wrangler</option>
                    <option value="Pepe">Pepe</option>
                </select>
                {/* MAP */}
                <div className="bg1" style={{marginTop: "0.5rem"}}>
                    <span>Item Code</span>
                    {brand === "All" && <span>Brand</span>}
                    <span>Price(Rs.)</span>
                </div>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <span>{product.id}</span>
                        {brand === "All" && <span>{product.brand}</span>}
                        <span>{product.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}