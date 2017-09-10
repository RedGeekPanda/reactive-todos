import React from 'react';
import {ENTER} from '../constants/KeyboardKeys';
import './NewToDo.css';

export default class NewToDo extends React.Component {
	render() {
		return (
			<div className="NewToDo">
				<input className="NewToDo" type="text"
				       placeholder="What needs to be done?"
				       onKeyDown={this.handleKeyDown}/>
			</div>
		);
	}
	
	handleKeyDown = ({keyCode, target}) => {
		if (keyCode === ENTER && target.value) {
			this.props.addTodo(target.value);
			target.value = '';
		}
	};
}
