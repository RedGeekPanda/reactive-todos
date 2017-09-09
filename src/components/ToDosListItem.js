import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import {ENTER, ESC} from '../constants/KeyboardKeys';
import {completeTodo, editTodo, removeTodo} from '../todosActions';
import './ToDosListItem.css';

function mapDispatchToProps(dispatch) {
	return {
		completeTodo: id => {
			dispatch(completeTodo(id));
		},
		editTodo: (id, task) => {
			dispatch(editTodo(id, task));
		},
		removeTodo: id => {
			dispatch(removeTodo(id));
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
			       autoFocus
			       onFocus={({target}) => {
				       target.value = this.props.task;
			       }}
			       onBlur={() => this.setState({
				       isBeingEdited: false,
			       })}
			       onKeyDown={this.handleKeyDown}/>
		) : (
			<text className={classNames('ToDosListItem-task', 'showed',
				{'completed': this.props.isCompleted,})}
			      onClick={() => this.setState({
				      isBeingEdited: true,
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
	
	handleKeyDown = ({keyCode, target}) => {
		if (keyCode === ENTER) {
			if (target.value) {
				this.props.editTodo(this.props.id, target.value);
				this.setState({
					isBeingEdited: false,
				});
			} else {
				this.props.removeTodo(this.props.id);
			}
		} else if (keyCode === ESC) {
			this.setState({
				isBeingEdited: false,
			});
		}
	};
}

export default connect(undefined, mapDispatchToProps)(ToDosListItem);
