import { useState, useEffect } from "react";

/*
const [data, setData] = useState(() => {
	const saved = localStorage.getItem("data");
	const initialValue = JSON.parse(saved);

	const defaultValue = [
		{label: 'Going to learn React', important: true, like: false, id: 'aw'},
		{label: 'That is so good', important: false, like: false, id: 'sw'},
		{label: 'I need a break...', important: false, like: false, id: 'dr'},
		{label: 'Wow it`s working!', important: false, like: false, id: 'za'},
	];

	return initialValue || defaultValue;
}); 
*/

function getStorageValue(key, defaultValue) {
	const saved = localStorage.getItem(key);
	const initialValue = JSON.parse(saved);
	return initialValue || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	}); 

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

//const [a, b] = [12, 123]
