import { Fab, FabProps } from '@mui/material';

interface IFabComponent extends FabProps {
	props: any;
}

export default function AvatarComponent({ ...props }: IFabComponent): React.FC {
	return <Fab {...props} />;
}
