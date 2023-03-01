import {axiosService} from "./axios-services";
import {urls} from "../constans/urls";
import {authServices} from "./auth-services";


const paidService = {
    getAll: (page = 1, name = '', email = '', age = '', course = '', status = '', course_format = '', course_type = '', order = '_id') => axiosService.get(urls.paid, {
        headers: {
            Authorization: `${authServices.getAccessToken()}`
        },
        params: {page, name, email, age, course, status, course_format, course_type, order}
    }),
    updateById: (id, user) => axiosService.put(`${urls.paid}/${id}`, user, {
        headers: {
            Authorization: `${authServices.getAccessToken()}`
        }
    }),
    getAdminUsers: () => axiosService.get(urls.admin,{
        headers: {
            Authorization: `${authServices.getAccessToken()}`
        }
    }),
    createUser:(user)=> axiosService.post(urls.create,user,{
        headers:{
            Authorization: `${authServices.getAccessToken()}`
        }
    }),
}


export {
    paidService
}