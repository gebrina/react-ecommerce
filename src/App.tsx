import Product from "./shoppingcart/products/Product";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductDetail from "./shoppingcart/products/product-detail/Product-Detail";
import Cheackout from "./shoppingcart/cheackout/Cheackout";
const App = ()=>{
    return <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/cheackout" element={<Cheackout/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
          </Routes>
       </BrowserRouter>
}

export default App;