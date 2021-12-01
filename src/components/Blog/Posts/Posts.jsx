import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import PaginationContainer from './Pagination/PaginationContainer';
function Posts(props) {
	let posts=props.posts.map(post=>{
		return <Post key={post.id} postData={post.data}></Post>
	});
	return (<div className={style.posts}>
		<div className={style.title}><span >Записи:</span></div>
		{posts}
		{props.posts.length>0 &&<PaginationContainer></PaginationContainer>}
	</div>);
}
export default Posts;