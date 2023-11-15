import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./component/SideBar";
import Home from "./component/Home";
import ProductList from "./component/ProductList";
import CategoryList from "./component/CategoryList";
import CouponList from "./component/CouponList";
import CustomerList from "./component/CustomerList";
import Orders from "./component/Orders";
import Invoice from "./component/Invoice";
import AddProduct from "./component/AddProduct";
import { Container } from "@mui/material";

function App() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<SideBar />

			<Container maxWidth="md">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/productlist" element={<ProductList />}></Route>
					<Route path="/categorylist" element={<CategoryList />}></Route>
					<Route path="/couponlist" element={<CouponList />}></Route>
					<Route path="/customerlist" element={<CustomerList />}></Route>
					<Route path="/orders" element={<Orders />}></Route>
					<Route path="/invoice" element={<Invoice />}></Route>
					<Route path="/addproduct" element={<AddProduct />}></Route>
				</Routes>
			</Container>
		</div>
	);
}

export default App;
