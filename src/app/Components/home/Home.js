import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct } from '../../actions/ProductAction'
import Products from '../products/Products'
import Spinner from '../spinner/Spinner'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './home.scss'
import { updateAftarizated } from '../../actions/AftarizatedActions'
import { useLocation } from 'react-router'
toast.configure();

const Home = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const aftarizated = useSelector(state => state.aftarizated)
    const productsList = useSelector(state => state.products);

    const [products, setProducts] = useState([])

    const [filter_text, setFilter_text] = useState("");
    const [listSize, setListSize] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.post(
            "https://face.ox-sys.com/variations",
            {
                "size": listSize,
                "page": parseInt(location.pathname.substr(6)),
                "stock": {
                    "exist": true,
                    "location": [
                        42
                    ]
                }
            },
            {
                headers: {
                    "Authorization": "Bearer " + aftarizated + "",
                    "Content-Type": "application/json"
                }
            }
        ).then(respons => {
            if (respons.status === 200) {
                console.log(respons.data);
                dispatch(updateProduct(respons.data.items))
            }
            setIsLoading(false);
        }).catch(err => {
            errorAlert(err.response.data.message)
            localStorage.removeItem("token")
            dispatch(updateAftarizated(null))
            setIsLoading(false);
        })
    }, [aftarizated, dispatch, location.pathname, listSize])

    useEffect(() => {
        setProducts(productsList.filter(prod => prod.supplier.toLowerCase().includes(filter_text.toLowerCase())))
    }, [productsList, filter_text]);

    const onChangeFilter = (e) => {
        setFilter_text(e.target.value)
    }

    const onChangeListSize = (e) => {
        setListSize(e.target.value)
    }

    const errorAlert = (message) => {
        toast.error(message,
            { position: toast.POSITION.TOP_RIGHT })
    }

    return (
        <div id="home_page" className="h-100 m-0">
            <div id="search">
                <div className="search_block">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search..." onChange={onChangeFilter} />
                    </div>
                </div>
                <div className="lists_block">
                    <div className="form-group">
                        <select className="form-control" onChange={onChangeListSize}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                !isLoading ? (
                    <div className="row m-0">
                        <Products products={products} />
                    </div>
                ) : (
                    <div className="is_loading w-100 h-75 d-flex justify-content-center align-items-center">
                        <Spinner />
                    </div>
                )
            }
        </div>
    )
}

export default Home
