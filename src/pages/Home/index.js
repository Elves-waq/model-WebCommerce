import React,{useState} from "react"
import { PageArea , SearchArea} from "./style";
import { ErrorMessage } from "../../Components/MainComponents";
import { Link } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import Api from "../../helpers/WebCommerceAPI";


const Home = () => {
  

  return (
        <>
            <SearchArea>
                <PageContainer>
                    
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>     
  );    
};
export default Home;
