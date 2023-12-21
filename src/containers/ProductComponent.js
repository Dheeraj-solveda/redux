import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.Products);

    // const renderList = products?.map((product) => {
    //     const { id, title, image, price, category } = product;
    //     return (
    //         <div className="four wide column" key={id}>
    //             <NavLink to={`/product/${id}`}>
    //                 <div className="ui link cards">
    //                     <div className="card">
    //                         <div className="image">
    //                             <img src={image} alt={title} />
    //                         </div>
    //                         <div className="content">
    //                             <div className="header">{title}</div>
    //                             <div className="meta price">$ {price}</div>
    //                             <div className="meta">{category}</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </NavLink>
    //         </div>
    //     );
    // });
    return <>
        {products?.map((product) => {
            const { id, title, image, price, category } = product;
            return (
                <div className="four wide column" key={id} style={{marginTop:'50px'}}>
                    <NavLink to={`/product/${id}`}>
                        <div className="ui link cards">
                            <div className="card" style={{height:"380px"}}>
                                <div className="image">
                                    <img style={{height: "250px",padding:'10px'}} src={image} alt={title} />
                                </div>
                                <div className="content">
                                    <div className="header" style={{fontSize:'15px'}}>{title}</div>
                                    <div className="meta price">${price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            )
        })}
    </>;
};

export default ProductComponent;