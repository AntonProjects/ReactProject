import { connect } from 'react-redux';
import React from 'react';
import Posts from './Posts';

class PostsClass extends React.Component{
	render(){
		return (<Posts posts={this.props.searchedPosts} searchedText={this.props.searchedText}></Posts>);
	}
}

let mapStateToProps=(state)=>{
	return {
		searchedPosts:state.searchPage.searchedPosts,
		searchedText:state.searchPage.searchedText
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
	}
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(PostsClass);
export default PostsContainer;