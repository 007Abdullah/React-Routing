import React from 'react';
import shoes from '../shoes.json';
import { Link } from 'react-router-dom'
import '../App.css'

export default function Product() {
    console.log(shoes);
    console.log(Object.keys(shoes));

    return (
        <React.Fragment>
            <h1>Welcome to the Product</h1>
            <div className="productname">
                {Object.keys(shoes).map(keyname => {
                    const shoe = shoes[keyname];
                    return (
                        <Link className="link" to={`/product/${keyname}`} key={keyname}>
                            <React.Fragment >
                                <h2>{shoe.name}</h2>
                                <img src={shoe.img} height="150" alt="shoes" />
                            </React.Fragment>
                        </Link>

                    )
                })}
            </div>
        </React.Fragment>
    )
}
