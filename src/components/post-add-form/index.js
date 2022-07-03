import React from "react";
import { useState } from "react";

const PostAddForm = ({onAdd}) => {

	const [text, setText] = useState();

	const onSumbit = (e) => {
		e.preventDefault();
		onAdd(text);
		setText('');
	}

	const onValueChange = (e) => {
		setText(e.target.value);
	}

	return (
		<form onSubmit={onSumbit} className="bottom-panel d-flex">
			<input 
				type="text" 
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label"
				onChange={onValueChange}
				value={text}
			/>
			<button type="submit" className="btn btn-outline-secondary">
				Добавить
			</button>
		</form>
	);
}

export default PostAddForm;