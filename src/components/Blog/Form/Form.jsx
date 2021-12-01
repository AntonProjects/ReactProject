import React from 'react';
import style from './Form.module.css';
function Form(props) {
	let nameRef=React.createRef();
	let themeRef=React.createRef();
	let textRef=React.createRef();
	let onWriteName=()=>{
		let name=nameRef.current.value;
		props.writeName(name);
	}
	let onWriteTheme=()=>{
		let theme=themeRef.current.value;
		props.writeTheme(theme);
	}
	let onWriteText=()=>{
		let text=textRef.current.value;
		props.writeText(text);
	}
	let handleSubmit=(e)=>{
		e.preventDefault();
		props.onSubmitForm();
	}
	return (<div className={style.formDiv}>
		<form className={style.form} action="#" onSubmit={handleSubmit}>
			<div className={style.title}><span className={style.titleText}>Добавить запись</span></div>
			<label htmlFor="name">Ваш никнейм:</label>
			<br/>
			<input ref={nameRef} className={style.input} onInput={onWriteName} type="text" id="name"/>
			<br/>
			<label htmlFor="theme">Тема:</label>
			<br/>
			<input ref={themeRef} className={style.input} onInput={onWriteTheme} type="text" id="theme"/>
			<br/>
			<label htmlFor="text">Текст:</label>
			<br/>
			<textarea ref={textRef} className={style.formText} maxLength="309" onInput={onWriteText} id="text"></textarea>
			<br/>
			<input type="submit" className={style.formSubmit} value="Добавить"/>
		</form>
	</div>);
}
export default Form;