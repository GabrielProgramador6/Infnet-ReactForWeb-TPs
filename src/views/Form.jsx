import { useParams } from 'react-router-dom';
import { useContextProvider } from '../context/Context';
import Sleep from '../UI/Forms/Sleep';
import Eat from '../UI/Forms/Eat';
import Diaper from '../UI/Forms/Diaper';

export default function Form() {
	const params = useParams();
	const actionType = params.type;
	const id = params.id;

	const { data, setData } = useContextProvider();

	function getForm(actionType) {
		switch (actionType) {
			case '1':
				return <Sleep data={data} setData={setData} />;

			case '2':
				return <Eat data={data} setData={setData} />;

			case '3':
				return <Diaper data={data} setData={setData} />;

			default:
				return <Eat data={data} setData={setData} />;
		}
	}

	return <div>{getForm(actionType)}</div>;
}
