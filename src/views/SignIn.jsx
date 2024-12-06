import { useState } from 'react';
import { Button } from '../components';

export default function SignIn() {
	const [user, setUser] = useState({ email: '', password: '', message: '' });

	function onSubmit() {
		if (!user.email && !user.password) {
			user.message = 'Insira um email e uma senha';
			return;
		}

		localStorage.setItem('session', 'session');
		console.log(user);
	}

	console.log(user);

	return (
		<section className="">
			<form>
				<input
					type="email"
					placeholder="Enter your email..."
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Enter your password..."
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				{user.message && (
					<h4 className="text-red-500 text-xl">{user.message}</h4>
				)}
				<div>
					<Button onClick={onSubmit}>Entrar</Button>
				</div>
			</form>
		</section>
	);
}
