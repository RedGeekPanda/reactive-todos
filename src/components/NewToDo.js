import React from 'react';
import './NewToDo.css';

export default class NewToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {task: ''};
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	render() {
		return (
			<div className="NewToDo">
				<input className="NewToDo" type="text" value={this.state.task} placeholder="What needs to be done?"
				       onChange={event => this.setState({task: event.target.value})}
				       onKeyDown={this.handleKeyDown.bind(this)}/>
			</div>
		);
	}

	handleKeyDown(event) {
		if(event.keyCode === 13 && this.state.task.length > 0) {
			this.props.handleAdd(this.state.task);
			this.setState({task: ''});
		}
	}
}
