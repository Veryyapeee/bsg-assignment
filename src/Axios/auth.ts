import { request } from 'Axios/axios';
import { AnonymData, LoginData, UserData } from 'Utils/types';

const Auth = {
    login: (loginData: LoginData = AnonymData) => request.post<UserData>('/Authorization/SignIn', loginData)
}

export default Auth;