import {axiosService} from "./axios-services";
import {urls} from "../constans/urls";
import {authServices} from "./auth-services";


const paidService = {
    getAll:(page=1,name='',email='',age='',course='',status='',course_format='',course_type='') => axiosService.get(urls.paid,{
        headers:{
            Authorization:`${authServices.getAccessToken()}`
        },
        params:{page,name,email,age,course,status,course_format,course_type,}
        // order
        // order='_id'
    })
}
export {
    paidService
}