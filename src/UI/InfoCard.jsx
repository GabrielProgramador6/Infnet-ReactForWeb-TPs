import React from 'react';
import BabyImage from '../assets/baby.png';
import SignalCellularAlt from '@mui/icons-material/SignalCellularAlt';
import Settings from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useContextProvider } from '../context/Context';

export default function InfoCard() {
	const { babyInfo, setBabyInfo } = useContextProvider();

	return (
		<>
			<div className="flex flex-col gap-4 text-center border-1 border-slate-400 shadow-md w-36 py-4 sm:w-44 sm:py-6 hover:bg-slate-200 cursor-pointer rounded-md">
				<div>
					<SignalCellularAlt fontSize="large" color="primary" />
				</div>
				<h4 className="textl-lg sm:text-xl text-black font-medium">
					{babyInfo.heigth}
				</h4>
				<p className="text-md sm:text-lg text-black font-normal">Comprimento</p>
			</div>

			<div className="flex flex-col items-center gap-4 text-center border-1 border-slate-400 shadow-md w-36 py-4 sm:w-44 sm:py-6 hover:bg-slate-200 cursor-pointer rounded-md">
				<div className="w-20">
					<img
						src={BabyImage}
						alt="baby image"
						className="w-full h-auto object-cover"
					/>
				</div>
				<h4 className="textl-lg sm:text-xl text-black font-bold">
					{babyInfo.name}
				</h4>
				<p className="text-md sm:text-lg text-black font-medium">
					{babyInfo.days} Dias
				</p>
			</div>

			<Link to="/settings">
				<div className="flex flex-col gap-4 text-center border-1 border-slate-400 shadow-md w-36 py-4 sm:w-44 sm:py-6 hover:bg-slate-200 cursor-pointer rounded-md">
					<div>
						<Settings fontSize="large" color="primary" />
					</div>
					<h4 className="textl-lg sm:text-xl text-black font-medium">
						{babyInfo.weigth}
					</h4>
					<p className="text-md sm:text-lg text-black font-normal">Peso</p>
				</div>
			</Link>
		</>
	);
}
