import { Tab, TabProps } from '@mui/material';

interface ITabComponent extends TabProps {
	props: any;
}

export default function AvatarComponent({ ...props }: ITabComponent): React.FC {
	return <Tab {...props} />;
}
