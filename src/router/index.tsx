import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import Protected from './Protected';
import SignUp from '../views/SignUp';
import Dashboard from '../views/Dashboard';
import Settings from '../views/Settings';
import TaskView from '../views/TaskView';
import Form from '../views/Form';
import {
	handleVerificationProtected,
	isAuthenticated,
} from '../services/authentication';

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
							path: '/',
							element: <Home />,
							loader: () => handleVerificationProtected(),
						},
						{
							path: 'dashboard',
							element: <Dashboard />,
							loader: () => handleVerificationProtected(),
						},
						{
							path: 'settings',
							element: <Settings />,
							loader: () => handleVerificationProtected(),
						},
						{
							path: 'new/:type',
							element: <Form />,
							loader: () => handleVerificationProtected(),
						},
						{
							path: 'task/:id',
							element: <TaskView />,
							loader: () => handleVerificationProtected(),
						},
					],
				},
			],
		},

		{
			path: 'signin',
			element: <SignIn />,
			loader: () => isAuthenticated(),
		},

		{
			path: 'signup',
			element: <SignUp />,
			loader: () => isAuthenticated(),
		},
	]);

	return <RouterProvider router={router} />;
}
