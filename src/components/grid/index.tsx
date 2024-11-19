import { Grid, GridProps } from '@mui/material';

interface IGridComponent extends GridProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: IGridComponent): React.FC {
	return <Grid {...props} />;
}
