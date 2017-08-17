import React from 'react';
import shortId from 'shortid';
import NewToDo from './NewToDo';
import './ToDosList.css';
import ToDosListItem from './ToDosListItem';

const todos = [
	{
		id: shortId.generate(),
		task: 'eat smth',
		isCompleted: true,
	},
	{
		id: shortId.generate(),
		task: 'sleep a lot',
		isCompleted: true,
	},
	{
		id: shortId.generate(),
		task: 'do much more',
		isCompleted: false,
	},
];

export default class ToDosList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {todos};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	renderItems() {
		return this.state.todos.map((todo, index) =>
			<ToDosListItem key={todo.id} {...todo}
			               handleComplete={this.handleComplete.bind(null, index)}
			               handleEdit={this.handleEdit.bind(null, index)}
			               handleRemove={this.handleRemove.bind(null, index)}/>,
		);
	}

	render() {
		return (
			<div className="ToDosList">
				<NewToDo handleAdd={this.handleAdd}/>
				{this.renderItems()}
			</div>
		);
	}

	handleAdd(task) {
		let todos = this.state.todos;
		todos.push({id: shortId.generate(), task, isCompleted: false});
		this.setState({todos: todos});
	}

	handleComplete(index, isCompleted) {
		let todos = this.state.todos;
		todos[index].isCompleted = isCompleted;
		this.setState({todos: todos});
	}

	handleEdit(index, task) {
		let todos = this.state.todos;
		todos[index].task = task;
		this.setState({todos: todos});
	}

	handleRemove(index) {
		let todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({todos: todos});
	}
}
