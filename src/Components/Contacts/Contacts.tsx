import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axios-api";
import {ContactsInfo} from "../../types";

const Contacts = () => {
	const [spinner, setSpinner] = useState(true)

	const [info, setInfo] = useState<ContactsInfo>({
		email: '',
		adress: '',
		skype: '',
		tel: '',
	})

	const getInfo = useCallback(async () => {
		try {
			const response = await AxiosApi.get<ContactsInfo>('/contacts.json');
			if (response.data !== null) {
				setInfo(response.data);
			}
		} finally {
			setSpinner(false)
		}
	}, []);

	useEffect(() => {
		getInfo().catch(console.error)
	}, [getInfo])

	return (
		<div className='container'>
			{spinner ? (<div className="spinner-border text-primary" role="status">
			</div>) : (<>
					<p>Adress: {info.adress} </p>
					<p>Tel. num : {info.tel} </p>
					<p>Skype: {info.skype}</p>
					<p>E-Mail: {info.email}</p></>
			)}


		</div>

	);
};

export default Contacts;