import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import AppHeader from "../app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import "./app.css";

const App = () => {

	// const [data, setData] = useState([
	// 	{label: 'Going to learn React', important: true, like: false, id: 'aw'},
	// 	{label: 'That is so good', important: false, like: false, id: 'sw'},
	// 	{label: 'I need a break...', important: false, like: false, id: 'dr'},
	// 	{label: 'Wow it`s working!', important: false, like: false, id: 'za'},
	// ]);

	// const [data, setData] = useState(() => {
	// 	const saved = localStorage.getItem("data");
	// 	const initialValue = JSON.parse(saved);

	// 	const defaultValue = [
	// 		{label: 'Going to learn React', important: true, like: false, id: 'aw'},
	// 		{label: 'That is so good', important: false, like: false, id: 'sw'},
	// 		{label: 'I need a break...', important: false, like: false, id: 'dr'},
	// 		{label: 'Wow it`s working!', important: false, like: false, id: 'za'},
	// 	];

	// 	return initialValue || defaultValue;
	// });

	// useEffect(() => {
	// 	localStorage.setItem("data", JSON.stringify(data));
	// }, [data]);

	const defaultValue = [
		{label: 'Going to learn React', important: true, like: false, id: 'aw'},
		{label: 'That is so good', important: false, like: false, id: 'sw'},
		{label: 'I need a break...', important: false, like: false, id: 'dr'},
		{label: 'Wow it`s working!', important: false, like: false, id: 'za'},
	];
	const [data, setData] = useLocalStorage("data", defaultValue);

	//let maxId = 4;

	const [maxId, setMaxId] = useState(4);
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all');

	const onDelete = (id) => {
		const index = data.findIndex(msg => msg.id === id);
		const before = data.slice(0, index);
		const after = data.slice(index + 1);
		const newData = [...before, ...after];
		setData(newData);
	}

	const onAdd = (body) => {
		setMaxId(maxId + 1);

		const newMessage = {
			label: body,
			important: false,
			like: false,
			id: maxId
		}

		const newData = [...data, newMessage];
		setData(newData);
	}

	const onToggleImportant = (id) => {
		const index = data.findIndex(msg => msg.id === id);
		const oldMessage = data[index];
		const updatedMessage = {...oldMessage, important: !oldMessage.important};

		const before = data.slice(0, index);
		const after = data.slice(index + 1);

		const newData = [...before, updatedMessage, ...after];
		setData(newData);
	}

	const onToggleLiked = (id) => {
		const index = data.findIndex(msg => msg.id === id);
		const oldMessage = data[index];
		const updatedMessage = {...oldMessage, like: !oldMessage.like};

		const before = data.slice(0, index);
		const after = data.slice(index + 1);

		const newData = [...before, updatedMessage, ...after];
		setData(newData);
	}

	const searchPost = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		
		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}

	const filterPost = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like);
		}
		else if (filter === 'all') {
			return items;
		}
	}

	const allPosts = data.length;
	const likes = data.filter(msg => msg.like).length;

	const visiblePosts = filterPost(searchPost(data, term), filter);
	
	//const filterPosts = filterPost(visiblePosts, filter);

	return (
		<div className="app">
			<AppHeader
				allPosts={allPosts}
				likes={likes}
			/>
			<div className="search-panel d-flex">
				<SearchPanel
					onUpdateSearch={setTerm}
				/>
				<PostStatusFilter
					filter={filter}
					onFilterSelect={setFilter}
				/>
			</div>
			<PostList 
				onDelete={onDelete} 
				onToggleImportant={onToggleImportant} 
				onToggleLiked={onToggleLiked} 
				posts={visiblePosts}
			/>
			<PostAddForm onAdd={onAdd}/>
		</div>
	);
}

export default App;