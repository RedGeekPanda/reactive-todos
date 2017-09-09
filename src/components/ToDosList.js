import React from 'react';
import {connect} from 'react-redux';
import NewToDo from './NewToDo';
import './ToDosList.css';
import ToDosListItem from './ToDosListItem';

function mapStateToProps(state) {
	return {todos: state};
}

class ToDosList extends React.Component {
	renderItems() {
		return this.props.todos.map(
			todo => <ToDosListItem key={todo.id} {...todo}/>);
	}
	
	render() {
		return (
			<div className="ToDosList">
				<NewToDo/>
				{this.renderItems()}
			</div>
		);
	}
}

export default connect(mapStateToProps)(ToDosList);
