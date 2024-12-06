import { useParams } from 'react-router-dom';
import { ArrowBackRoot } from '../components';
import { useEffect, useState } from 'react';
import { getDataById } from '../api';
import { dateTimeConverter } from '../utils';
import SleepView from '../UI/TaskView/SleepView';
import EatView from '../UI/TaskView/EatView';
import DiaperView from '../UI/TaskView/DiaperView';

export default function TaskView() {
	const [currentTask, setCurrentTask] = useState(null);
	const params = useParams();
	const id = params.id;

	useEffect(() => {
		async function fetchData() {
			const data = await getDataById(id);
			console.log(typeof data.actionType);
			setCurrentTask(data);
		}

		fetchData();
	}, [id]);

	function getTaskView(actionType) {
		switch (actionType) {
			case 'sleep':
				return <SleepView currentTask={currentTask} />;

			case 'eat':
				return <EatView currentTask={currentTask} />;

			case 'diaper':
				return <DiaperView currentTask={currentTask} />;

			default:
				return <SleepView currentTask={currentTask} />;
		}
	}

	return (
		<section>
			<div className="max-w-[980px] mx-auto">
				{currentTask === null ? (
					<>No Tasks Found</>
				) : (
					<div>{getTaskView(currentTask.actionType)}</div>
				)}
			</div>
		</section>
	);
}
