import React from "react";
import './post-list-item.css';

const PostListItem = (props) => {
	const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = props;

	// const [like, setLike] = useState(false);
	// const [important, setImportant] = useState(false);

	let className = "app-list-item d-flex justify-content-between";
	if(important) {
		className += " important";
	}
	if(like) {
		className += " like";
	}

	// const onDelete = () => {
	// 	console.log('delete');
	// }

	return (
		<div className={className}>
			<span onClick={onToggleLiked} className="app-list-item-label">
				{label}
			</span>
			<div className="d-flex justify-content-center align-items-center">
				<button onClick={onToggleImportant} className="btn-star btn-sm">
					<i className="fa fa-star"></i>
				</button>
				<button onClick={onDelete} className="btn-trash btn-sm">
					<i className="fa fa-trash-o"></i>
				</button>
				<i className="fa fa-heart"></i>
			</div>
		</div>
	);
}

export default PostListItem;