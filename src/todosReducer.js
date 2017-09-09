import {
	ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO,
} from './constants/ActionTypes';

export default function todosReducer(state = [], {type, payload}) {
	switch (type) {
		case ADD_TODO: {
			return [...state, payload];
		}
		case COMPLETE_TODO: {
			let newState = [...state];
			let changedItem = newState.find(item => item.id === payload.id);
			changedItem.isCompleted = (payload.isCompleted |
				!changedItem.isCompleted);
			return newState;
		}
		case EDIT_TODO: {
			let newState = [...state];
			let changedItem = newState.find(item => item.id === payload.id);
			changedItem.task = payload.task;
			return newState;
		}
		case REMOVE_TODO: {
			let newState = [...state];
			newState.splice(state.findIndex(item => item.id === payload.id), 1);
			return newState;
		}
		default: {
			return state;
		}
	}
}
