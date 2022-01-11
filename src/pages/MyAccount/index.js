import React,{useState,useEffect} from "react";
import { PageContainer } from "../../Components/MainComponents";
import { AreaUser } from "./style";
import Api from "../../helpers/WebCommerceAPI";
import { doLogin } from "../../helpers/AuthHandler";




const MyAccount = () => {

    const api = Api();
    const [error,setError] = useState('');
    const [nameUser,setNameUser]=useState('');
    const [userEmail,setUserEmail]=useState('');
    const [userState,setUserState]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [token,setToken]=useState('');

    const getUserInfos = async () => {
        const json = await api.myAccount();
        setNameUser(json.name); 
        setUserEmail(json.email);
        setUserState(json.state);
        setToken(json.token)   
           
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       
        const json = await api.replaceMyAccountInfo(token,nameUser,userEmail ,userState,newPassword);

        
       
        if(json.error){
            setError(json.error);

        }else{
            doLogin(json.token);
            window.location.href = '/';
        }
    }
    useEffect(()=>{
        getUserInfos();
    },[])    

    return(
        <PageContainer>
            <AreaUser>
                <h2>Your data</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <legend>Name:</legend>
                        <input type="text" value={nameUser} onChange={e=>setNameUser(e.target.value)}/>  
                    </label>
                    <label>
                        <legend>Email:</legend>
                        <input type="email" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>  
                    </label>
                    <label>
                        <legend>State:</legend>
                        <input type="text" value={userState} onChange={e=>setUserState(e.target.value)}/>  
                    </label>
                    <label>
                        <legend>Change password:</legend>
                        <input type="password" value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>  
                    </label>

                    <button>Save editions</button>


                </form>
            </AreaUser>
        </PageContainer>  

    );


}


export default MyAccount;