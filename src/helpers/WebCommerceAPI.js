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
            'Accept':'application/json',
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

const apiFetchFile = async (endpoint,body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.append('token',token);
        }
    }

    const response = await fetch(BASEAPI + endpoint,{
       method:'POST',
       body:body 
    })
    const json = await response.json();

    if(json.notallowed){
        window.location.href= '/singin';
        return;
    }

    return json;

}

const apiFetchPut =async (endpoint ,body) =>{
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const response = await fetch(BASEAPI+endpoint,{
        method: 'PUT',
        headers:{
            'Accept':'application/json',
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


}

const WebCommerceAPI = {

    login:async (email,password)=>{
        const json = await  apiFetchPost(
            '/user/signin',
            {email,password}
            
            );

          return json;  

    },
    getStates: async () => {
       const json = await apiFetchGet(
           '/states'
       );  
       
       return json.states;

    } 
    ,
    register:async (name,email,password,state)=> {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email ,password ,state}
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

    },
    addAd : async (fData) => {
        const json = await apiFetchFile(
            '/ad/add',
            fData            
        );
        return json;
    },
    myAccount: async (token)=>{
        const json = await apiFetchGet(
            '/user/me',
            token
        );
        return json;
    },
    replaceMyAccountInfo: async (token,name,email,state,password)=>{
        const json = await apiFetchPut(
            '/user/me',
            {token,name,email,state,password}
        );
        return json;

    }

};

export default ()=>WebCommerceAPI;