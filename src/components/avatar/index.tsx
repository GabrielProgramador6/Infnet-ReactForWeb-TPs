import { Avatar, AvatarProps } from '@mui/material';

interface IAvatarComponent extends AvatarProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: IAvatarComponent): React.FC {
	return <Avatar {...props} />;
}
