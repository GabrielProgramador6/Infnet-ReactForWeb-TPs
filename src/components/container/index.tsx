import { Container, ContainerProps } from '@mui/material';

interface IContainerComponent extends ContainerProps {
	props: any;
}

export default function AvatarComponent({
	...props
}: IContainerComponent): React.FC {
	return <Container {...props} />;
}
