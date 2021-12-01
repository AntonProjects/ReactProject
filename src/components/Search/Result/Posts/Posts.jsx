import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import PaginationContainer from './Pagination/PaginationContainer';
function Posts(props) {
	let posts;
	if(props.posts.length>0){
		posts=props.posts.map(post=>{
			return <Post key={post.id} searchedText={props.searchedText} postData={post.data}></Post>
		});
	}
	return (<div className={style.posts}>
		{props.posts.length>0 && <div className={style.title}><span >Записи:</span></div>}
		{posts}
		{props.posts.length>0 && <PaginationContainer></PaginationContainer>}
	</div>);
}
export default Posts;