import styled from "styled-components";


export const AreaUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    background-color: #FFF;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 40px;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        
        label{
            margin-bottom: 5px;
        }
        input{
            color: #1190ca;
            outline-style: none;
            margin-bottom: 5px;
            width: 200px;
            padding: 5px;
            border:2px solid #1190ca  ;
            border-radius: 8px;
            &:focus{
                border-color: #51b6d8;
            }
        }
        button{
            padding: 7px 25px;
            background-color: #1190ca;
            border:2px solid #51b6d8;
            border-radius: 8px;
            margin-top: 25px;
            color: #FFF;
            cursor: pointer;
            &:hover{
                border:2px solid #1190ca;
                background-color: #51b6d8;
            }
        }
    }



`;
