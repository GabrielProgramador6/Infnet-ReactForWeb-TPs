import { IconButton, IconButtonProps } from '@mui/material';

interface IIconButtonComponent extends IconButtonProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: IIconButtonComponent): React.FC {
	return <IconButton {...props} />;
}
