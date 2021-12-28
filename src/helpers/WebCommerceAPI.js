import Cookies from "js-cookie";
import qs from 'qs';
import { isLogged } from "./AuthHandler";

const BASEAPI = 'http://alunos.b7web.com.br:501';

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
    register:async (name,state,email,password)=> {
        const json = await apiFetchPost(
            'user/signup',
            {name,state, email ,password}
        );

        return json;
    },

    getCategories:async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.categories;
    }
    ,
    getAds: async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );
        return json;
    },
    getAd : async (id, other = false) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id,other}
        );
        return json;

    }

};

export default ()=>WebCommerceAPI;