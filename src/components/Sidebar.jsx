import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

const Sidebar = () => (
	<Stack
		direction="row"
		sx={{
			overFlowY: "auto",
			height: { sx: "auto", md: "95%" },
			flexDirection: { md: "column" },
		}}
	>
		{categories.map((category) => (
			<button
				className="category-btn"
				// tenary condition: selectedCategory && "#FC1503", && meant THEN
				style={{
					background: category.name === selectedCategory && "#FC1503",
					color: "white",
				}}
				key={category.name}
			>
				<span
					style={{
						color: cattegory.name === selectedCategory ? "white" : "red",
					}}
				>
					{category.icon}
				</span>
				<span>{category.name}</span>
			</button>
		))}
	</Stack>
);

export default Sidebar;
