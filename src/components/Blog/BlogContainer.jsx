import { connect } from 'react-redux';
import React from 'react';
import Blog from './Blog';
import * as axios from 'axios';
import {SetPostsAC} from '../../redux/reducers/blogReducer';

class BlogClass extends React.Component{
	componentDidMount(){
		axios.get(`http://localhost:8000/posts?_page=0&_limit=${this.props.pageSize}`).then(response=>{
			this.props.setPosts(response.data);//Установка первоначальных 3 записей при загрузе компонента
		})
	}
	render(){
		return (<Blog></Blog>);
	}
}

let mapStateToProps=(state)=>{
	return {
		pageSize:state.blogPage.pageSize
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		setPosts:(posts)=>{dispatch(SetPostsAC(posts))}
	}
}
const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(BlogClass);
export default BlogContainer;