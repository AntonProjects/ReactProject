import { connect } from 'react-redux';
import React from 'react';
import Form from './Form';
import {WriteNameAC,WriteThemeAC,WriteTextAC,SetPostsAC} from '../../../redux/reducers/blogReducer';
import * as axios from 'axios';
class FormClass extends React.Component{
	onSubmitForm=()=>{
		let payload={//Данные записи
			title: this.props.themeWritten,
			text: this.props.textWritten,
			author: this.props.nameWritten,
			logo: 'logo.png'
		}
		if(payload.title!==''&&payload.text!==''&&payload.author!==''){//Если форма полностью заполнена
		axios.post('http://localhost:8000/posts',{data:payload})//Запрос, отправляющий записьч через API в базу данных
		.then(post=>{
			axios.get(`http://localhost:8000/posts?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response=>{
				this.props.setPosts(response.data);//Добавление трёх записей для обновления блога
			})
		})
		}

	}
	render(){
		return (<Form writeName={this.props.writeName}
		writeTheme={this.props.writeTheme}
		writeText={this.props.writeText}
		onSubmitForm={this.onSubmitForm}>
		</Form>);
	}
}

let mapStateToProps=(state)=>{
	return {
		nameWritten:state.blogPage.nameWritten,
		themeWritten:state.blogPage.themeWritten,
		textWritten:state.blogPage.textWritten,
		currentPage:state.blogPage.currentPage,
		pageSize:state.blogPage.pageSize
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		writeName:(name)=>{dispatch(WriteNameAC(name))},
		writeTheme:(theme)=>{dispatch(WriteThemeAC(theme))},
		writeText:(text)=>{dispatch(WriteTextAC(text))},
		setPosts:(posts)=>{dispatch(SetPostsAC(posts))}
	}
}
const FormContainer = connect(mapStateToProps,mapDispatchToProps)(FormClass);
export default FormContainer;