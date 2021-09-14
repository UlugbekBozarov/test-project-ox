import React from 'react'
import './producs.scss'

const Products = (props) => {
    return props.products.map(product => {
        return (
            <div id="product" className="col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 p-3" key={product.id}>
                <div className="card">
                    {
                        product.stocks.length > 1 ? (
                            <div className="stosk">-10%</div>
                        ) : null
                    }
                    <div className="img_block">
                        {
                            product.images.length > 0 ? (
                                <img src={product.images[0].urls.original} alt="product" />
                            ) : (
                                <img src="/images/download.png" alt="product" />
                            )
                        }
                    </div>
                    <div className="card-body">
                        <h4>{product.supplier}</h4>
                        <p>{product.name}</p>
                        <h5 className="price">
                            {product.stocks[0].properties[0].name + product.stocks[0].properties[0].value}
                        </h5>
                    </div>
                </div>
            </div >
        )
    })
}

export default Products
