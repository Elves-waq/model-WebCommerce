import React,{useState} from "react"
import { ContainerLoginArea, AreaLogin } from "./styled";
import { ErrorMessage } from "../../Components/MainComponents";
import { Link } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import Api from "../../helpers/WebCommerceAPI";
import { doLogin } from "../../helpers/AuthHandler";

const SingIn = () => {
    const useApi =Api();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rememberPassword,setRememberPassword] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [error,setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        const json = await useApi.login(email,password);

        if(json.error){
            setError(json.error);

        }else{
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
        setDisabled(false);
    };


  return (
    <PageContainer>
        <ContainerLoginArea>
          
        <AreaLogin>
        
            <h3 className="login__title">Access your account:</h3>
                {error &&
                   <ErrorMessage>{error}</ErrorMessage> 

                } 
                <form onSubmit={handleSubmit}>
                
                <label>
                    <legend className="login__text">Login:</legend>
                    <input type="email" name="email"  placeholder="email" disabled={disabled}
                    value={email} onChange={e =>setEmail(e.target.value)} required />
                </label>
                <label>
                    <legend className="login__text">Password:</legend>
                    <input type="password" name="email" placeholder="password" disabled={disabled} 
                    value={password} onChange={e=>setPassword(e.target.value)}  required />
                </label>
                <Link to="/recoverpassword">
                    <span>Forgot your password ?</span>
                </Link>
                <label>
                <p>remember me:
                    <input type="checkbox" name="remember" disabled={disabled} className="checkbox__area"
                    checked={rememberPassword} onChange={()=>setRememberPassword(!rememberPassword)} />
                </p>
                </label>
                <label>
                <button  className="button__login" disabled={disabled}>Login</button>
                </label>
            
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">
                        <span>Register.</span>
                    </Link>
                </p>
            </form>
        </AreaLogin>
         
     </ContainerLoginArea>
    </PageContainer>
  );
};
export default SingIn;
