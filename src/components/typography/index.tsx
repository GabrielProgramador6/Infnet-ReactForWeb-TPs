import { Typography, TypographyProps } from '@mui/material';

interface ITypographyComponent extends TypographyProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ITypographyComponent): React.FC {
	return <Typography {...props} />;
}
