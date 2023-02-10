import {axiosService} from "./axios-services";
import {urls} from "../constans/urls";


const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'

const authServices = {
    login:(user)=>axiosService.post(urls.auth,user),

    setTokens:({accessToken,refreshToken}) =>{
        localStorage.setItem(_accessTokenKey,accessToken)
        localStorage.setItem(_refreshTokenKey,refreshToken)
    },
    deleteTokens:()=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessToken:()=>localStorage.getItem(_accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(_refreshTokenKey),
}

export {
    authServices
}