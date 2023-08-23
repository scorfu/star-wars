import axios from 'axios';

export const fetchStarWars = async (type) => {
    switch (type) {
        case 'movies':
            try {
                const response = await axios.get('https://swapi.dev/api/films')
                return response.data.results
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
        case 'characters':
            try {
                const response = await axios.get('https://swapi.dev/api/people/')
                console.log(response.data);
                return response.data
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
    }
}

