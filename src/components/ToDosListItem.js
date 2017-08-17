import classNames from 'classnames';
import React from 'react';
import './ToDosListItem.css';

export default class ToDosListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isBeingEdited: false, task: props.task};
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	renderTask() {
		return this.state.isBeingEdited ? (
			<input className="ToDosListItem-task edited" type="text" value={this.state.task}
			       autoFocus
			       onFocus={event => {
				       let value = event.target.value;
				       event.target.value = '';
				       event.target.value = value;
			       }}
			       onBlur={event => this.setState({isBeingEdited: false})}
			       onChange={event => this.setState({task: event.target.value})}
			       onKeyDown={this.handleKeyDown}/>
		) : (
			<text className={classNames('ToDosListItem-task', 'showed', {'completed': this.props.isCompleted})}
			      onClick={event => this.setState({isBeingEdited: true})}>
				{this.props.task}
			</text>
		);
	}

	render() {
		return (
			<div className="ToDosListItem">
				<div className={classNames('ToDosListItem-checkbox', {'checked': this.props.isCompleted})}
				     onClick={event => this.props.handleComplete(!this.props.isCompleted)}/>
				{this.renderTask()}
				<div className="ToDosListItem-button" onClick={this.props.handleRemove}/>
			</div>
		);
	}

	handleKeyDown(event) {
		if(event.keyCode === 13) {
			if(this.state.task.length > 0) {
				this.setState({isBeingEdited: false});
				this.props.handleEdit(this.state.task);
			}
			else {
				this.props.handleRemove();
			}
		} else if(event.keyCode === 27) {
			this.setState({isBeingEdited: false, task: this.props.task});
		}
	}
}
