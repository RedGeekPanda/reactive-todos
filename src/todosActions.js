import shortId from 'shortid';

export function add(task, isCompleted = false) {
	return {
		type: 'ADD',
		payload: {
			id: shortId.generate(),
			isCompleted,
			task,
		},
	};
}

export function complete(id, isCompleted) {
	return {
		type: 'COMPLETE',
		payload: {
			id,
			isCompleted,
		},
	};
}

export function edit(id, task) {
	return {
		type: 'EDIT',
		payload: {
			id,
			task,
		},
	};
}

export function remove(id) {
	return {
		type: 'REMOVE',
		payload: {
			id,
		},
	};
}
