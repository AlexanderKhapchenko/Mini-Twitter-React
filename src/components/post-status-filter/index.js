import React from "react";
import './post-status-filter.css'

const PostStatusFilter = ({filter, onFilterSelect}) => {

	const buttonsInfo = [
		{name: 'all', label: 'Все'},
		{name: 'like', label: 'Понравилось'}
	]

	const buttons = buttonsInfo.map(({name, label}) => {
		const isActive = filter === name;
		const activityClass = isActive ? "btn-info" : "btn-outline-secondary";

		return (
			<button
				key={name}
				type="button"
				className={`btn ${activityClass}`}
				onClick={() => onFilterSelect(name)}
			>
				{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
			{/* <button type="button" className="btn btn-info">Все</button>
			<button type="button" className="btn btn-outline-secondary">Понравилось</button> */}
		</div>
	);
}

export default PostStatusFilter;