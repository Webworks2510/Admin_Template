import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./component/AddCategory";
import AddCoupon from "./component/AddCoupon";
import AddProduct from "./component/AddProduct";
import CategoryList from "./component/CategoryList";
import CouponList from "./component/CouponList";
import CustomerList from "./component/CustomerList";
import Home from "./component/Home";
import Invoice from "./component/Invoice";
import Layout from "./component/Layout";
import Orders from "./component/Orders";
import ProductList from "./component/ProductList";
import SideBar from "./component/SideBar";

function App() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<SideBar />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/productlist" element={<ProductList />}></Route>
				<Route path="/categorylist" element={<CategoryList />}></Route>
				<Route path="/couponlist" element={<CouponList />}></Route>
				<Route path="/customerlist" element={<CustomerList />}></Route>
				<Route path="/orders" element={<Orders />}></Route>
				<Route path="/invoice" element={<Invoice />}></Route>
				<Route path="/addproduct" element={<AddProduct />}></Route>
				<Route path="/addcoupon" element={<AddCoupon />}></Route>
				<Route path="/addcategory" element={<AddCategory />}></Route>
				<Route path="/layout" element={<Layout />}></Route>
			</Routes>
		</div>
	);
}

export default App;
