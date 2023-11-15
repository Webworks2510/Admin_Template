import { InputAdornment, TextField } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import React from "react";

function SearchBar() {
	return (
		<div style={{ marginBottom: "20px" }}>
			<TextField
				placeholder="Search..."
				variant="outlined"
				size="small"
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<GridSearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
}

export default SearchBar;
