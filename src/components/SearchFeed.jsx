import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	return (
		// height: "90vh"
		<Box p={2} sx={{ overFlowY: "auto", height: "100%", flex: 2 }}>
			<Typography variant="h4" fontWeight="bold" md={2} sx={{ color: "white" }}>
				Search Results for:{" "}
				<span style={{ color: "#F31503" }}>{searchTerm}</span> videos
			</Typography>
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
