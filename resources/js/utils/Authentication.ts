import Auth from "@/commonTypes/Auth";

export default class Authentication
{
    public static isLogin(auth: Auth) {
        return Object.keys(auth.user).length !== 0;
    }
}