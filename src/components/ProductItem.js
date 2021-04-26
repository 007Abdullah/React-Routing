import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {

    const { id } = useParams();
    const shoe = Shoes[id];
    console.log(id);
    console.log(shoe);

    if (!shoe) {
        return <h2>Product Not Found!</h2>
    }

    return (
        <React.Fragment>
            <h2>Welcome TO the Product Item</h2>
            <div className="link">
                <React.Fragment>
                    <h2>{shoe.name}</h2>
                    <img src={shoe.img} height={150} alt="shoes" />
                </React.Fragment>
            </div>
        </React.Fragment>
    )
}
export default ProductItem;