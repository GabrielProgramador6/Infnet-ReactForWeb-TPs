function dateTimeConverter(dateTime) {
	if (!dateTime) return '';

	try {
		const newDateTime = new Date(dateTime);

		// Verificações adicionais de validade da data
		if (isNaN(newDateTime.getTime())) {
			return '';
		}

		const formater = new Intl.DateTimeFormat('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});

		return formater.format(newDateTime);
	} catch (error) {
		console.error('Erro na conversão de data:', error);
		return '';
	}
}

export { dateTimeConverter };
