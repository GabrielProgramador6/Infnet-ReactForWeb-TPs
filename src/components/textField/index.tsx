import { TextField, TextFieldProps } from '@mui/material';

interface ITextFieldComponent extends TextFieldProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ITextFieldComponent): React.FC {
	return <TextField {...props} />;
}
