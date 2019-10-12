const location = 'http://localhost:8083/';
const apiVersion1 = 'api/v1/';

const apiRoutes: {auth: {login: string}, member: {all: string}} = {
    auth: {
        login: location + apiVersion1 + 'auth/login'
    },
    member: {
        all: location + apiVersion1 + 'member'
    }
};

export default apiRoutes;
