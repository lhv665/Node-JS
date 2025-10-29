import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"; // ✅ this line is required
import { store } from "./store"; 
import Cart from './Cart.jsx'
import ProductList from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 20, border: "1px solid #999" }}>
      <h1 style={{ textAlign: "center" }}>My Shop</h1>
      <ProductList />
      <Cart />
    </div>
    </Provider>
  </StrictMode>,
)
