import React from 'react';
import {connect} from 'react-redux';
import {ENTER} from '../constants/KeyboardKeys';
import {add} from '../todosActions';
import './NewToDo.css';

function mapDispatchToProps(dispatch) {
	return {
		addTodo: task => {
			dispatch(add(task));
		},
	};
}

class NewToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editedTask: ''};
	}
	
	render() {
		return (
			<div className="NewToDo">
				<input className="NewToDo" type="text"
				       value={this.state.editedTask}
				       placeholder="What needs to be done?"
				       onChange={event => this.setState(
					       {editedTask: event.target.value})}
				       onKeyDown={this.handleKeyDown}/>
			</div>
		);
	}
	
	handleKeyDown = event => {
		if (event.keyCode === ENTER && this.state.editedTask.length > 0) {
			this.props.addTodo(this.state.editedTask);
			this.setState({editedTask: ''});
		}
	};
}

export default connect(undefined, mapDispatchToProps)(NewToDo);
