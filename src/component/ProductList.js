import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function ProductList() {
	const product = [
		{ id: 1, img: "image", name: "First", price: "10" },
		{ id: 2, img: "image", name: "Second", price: "20" },
		{ id: 3, img: "image", name: "Third", price: "30" },
		{ id: 4, img: "image", name: "Fourth", price: "40" },
		{ id: 5, img: "image", name: "Fifth", price: "50" },
		{ id: 6, img: "image", name: "Sixth", price: "60" },
		{ id: 7, img: "image", name: "Seventh", price: "70" },
		{ id: 8, img: "image", name: "Seventh", price: "70" },
		{ id: 9, img: "image", name: "Seventh", price: "70" },
		{ id: 10, img: "image", name: "Seventh", price: "70" },
		{ id: 11, img: "image", name: "Seventh", price: "70" },
		{ id: 12, img: "image", name: "Seventh", price: "70" },
		{ id: 13, img: "image", name: "Seventh", price: "70" },
		{ id: 14, img: "image", name: "Seventh", price: "70" },
		{ id: 15, img: "image", name: "Seventh", price: "70" },
		{ id: 16, img: "image", name: "Seventh", price: "70" },
		{ id: 17, img: "image", name: "Seventh", price: "70" },
		{ id: 18, img: "image", name: "Seventh", price: "70" },
	];

	const columns = [
		{ field: "img", headerName: "Image", width: 150 },
		{ field: "name", headerName: "Product Name", width: 170 },
		{ field: "price", headerName: "Price", width: 150 },
		{
			field: "view",
			headerName: "View",
			width: 100,
			renderCell: (params) => (
				<IconButton
					color="#165a72"
					component="span"
					onClick={() => console.log(params.row.id)}
				>
					<VisibilityIcon />
				</IconButton>
			),
		},
		{
			field: "edit",
			headerName: "Edit",
			width: 100,
			renderCell: (params) => (
				<IconButton
					color="#165a72"
					component="span"
					onClick={() => console.log(params.row.id)}
				>
					<EditIcon />
				</IconButton>
			),
		},
	];
	return (
		<div
			style={{
				marginTop: "150px",
				maxWidth: "80%",
			}}
		>
			{/* <div>
				<SearchBar placeholder="Enter product name" />
			</div> */}
			<div
				style={{
					height: "73%",
				}}
			>
				<DataGrid
					rows={product}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10, 15, 50]}
				/>
			</div>
		</div>
	);
}

export default ProductList;
