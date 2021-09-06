import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/icons/IconButton";
import ForumIcon from "@material-ui/icons/IconButton";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
			<img className="header__logo" src="" alt="" />
			<IconButton>
				<ForumIcon fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	);
}

export default Header;
