import { Switch, SwitchProps } from '@mui/material';

interface ISwitchComponent extends SwitchProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ISwitchComponent): React.FC {
	return <Switch {...props} />;
}
