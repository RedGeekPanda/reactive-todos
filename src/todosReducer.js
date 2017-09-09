export default function todosReducer(state = [], {type, payload}) {
	switch (type) {
		case 'ADD': {
			return [...state, payload];
		}
		case 'COMPLETE': {
			let newState = [...state];
			let changedItem = newState.find(item => item.id === payload.id);
			changedItem.isCompleted = (payload.isCompleted |
				!changedItem.isCompleted);
			return newState;
		}
		case 'EDIT': {
			let newState = [...state];
			let changedItem = newState.find(item => item.id === payload.id);
			changedItem.task = payload.task;
			return newState;
		}
		case 'REMOVE': {
			let newState = [...state];
			newState.splice(state.findIndex(item => item.id === payload.id), 1);
			return newState;
		}
		default: {
			return state;
		}
	}
}
