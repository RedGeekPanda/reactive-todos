import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo, completeTodo, editTodo, removeTodo} from '../todosActions';
import NewToDo from './NewToDo';
import './ToDosList.css';
import ToDosListItem from './ToDosListItem';

function mapStateToProps(state) {
	return {todos: state};
}

function mapDispatchToProps(dispatch) {
	return {
		boundNewTodoActions: bindActionCreators({addTodo}, dispatch),
		boundTodoListItemActions: bindActionCreators({
			completeTodo,
			editTodo,
			removeTodo,
		}, dispatch),
	};
}

class ToDosList extends React.Component {
	renderItems() {
		return this.props.todos.map(todo => <ToDosListItem
			key={todo.id} {...todo} {...this.props.boundTodoListItemActions}/>);
	}
	
	render() {
		return (
			<div className="ToDosList">
				<NewToDo {...this.props.boundNewTodoActions}/>
				{this.renderItems()}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDosList);
