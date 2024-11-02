import { ButtonProps } from '@mui/material';

interface IButtonComponent extends ButtonProps {
	children: React.ReactNode;
	props?: object;
}

export default function Button({ children, ...props }: IButtonComponent) {
	return <button {...props}>{children}</button>;
}
