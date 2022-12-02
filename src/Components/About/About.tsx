import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axios-api";
import {Information} from "../../types";

const About = () => {
	const [info, setInfo] = useState<Information>({
		desc: ''
	})

	const [spinner, setSpinner] = useState(true)

	const getInfo = useCallback(async () => {
		try {
			const response = await AxiosApi.get<Information>('/about.json');
			if (response.data !== null) {
				setInfo(response.data);
			}
		} finally {
			setSpinner(false);
		}
	}, []);

	useEffect(() => {
		getInfo().catch(console.error)
	}, [getInfo])

	return (
		<div className='container'>
			{spinner ? (<div className="spinner-border text-primary" role="status">
			</div>) :
				(<>
				<p> {info.desc} </p>
			</>)}
		</div>
	);
};

export default About;