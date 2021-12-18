import Cookies from "js-cookie";
import qs from 'qs';
import { isLogged } from "./AuthHandler";

const BASEAPI = 'https://jsonplaceholder.typicode.com/posts';

const apiFetchPost = async (endpoint,body)=> {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const response = await fetch(BASEAPI+endpoint,{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const json = await response.json();

    if(json.notallowed){
        window.location.href= '/singin';
        return;
    }

    return json;
};


const apiFetchGet = async (endpoint,body = [])=> {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const response = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`)
    const json = await response.json();

    if(json.notallowed){
        window.location.href= '/singin';
        return;
    }

    return json;
};


const WebCommerceAPI = {

    login:async (email,password)=>{
        const json = await  apiFetchPost(
            '/user/signin',
            {email,password}
            
            );

          return json;  

    },
    register:async (name,email,password)=> {
        const json = await apiFetchPost(
            'user/signup',
            {name, email ,password}
        );

        return json;
    }

};

export default ()=>WebCommerceAPI;