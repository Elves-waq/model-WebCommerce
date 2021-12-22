import React,{useState} from "react";
import {PageRecoverArea,FormAreaContent} from './style';
import { PageContainer ,pageTitle } from "../../Components/MainComponents";


const RecoverAccount = () => {
    const [emailRecover,setEmailRecover] =useState('');

    const recoverAccountRequest = (e) => {
        e.preventDefault();

    }


    return (
       <PageContainer>
           <PageRecoverArea>
               <FormAreaContent>
                   <form onSubmit={recoverAccountRequest}>
                      <h3>Recorver your Account :</h3>
                      <label>
                          <legend>Send your email recover :</legend>
                          <input type="email" value={emailRecover} onChange={e=>setEmailRecover(e.target.value)}
                          placeholder="Email" />
                      </label>
                      <button className="button__recover">Send</button>

                   </form>              
               </FormAreaContent>
           </PageRecoverArea>
           
       </PageContainer>
    );

};


export default RecoverAccount;