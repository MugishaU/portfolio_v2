import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

const Header: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<Image
						src="/icons/icon-512x512.png"
						alt="Mugisha Uwiragiye 'MU' Logo"
						layout="responsive"
					/>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
