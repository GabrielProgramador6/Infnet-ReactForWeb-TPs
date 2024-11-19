import { Snackbar, SnackbarProps } from '@mui/material';

interface ISnackbarComponent extends SnackbarProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ISnackbarComponent): React.FC {
	return <Snackbar {...props} />;
}
