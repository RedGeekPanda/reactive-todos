import React from 'react';
import {connect} from 'react-redux';
import {ENTER} from '../constants/KeyboardKeys';
import {addTodo} from '../todosActions';
import './NewToDo.css';

function mapDispatchToProps(dispatch) {
	return {
		addTodo: task => {
			dispatch(addTodo(task));
		},
	};
}

class NewToDo extends React.Component {
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

export default connect(undefined, mapDispatchToProps)(NewToDo);
