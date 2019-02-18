import React from 'react'
import {Route} from 'react-router-dom'
import ConsumerProduct from '../Components/consumer/product'
import AdminProduct from '../Components/admin/productList'
import filterProduct from '../Components/consumer/filterProduct'
import Welcome from '../Components/consumer/welcome'
import Home from '../Components/consumer/Home'
import ConsumerHeader from '../Components/consumer/Header'
import AdminHeader from '../Components/admin/Header'
import '../css/product.css'

const ReactRouter = () => {
    return(
        <React.Fragment>
            <div className="welcome">
              <h6>WELCOME</h6>
              <a href="#">Logout</a>
            </div>
            <ConsumerHeader/>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/product" component={ConsumerProduct}/>
            <Route path="/filterProducts" component={filterProduct}/>
        </React.Fragment>
    )
}

export default ReactRouter