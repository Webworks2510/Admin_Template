import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewListIcon from "@mui/icons-material/ViewList";
import DescriptionIcon from "@mui/icons-material/Description";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import RedeemIcon from "@mui/icons-material/Redeem";
import StoreIcon from "@mui/icons-material/Store";
import React, { useState } from "react";
import {
	Menu,
	MenuItem,
	Sidebar,
	SubMenu,
	useProSidebar,
} from "react-pro-sidebar";
import "./Styles/sidebar.scss";
import { Link } from "react-router-dom";

function SideBar() {
	const { collapseSidebar } = useProSidebar();
	const [broken, setBroken] = useState(false);
	return (
		<div>
			<Sidebar
				className="sidebar"
				breakPoint="sm"
				onBreakPoint={() => setBroken(false)}
				transitionDuration={800}
			>
				<Menu>
					<MenuItem disabled></MenuItem>
					<MenuItem
						component={<Link to={"/"} />}
						icon={
							<StoreIcon
								onClick={() => {
									collapseSidebar();
								}}
							/>
						}
					>
						<h2>WebWorks</h2>
					</MenuItem>
					<MenuItem disabled></MenuItem>
					<SubMenu label="Product" icon={<InventoryIcon />}>
						<MenuItem
							component={<Link to={"/productlist"} />}
							icon={<ViewListIcon />}
						>
							Product List
						</MenuItem>
						<MenuItem
							component={<Link to={"/addproduct"} />}
							icon={<AddCircleOutline />}
						>
							Add Product
						</MenuItem>
					</SubMenu>
					<SubMenu label="Category" icon={<CategoryIcon />}>
						<MenuItem
							component={<Link to={"/categorylist"} />}
							icon={<ViewListIcon />}
						>
							Category List
						</MenuItem>
						<MenuItem 
							component={<Link to={"/addcategory"}></Link>} 
							icon={<AddCircleOutline />}>
							Add Category
						</MenuItem>
					</SubMenu>
					<MenuItem
						component={<Link to={"/customerlist"} />}
						icon={<PersonIcon />}
					>
						Customers
					</MenuItem>
					<MenuItem
						component={<Link to={"/orders"} />}
						icon={<ShoppingCartIcon />}
					>
						Orders
					</MenuItem>
					<MenuItem
						component={<Link to={"/invoice"} />}
						icon={<DescriptionIcon />}
					>
						Invoices
					</MenuItem>
					<MenuItem 
					icon={<ViewCarouselIcon />}>
						Layout
					</MenuItem>
					<SubMenu label="Coupon" icon={<RedeemIcon />}>
						<MenuItem
							component={<Link to={"/couponlist"} />}
							icon={<ViewListIcon />}
						>
							Coupon List
						</MenuItem>
						<MenuItem component={<Link to={"/addcoupon"} />} icon={<AddCircleOutline />}>
							Add Coupon
						</MenuItem>
					</SubMenu>
				</Menu>
			</Sidebar>
			{broken && <h1>NavBar Is Broken</h1>}
		</div>
	);
}

export default SideBar;
