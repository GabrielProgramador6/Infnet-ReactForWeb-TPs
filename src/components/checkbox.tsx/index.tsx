import { Checkbox, CheckboxProps } from '@mui/material';

interface ICheckboxComponent extends CheckboxProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ICheckboxComponent): React.FC {
	return <Checkbox {...props} />;
}
