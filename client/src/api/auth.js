import axios from 'axios';

export const Register = async (data) => {

    const config = {
        headers: {'Content-Type':'application/json'}
    };

    const response = await axios.post('api/auth/signup', data, config);

    return response; 
};