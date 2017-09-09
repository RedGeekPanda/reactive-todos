import shortId from 'shortid';
import {
	ADD_TODO, COMPLETE_TODO, REMOVE_TODO, EDIT_TODO,
} from './constants/ActionTypes';

export function add(task, isCompleted = false) {
	return {
		type: ADD_TODO,
		payload: {
			id: shortId.generate(),
			isCompleted,
			task,
		},
	};
}

export function complete(id, isCompleted) {
	return {
		type: COMPLETE_TODO,
		payload: {
			id,
			isCompleted,
		},
	};
}

export function edit(id, task) {
	return {
		type: EDIT_TODO,
		payload: {
			id,
			task,
		},
	};
}

export function remove(id) {
	return {
		type: REMOVE_TODO,
		payload: {
			id,
		},
	};
}
