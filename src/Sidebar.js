import React from "react";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import "./Sidebar.css";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<h3>Petrit Halabaku</h3>
				<ExpandMoreIcon />
			</div>
			<div className="sidebar__channels">
				<div className="sidebar__channelHeader">
					<div className="sidebar__header">
						<ExpandMoreIcon />
						<h4>Text Channels</h4>
					</div>
					<AddIcon className="sidebar__addChannel" />
				</div>
			<div className="sidebar__channelsList">
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
				<SidebarChannel />
			</div>
			</div>
		</div>
	);
};

export default Sidebar;
