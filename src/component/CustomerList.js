import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function CustomerList() {
	const customer = [
		{ id: 1, name: "First" },
		{ id: 2, name: "Second" },
		{ id: 3, name: "Third" },
		{ id: 4, name: "Fourth" },
		{ id: 5, name: "Fifth" },
		{ id: 6, name: "Sixth" },
		{ id: 7, name: "Seventh" },
		{ id: 8, name: "Seventh" },
		{ id: 9, name: "Seventh" },
		{ id: 10, name: "Seventh" },
		{ id: 11, name: "Seventh" },
		{ id: 12, name: "Seventh" },
		{ id: 13, name: "Seventh" },
		{ id: 14, name: "Seventh" },
		{ id: 15, name: "Seventh" },
		{ id: 16, name: "Seventh" },
		{ id: 17, name: "Seventh" },
		{ id: 18, name: "Seventh" },
	];

	const columns = [
		{ field: "name", headerName: "Customer Name", flex: 1 },
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
				<SearchBar placeholder="Enter customer name" />
			</div> */}
			<div
				style={{
					height: "73%",
				}}
			>
				<DataGrid
					rows={customer}
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

export default CustomerList;
