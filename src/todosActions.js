import shortId from 'shortid';
import {
	ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO,
} from './constants/ActionTypes';

export function addTodo(task, isCompleted = false) {
	return {
		type: ADD_TODO,
		payload: {
			id: shortId.generate(),
			isCompleted,
			task,
		},
	};
}

export function completeTodo(id, isCompleted) {
	return {
		type: COMPLETE_TODO,
		payload: {
			id,
			isCompleted,
		},
	};
}

export function editTodo(id, task) {
	return {
		type: EDIT_TODO,
		payload: {
			id,
			task,
		},
	};
}

export function removeTodo(id) {
	return {
		type: REMOVE_TODO,
		payload: {
			id,
		},
	};
}
