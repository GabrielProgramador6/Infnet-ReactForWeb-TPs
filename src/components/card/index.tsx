import { Card, CardProps } from '@mui/material';

interface ICardComponent extends CardProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: ICardComponent): React.FC {
	return <Card {...props} />;
}
