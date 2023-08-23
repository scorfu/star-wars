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
                console.log(response.data);
                return response.data
            } catch (error) {
                console.error('Errrrr when fetching: ', error);
                throw error;
            }
            break;
    }
}

