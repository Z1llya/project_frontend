import {axiosService} from "./axios-services";
import {urls} from "../constans/urls";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'
const _userDataKey = 'user'

const authServices = {
    login:(user)=>axiosService.post(urls.auth,user),

    setTokens:({accessToken,refreshToken,user}) =>{
        localStorage.setItem(_accessTokenKey,accessToken)
        localStorage.setItem(_refreshTokenKey,refreshToken)
        localStorage.setItem(_userDataKey,JSON.stringify(user.profile))
    },
    deleteTokens:()=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessToken:()=>localStorage.getItem(_accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(_refreshTokenKey),
    getUserData:()=>localStorage.getItem(_userDataKey),
}

export {
    authServices
}