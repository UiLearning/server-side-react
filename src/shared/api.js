import fetch from 'isomorphic-fetch';

export function fetchData(req) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const encodedURI = encodeURI(baseUrl + '/data.json');
    console.log("*************", encodedURI);
    return fetch(encodedURI)
        .then((data) => data.json())
        .catch((error) => {
            console.warn(error)
            return null
        });
}