import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {complete, edit, remove} from '../todosActions';
import './ToDosListItem.css';

function mapDispatchToProps(dispatch) {
	return {
		completeTodo: id => {
			dispatch(complete(id));
		},
		editTodo: (id, task) => {
			dispatch(edit(id, task));
		},
		removeTodo: id => {
			dispatch(remove(id));
		},
	};
}

class ToDosListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isBeingEdited: false,
		};
	}
	
	renderTask() {
		return this.state.isBeingEdited ? (
			<input className="ToDosListItem-task edited" type="text"
			       value={this.state.editedTask}
			       autoFocus
			       onFocus={event => {
				       let value = event.target.value;
				       event.target.value = '';
				       event.target.value = value;
			       }}
			       onBlur={() => this.setState({isBeingEdited: false})}
			       onChange={event => this.setState(
				       {editedTask: event.target.value})}
			       onKeyDown={this.handleKeyDown}/>
		) : (
			<text className={classNames('ToDosListItem-task', 'showed',
				{'completed': this.props.isCompleted})}
			      onClick={() => this.setState({
				      isBeingEdited: true,
				      editedTask: this.props.task,
			      })}>
				{this.props.task}
			</text>
		);
	}
	
	render() {
		return (
			<div className="ToDosListItem">
				<div className={classNames('ToDosListItem-checkbox',
					{'checked': this.props.isCompleted})}
				     onClick={() => this.props.completeTodo(this.props.id)}/>
				{this.renderTask()}
				<div className="ToDosListItem-button"
				     onClick={() => this.props.removeTodo(this.props.id)}/>
			</div>
		);
	}
	
	handleKeyDown = event => {
		if (event.keyCode === 13) {
			if (this.state.editedTask.length > 0) {
				this.setState({isBeingEdited: false});
				this.props.editTodo(this.props.id, this.state.editedTask);
			} else {
				this.props.removeTodo(this.props.id);
			}
		} else if (event.keyCode === 27) {
			this.setState({
				isBeingEdited: false,
			});
		}
	};
}

export default connect(undefined, mapDispatchToProps)(ToDosListItem);
