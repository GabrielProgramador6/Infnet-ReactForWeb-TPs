import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export default function index({ children }) {
	return (
		<div className="flex items-center gap-12 px-4 cursor-pointer">
			<Link to="/" className="flex items-center gap-12 px-4 cursor-pointer">
				<ArrowBackIcon />
				{children}
			</Link>
		</div>
	);
}
