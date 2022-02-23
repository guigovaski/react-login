import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // fake user data
        return { 
            user: { id: 3, name: 'Gui', email: 'gui@contato.com' }
        }
        const res = await api.post('/validate', { token })
        return res.data;
    },
    signin: async (email: string, password: string) => {
        // fake api
        return {
            user: {id : 23, name: 'Gui', email: 'gui@contato.com'},
            token: '123456789'
        }
        const res = await api.post('/signin', { email, password })
        return res.data;
    },
    signout: async () => {
        // fake logout
        return { status: true }
        const res = await api.post('/logout');
        return res.data;
    }
})