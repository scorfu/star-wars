import axios from 'axios';

export const fetchStarWars = async (type, url) => {
    switch (type) {
        case 'movies':
            try {
                const response = await axios.get(url)
                return response.data.results
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'characters':
            try {
                const response = await axios.get(url)
                return response.data
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'species':
            try {
                const response = await axios.get(url);
                return response.data.results
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'planets':
            try {
                const response = await axios.get(url);
                return response.data.results
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'starships':
            try {
                const response = await axios.get(url);
                return response.data.results
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'vehicles':
            try {
                const response = await axios.get(url);
                return response.data
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
    }
}

export const fetchUser = async (type, url, options) => {
    switch (type) {
        case 'sign':
            const { enteredEmail, enteredPassword } = options;
            try {
                const response = await axios.post(url, {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                return response
            } catch (error) {
                throw error;
            }
            break;
        case 'passwordChange':
            const { token, enteredNewPassword } = options;
            try {
                const response = await axios.post(url, {
                    idToken: token,
                    password: enteredNewPassword,
                    returnSecureToken: false
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                return response
            } catch (error) {
                throw error;
            }
            break;
    }
}

export const fetchFavorites = async (type, url, options) => {

    switch (type) {
        case 'getNotes':
            try {
                const response = await axios.get(url);
                return response;
            } catch (error) {
                console.error('Unable to fetch the firbase note: ', error);
                throw error;
            }
            break;
        case 'postNotes':
            const { summary, description, ps } = options;
            try {
                const response = await axios.post(url, {
                    summary,
                    description,
                    ps
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                return response
            } catch (error) {
                throw error;
            }
            break;
        case 'deleteNotes':
            try {
                const respone = await axios.delete(url);
                return respone;
            } catch (error) {
                throw error;
            }
    }
}
