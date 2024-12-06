import React, { useState } from 'react';
import { dateTimeConverter } from '../../utils';
import { ArrowBackRoot, Button } from '../../components/index';
import { save } from '../../api';

export default function Sleep({ data, setData }) {
	const [dateTime, setDateTime] = useState({
		actionType: 'sleep',
		dateTimeStart: '',
		dateTimeEnd: '',
		comment: '',
	});

	const [formattedDateTime, setFormattedDateTime] = useState({
		start: '',
		end: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setDateTime((prevState) => ({ ...prevState, [name]: value }));

		const formattedValue = dateTimeConverter(value);
		setFormattedDateTime((prev) => ({
			...prev,
			[name === 'dateTimeStart' ? 'start' : 'end']: formattedValue,
		}));
	}

	async function onSubmit(e) {
		e.preventDefault();

		const newData = {
			...dateTime,
		};

		const savedData = await save(newData);

		if (savedData) {
			setData((prevData) => [...prevData, savedData]);
		}
	}

	return (
		<section className="w-full min-h-[100dvh] bg-slate-100 flex flex-col gap-8 px-4 sm:px-8 pt-12">
			<ArrowBackRoot>
				<h1 className="text-2xl font-bold">Sleep</h1>
			</ArrowBackRoot>

			<form
				className="flex flex-col gap-8 px-4 sm:px-8 pt-6"
				onSubmit={onSubmit}>
				<div>
					<label htmlFor="dateTimeStart">Início</label>
					<input
						type="datetime-local"
						name="dateTimeStart"
						id="dateTimeStart"
						value={dateTime.dateTimeStart}
						onChange={handleChange}
						className="w-full h-12 px-4 rounded-sm"
					/>
					{formattedDateTime.start && (
						<p>Data formatada: {formattedDateTime.start}</p>
					)}
				</div>

				<div>
					<label htmlFor="dateTimeEnd">Fim</label>
					<input
						type="datetime-local"
						name="dateTimeEnd"
						id="dateTimeEnd"
						value={dateTime.dateTimeEnd}
						onChange={handleChange}
						className="w-full h-12 px-4 rounded-sm"
					/>
					{formattedDateTime.end && (
						<p>Data formatada: {formattedDateTime.end}</p>
					)}
				</div>

				<div>
					<input
						type="text"
						placeholder="Digite um comentário"
						value={dateTime.comment}
						onChange={(e) =>
							setDateTime((prevState) => ({
								...prevState,
								comment: e.target.value,
							}))
						}
						className="w-full h-40 px-4 rounded-sm"
					/>
				</div>

				<Button className="bg-slate-400 px-12 py-4 w-max rounded-md text-slate-50">
					Salvar
				</Button>
			</form>
		</section>
	);
}
