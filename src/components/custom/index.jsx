import React from 'react';
import CribIcon from '@mui/icons-material/Crib';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SpaIcon from '@mui/icons-material/Spa';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { dateTimeConverter } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function CustomList({ tasks }) {
	const navigate = useNavigate();

	if (!tasks || !Array.isArray(tasks)) {
		return <div>No tasks available</div>;
	}

	return (
		<div>
			{tasks.map((task) => {
				const iconType = (() => {
					switch (task.actionType) {
						case 'sleep':
							return CribIcon;
						case 'eat':
							return RestaurantMenuIcon;
						case 'diaper':
							return SpaIcon;
						default:
							return RemoveCircleOutlineIcon;
					}
				})();

				const Icon = iconType;

				return (
					<div
						onClick={() => navigate(`task/${task.id}`)}
						key={task.id}
						className="my-8 cursor-pointer flex items-center justify-between gap-4 w-full h-auto flex-1 border shadow-md py-6 px-4 rounded-full">
						<Icon />
						<p>{task.actionType.toUpperCase()}</p>
						<span>{dateTimeConverter(task.dateTimeStart)}</span>
					</div>
				);
			})}
		</div>
	);
}
