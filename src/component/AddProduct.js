import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import LargeImgBackground from "../assests/images/LargeImgBackgound.png";
import smallImgBackground from "../assests/images/smallImgBackground.png";

import {
	Box,
	Button,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	styled,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
	boxShadow: "none",
	border: "none",
}));

const FlexContainer = styled("div")({
	display: "flex",
	gap: "16px",
});

const TagsContainer = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	gap: "8px",
	marginTop: "8px",
});

const TagButton = styled(Button)({
	marginRight: "8px",
	textTransform: "none",
	display: "flex",
	alignItems: "center",
});

const DisplayImage = styled("img")({
	height: "300px",
	width: "100%",
});

const AddImageContainer = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	gap: "8px",
	marginTop: "8px",
	width: "100%",
	justifyContent: "space-between",
});

const AddImage = styled("div")({
	position: "relative",
	height: "80px",
	width: "100%",
	cursor: "pointer",
	maxWidth: "calc(25% - 8px)",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	overflow: "hidden",
});

const AddCircle = styled(AddCircleIcon)({
	position: "absolute",
	fontSize: "40px",
	color: "#fff",
	cursor: "pointer",
});

export default function AddProduct() {
	const [tags, setTags] = useState([]);
	const [tagInput, setTagInput] = useState("");

	const handleTagChange = (event) => {
		setTagInput(event.target.value);
	};

	const handleAddTag = () => {
		if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
			setTags([...tags, tagInput]);
			setTagInput("");
		}
	};

	const handleRemoveTag = (removeTag) => {
		setTags(tags.filter((tag) => tag !== removeTag));
	};

	const handleTagBlur = () => {
		if (tagInput.trim() !== "" && !tags.includes(tagInput)) {
			setTags([...tags, tagInput]);
			setTagInput("");
		}
	};

	return (
		<Container maxWidth="md">
			<Box mt={5}>
				<center>
					<h2>Add Product</h2>
				</center>
				<Grid container spacing={0}>
					<Grid item xs={12} md={5}>
						<Item>
							<DisplayImage alt="Product" src={LargeImgBackground} />

							<AddImageContainer>
								<AddImage>
									<img alt="Product" src={smallImgBackground} />
									<AddCircle />
								</AddImage>
								<AddImage>
									<img alt="Product" src={smallImgBackground} />
									<AddCircle />
								</AddImage>
								<AddImage>
									<img alt="Product" src={smallImgBackground} />
									<AddCircle />
								</AddImage>
								<AddImage>
									<img alt="Product" src={smallImgBackground} />
									<AddCircle />
								</AddImage>
							</AddImageContainer>
						</Item>
					</Grid>
					<Grid item xs={12} md={7}>
						<Item>
							<div>
								<TextField
									id=""
									label="Product Name"
									variant="outlined"
									size="Normal"
									fullWidth
									required
								/>

								<FormControl sx={{ mt: 2 }} required fullWidth>
									<InputLabel id="">Choose Category</InputLabel>
									<Select label="Choose Category *">
										<MenuItem value={10}>Mens Shirt</MenuItem>
										<MenuItem value={20}>Sarees</MenuItem>
										<MenuItem value={30}>Pants</MenuItem>
									</Select>
								</FormControl>

								<FlexContainer sx={{ mt: 2 }}>
									<TextField
										id=""
										label="CP"
										variant="outlined"
										size="Normal"
										fullWidth
										required
									/>
									<TextField
										id=""
										label="MRP"
										variant="outlined"
										size="Normal"
										fullWidth
										required
									/>
									<TextField
										id=""
										label="SP"
										variant="outlined"
										size="Normal"
										fullWidth
										required
									/>
								</FlexContainer>

								<TextField
									id=""
									label="Description"
									variant="outlined"
									size="Normal"
									sx={{ mt: 2 }}
									fullWidth
									required
								/>

								<TextField
									id=""
									label="Tags"
									placeholder="Enter to add tags"
									variant="outlined"
									size="Normal"
									sx={{ mt: 2 }}
									fullWidth
									value={tagInput}
									onChange={handleTagChange}
									onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
									onBlur={handleTagBlur}
								/>

								<TagsContainer>
									{tags.map((tag) => (
										<TagButton size="small" key={tag} variant="contained">
											<div>{tag} </div>
											<div onClick={() => handleRemoveTag(tag)}>
												<CancelIcon fontSize="small" />
											</div>
										</TagButton>
									))}
								</TagsContainer>

								<TextField
									id=""
									label="Labels"
									variant="outlined"
									size="Normal"
									sx={{ mt: 2 }}
									fullWidth
									required
								/>

								<TextField
									id=""
									label="Quantity"
									variant="outlined"
									size="Normal"
									sx={{ mt: 2 }}
									fullWidth
									required
								/>

								<center>
									<Button sx={{ mr: 2, mt: 2 }} variant="contained">
										Create
									</Button>
									<Button sx={{ mr: 2, mt: 2 }} variant="outlined">
										Discard
									</Button>
								</center>
							</div>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
