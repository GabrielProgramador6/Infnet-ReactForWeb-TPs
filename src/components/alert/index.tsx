import { Alert, AlertProps } from '@mui/material';

interface IAlertComponent extends AlertProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: IAlertComponent): React.FC {
	return <Alert {...props} />;
}
