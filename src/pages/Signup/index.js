import React,{useState , useEffect} from "react"
import { ErrorMessage } from "../../Components/MainComponents";
import { Link } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import { ContainerRegisterArea ,AreaRegister } from "./style";
import Api from "../../helpers/WebCommerceAPI";
import { doLogin } from "../../helpers/AuthHandler";

const SingUp = () => {
    const useApi =Api();
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const [disabled,setDisabled] = useState(false);
    const [state,setState ] = useState('')
    const [error,setError] = useState('');

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== ConfirmPassword ){
            setError('password fields do not match')
            setDisabled(false);
            return;
            
        }
       
      
        const json = await useApi.register(name ,state, email , password);
       
        if(json.error){
            setError(json.error);

        }else{
            doLogin(json.token);
            window.location.href = '/';
        }
        setDisabled(false);
    };


  return (
    <PageContainer>
        <ContainerRegisterArea>
          
        <AreaRegister>
        
            <h3 className="login__title">Register:</h3>
                {error &&
                   <ErrorMessage>{error}</ErrorMessage> 

                } 
                <form onSubmit={handleSubmit}>
                <label>
                    <legend className="login__text">Full name:</legend>
                    <input type="text" name="name"  placeholder="name" disabled={disabled}
                    value={name} onChange={e =>setName(e.target.value)} required />
                </label>
                <label>
                    <legend className="login__text">State:</legend>
                    <input type="text" name="state"  placeholder="state" disabled={disabled}
                    value={state} onChange={e =>setState(e.target.value)} required />
                </label>   
                
                <label>
                    <legend className="login__text">Email:</legend>
                    <input type="email" name="email"  placeholder="email" disabled={disabled}
                    value={email} onChange={e =>setEmail(e.target.value)} required />
                </label>
                <label>
                    <legend className="login__text">Password:</legend>
                    <input type="password" name="password" placeholder="password" disabled={disabled} 
                    value={password} onChange={e=>setPassword(e.target.value)}  required />
                </label>
                <label>
                    <legend className="login__text">Confirm password:</legend>
                    <input type="password" name="email" placeholder="password" disabled={disabled} 
                    value={ConfirmPassword} onChange={e=>setConfirmPassword(e.target.value)}  required />
                </label>
                <label>
                    <button  className="button__login" disabled={disabled}>Register</button>
                </label>
            
               
            </form>
        </AreaRegister>
         
     </ContainerRegisterArea>
    </PageContainer>
  );
};
export default SingUp;
