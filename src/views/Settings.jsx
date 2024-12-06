import { useContextProvider } from '../context/Context';
import { ArrowBackRoot } from '../components/index';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
	const { babyInfo, setBabyInfo, translate, changeLanguage, i18n } =
		useContextProvider();
	const navigate = useNavigate();

	function onLogout() {
		localStorage.clear();
		navigate('/signin');
	}

	return (
		<section className="w-full min-h-[100dvh] bg-slate-100 flex flex-col gap-8 px-4 sm:px-8 pt-12">
			<ArrowBackRoot>
				<h1 className="text-2xl font-bold">Sleep</h1>
			</ArrowBackRoot>

			<form action="" className="flex flex-col gap-8 px-4 sm:px-8 pt-6">
				<div>
					<select
						value={i18n.language}
						onChange={(e) => changeLanguage(e.target.value)}>
						<option value="" disabled>
							Escolha um idioma
						</option>
						<option value="pt">Português do Brasil</option>
						<option value="en">Inglês</option>
						<option value="es">Espanhol</option>
					</select>
				</div>

				<div>
					<label htmlFor="name">Dias: </label>
					<input
						className="w-full h-12 px-4 rounded-sm"
						type="text"
						name="name"
						value={babyInfo.days}
						onChange={(e) =>
							setBabyInfo((prevState) => ({
								...prevState,
								days: e.target.value,
							}))
						}
					/>
				</div>

				<div>
					<label htmlFor="name">Nome: </label>
					<input
						className="w-full h-12 px-4 rounded-sm"
						type="text"
						name="name"
						value={babyInfo.name}
						onChange={(e) =>
							setBabyInfo((prevState) => ({
								...prevState,
								name: e.target.value,
							}))
						}
					/>
				</div>

				<div>
					<label htmlFor="name">Peso: </label>
					<input
						className="w-full h-12 px-4 rounded-sm"
						type="text"
						name="name"
						value={babyInfo.weigth}
						onChange={(e) =>
							setBabyInfo((prevState) => ({
								...prevState,
								weigth: e.target.value,
							}))
						}
					/>
				</div>

				<div>
					<label htmlFor="name">Altura: </label>
					<input
						className="w-full h-12 px-4 rounded-sm"
						type="text"
						name="name"
						value={babyInfo.heigth}
						onChange={(e) =>
							setBabyInfo((prevState) => ({
								...prevState,
								heigth: e.target.value,
							}))
						}
					/>
				</div>

				<Button sx={{ width: 'max-content' }} onClick={onLogout}>
					Logout
				</Button>
			</form>
		</section>
	);
}
