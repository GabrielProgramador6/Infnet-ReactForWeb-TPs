import { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Context = createContext(null);

export function ContextProvider({ children }) {
	const { t: translate, i18n } = useTranslation();

	const [data, setData] = useState(null);
	const [babyInfo, setBabyInfo] = useState({
		days: 0,
		name: '',
		weigth: 0,
		heigth: 0,
	});

	function changeLanguage(lang) {
		i18n.changeLanguage(lang);
		localStorage.setItem('language', lang);
	}

	const sharedValue = {
		translate,
		data,
		setData,
		babyInfo,
		setBabyInfo,
		changeLanguage,
		i18n,
	};

	useEffect(() => {
		const storeLanguage = localStorage.getItem('language');

		if (storeLanguage) {
			changeLanguage(storeLanguage);
		} else {
			const navLang = navigator.language.split('-')[0];
			changeLanguage(navLang);
		}
	}, []);

	return <Context.Provider value={sharedValue}>{children}</Context.Provider>;
}

export function useContextProvider() {
	const context = useContext(Context);

	if (!context) throw new Error('Error no context!');

	return context;
}
