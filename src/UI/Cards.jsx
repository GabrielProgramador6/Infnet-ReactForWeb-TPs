import React from 'react';
import { ACTIONS } from '../constants';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function Cards() {
	const navigate = useNavigate();

	return (
		<>
			{ACTIONS.map((data, i) => (
				<div
					key={i}
					className="relative flex items-center flex-col text-center w-36 py-6 sm:w-44 sm:py-6 rounded-md bg-slate-50 hover:bg-slate-200 cursor-pointer">
					<div>
						<data.Icon color={data.color} />
					</div>
					<h2 className="text-lg sm:text-xl font-semibold">{data.title}</h2>
					<div
						onClick={() => navigate(`/new/${data.actionType}`)}
						className="absolute text-center flex items-center justify-center mt-12 bg-slate-100 hover:bg-slate-200 w-12 h-12 rounded-full">
						<AddIcon />
					</div>
				</div>
			))}
		</>
	);
}
