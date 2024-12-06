const URL = 'http://localhost:8000/tasks';

async function getData() {
	try {
		const response = await fetch(`${URL}`);

		if (!response.ok) throw new Error('ERROR IN GET TASKS');

		const tasks = await response.json();

		return tasks.reverse();
	} catch (err) {
		console.error('ERROR AO SALVAR', err);
		return [];
	}
}

async function getDataById(id) {
	try {
		const response = await fetch(`${URL}`);

		if (!response.ok) throw new Error('ERROR IN GET TASKS');

		const tasks = await response.json();

		const data = tasks.find((task) => task.id === id);

		return data;
	} catch (err) {
		console.error('ERROR AO SALVAR', err);
		return [];
	}
}

async function save(newTask) {
	try {
		const response = await fetch(`${URL}`, {
			method: 'POST',
			body: JSON.stringify(newTask),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) return new Error('ERROR IN SAVE TASK');

		const { data } = await response.json();

		return data;
	} catch (err) {
		console.log('ERROR AO SALVAR ' + err);
	}
}

export { save, getData, getDataById };
