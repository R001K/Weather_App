const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");
encodedParams.append("locationKey", "<REQUIRED>");

const api = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '885db02a00msh0dc480e086d57c6p167035jsn9894b4454845',
		'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
	},
	// body: encodedParams
};

fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));