import React from "react";

function Navigation({ list, activeNav, onClickHandler }) {

	return (
		<div className="nav-list">
			{
				list.map(({ id, label }) => (
					<div
						className={`nav-list-item ${activeNav === id ? "active" : ""}`}
						key={id}
						data-listname={id}
						onClick={onClickHandler}
					>
						{label}
					</div>
				))
			}
		</div>
	)
}

export default Navigation;