import React, { useEffect, useState } from 'react';
import CustomList from '../components/custom';
import { getData } from '../api';

export default function Tasks() {
	const [task, setTask] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const data = await getData();
			console.log(data);
			setTask(data);
		}

		fetchData();
	}, []);

	return (
		<div className="w-full h-auto px-6 sm:px-12">
			{task === null ? <div>Loading...</div> : <CustomList tasks={task} />}
		</div>
	);
}
