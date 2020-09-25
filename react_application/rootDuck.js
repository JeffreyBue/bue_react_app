
/**
 * Actions
 */
const 	XXX = 'XXX';

/**
 * Reducers
 */
export function reducerFunction(state = [], action = {}) {
	switch (action.type) {
		case XXX:
			return action.files;
		default:
			return state;
	}
}

/**
 * Action creators
 */
export function creatorFunction(response) {
	return {
		type: XXX,
		files
	};
}


/**
 * API functions
 */
export function getFunction() {
	return (dispatch) => {
		$.get('/api/').then(response => {
			dispatch(creatorFunction(response));
		}).fail(response => {
			console.log(response);
			// location.reload();
		});
	};
}