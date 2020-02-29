import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://water-my-plants-bw.herokuapp.com/api",
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};

// https://cors-anywhere.herokuapp.com/