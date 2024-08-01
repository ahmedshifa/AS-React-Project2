import axios from 'axios';

async function login(username, password) {
    try {
        const response = await axios.post('/login', {
            username,
            password,
        });
        const token = response.data.token;
        // Save the token to local storage
        localStorage.setItem('token', token);
    } catch (error) {
        console.error(error);
    }
}



export { login };
