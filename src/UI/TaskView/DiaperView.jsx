import React from 'react';
import { dateTimeConverter } from '../../utils';
import { ArrowBackRoot } from '../../components';

export default function DiaperView({ currentTask }) {
	return (
		<div className="mt-8 px-8 flex flex-col gap-4">
			<ArrowBackRoot>
				<h1 className="text-2xl font-bold">
					{currentTask?.actionType.toUpperCase()}
				</h1>
			</ArrowBackRoot>

			<div className="mt-8 px-8 flex flex-col gap-4">
				<h2 className="text-slate-800 font-bold text-2xl">
					{currentTask?.actionType.toUpperCase()}
				</h2>
				<p className="text-slate-800 font-medium text-xl">
					{currentTask.comment}
				</p>

				{currentTask?.breast ? (
					<p className="text-slate-800 font-medium text-xl">
						Estado da Fralda:{' '}
						{currentTask.breast.toLowerCase() === 'ambas' ? (
							<>Suja de Fezes e Urina</>
						) : (
							<>{currentTask.breast}</>
						)}
					</p>
				) : null}

				<div className="flex items-center gap-8">
					<span className="text-lg text-slate-600 font-black">
						{dateTimeConverter(currentTask.dateTimeStart)}
					</span>
					<span className="text-lg text-slate-600 font-black">
						{dateTimeConverter(currentTask?.dateTimeEnd)}
					</span>
				</div>
			</div>
		</div>
	);
}
