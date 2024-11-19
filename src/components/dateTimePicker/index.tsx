import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR } from '@mui/x-date-pickers/locales';

const DateTimePickerComponent = (props) => {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			localeText={
				ptBR.components.MuiLocalizationProvider.defaultProps?.localeText || {}
			}>
			<DateTimePicker {...props} />
		</LocalizationProvider>
	);
};

export default DateTimePickerComponent;
