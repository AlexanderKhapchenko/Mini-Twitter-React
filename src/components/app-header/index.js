import React from "react";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import './app-header.css';

const AppHeader = ({likes, allPosts}) => {
	const [username, setUsername] = useLocalStorage("username", "Alexander Fox");

	const onUsernameChange = (e) => {
		const username = e.target.value;
		setUsername(username);
	}
	return (
		<div className="app-header d-flex">
			<ContentEditable html={username} onChange={onUsernameChange}/>
			{/* <h1 contentEditable>Alexander Fox</h1> */}
			<h2>{allPosts} записей, из них понравилось {likes}</h2>
		</div>
	);
}

export default AppHeader;