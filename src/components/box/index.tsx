import { Box, BoxProps } from '@mui/material';

interface IBoxComponent extends BoxProps {
	props: any;
}

export default function AvatarComponent({ ...props }: IBoxComponent): React.FC {
	return <Box {...props} />;
}
