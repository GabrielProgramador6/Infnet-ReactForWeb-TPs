import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import Protected from './Protected';
import SignUp from '../views/SignUp';
import Dashboard from '../views/Dashboard';
import Settings from '../views/Settings';
import Form from '../views/Form';

export default function Index() {
	const router = createBrowserRouter([
		{
			path: '/',
			children: [
				{
					path: '',
					element: <Protected />,
					children: [
						{
							path: '',
							element: <Home />,
						},
						{
							path: 'dashboard',
							element: <Dashboard />,
						},
						{
							path: 'settings',
							element: <Settings />,
						},
						{
							path: 'form',
							element: <Form />,
						},
					],
				},
			],
		},

		{
			path: 'signin',
			element: <SignIn />,
		},

		{
			path: 'signup',
			element: <SignUp />,
		},
	]);

	return <RouterProvider router={router} />;
}
