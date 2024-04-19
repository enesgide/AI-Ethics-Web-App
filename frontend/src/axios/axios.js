import axios from 'axios'
import base from './base'

const api = option => {
    console.log("option", option);
    const url = base.getRequestURL(option.url);

    // binary file check
    const isBlob = option.isBlob;
    const responseType = isBlob ? "blob" : "json";

    const req = {
        method: option.method,
        callbackFn: (option.data && option.data.fn) || null,
        callbackErrFn: (option.data && option.data.errorFn) || null,
    };

    option.data && option.data.fn && delete option.data.fn;
    option.data && option.data.errorFn && delete option.data.errorFn;

    let reqData = option.data || {};

    //GET
    if(req.method.toLowerCase() === "get") {
        req.params = reqData;
    }

    // POST && PUT
    else if(req.method.toLowerCase() === "post" || req.method.toLowerCase() === "put"){
        if(option.isFormData){
            req.data = reqData.formData;
        }
        else{
            // Objects for parameter types (including arrays)
            for(const key in reqData){
                if (typeof reqData[key] === "object" && !reqData[key] instanceof Array){
                    reqData[key] = JSON.stringify(reqData[key]);
                }
            }
            req.data = reqData;
        } 
    }

    console.log("url:", url);
    console.log("req:", req);
    console.log("responseType:", responseType);
    console.log(option.token);
    let token = (option.token != undefined || option.token != null) ? option.token.token : null;
    console.log(token);
    return axios({
        method: req.method,
        url: url,
        data: req.data,
        params: req.params,
        responseType,
        headers:token==null?null:{"Authorization": `Bearer ${token}`},
    })
        .then(res => {
            console.log("res",res);
            const response = res.data;
            if(isBlob){
                return response;
            }
            if(res.error){
                let errmsg = res.errmsg;
                req.callbackErrFn(errmsg);
            }
            req.callbackFn && req.callbackFn(response);
            Promise.resolve(response);
            return response;
        })
        .catch(error => {
            let res = error.response;
            console.log(error);
            try{
                switch(res.status){
                    case 401:
                        console.log('Not logged in or token expired');
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('userType');
                        break;
                    case 403:
                        console.log('You do not have permission');
                        break;
                    case 404:
                        console.log('API not found');
                        break;
                    case 500:
                        console.log('Server Error');
                        break;
                }
            }catch(error){

            }
            throw error.message;
        });

};

export default api;