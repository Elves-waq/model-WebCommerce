import styled from "styled-components";



export const ContainerRegisterArea = styled.div`
    width: 100%;
    background-color: #51b6d8;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
`;

export const AreaRegister = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #FFF;
    max-width: 500px;
    height: 500px;
    border-radius: 30px;
    box-shadow:0px 0px 15px #4E4E4E ;

    .login__title{
        margin-top: -20px;
        margin-bottom: 10px;
        justify-self: flex-start;
        align-self: flex-start;
        margin-left: 25px;
        font-weight: 700;
        font-size: 23px;
        color: #1190ca;
    }

    form{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        a{  margin-bottom: 5px;
            color: #51b6d8;
            font-size: 12px;
        }
        .checkbox__area{
            width: auto;

        }
        .button__login{
            padding: 7px 25px;
            background-color: #1190ca;
            border:2px solid #51b6d8;
            border-radius: 8px;
            margin-top: 25px;
            margin-left: 100px;
            color: #FFF;
            cursor: pointer;
            &:hover{
                border:2px solid #1190ca;
                background-color: #51b6d8;
            }
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
            &::placeholder{
                color: rgba(81,182,216, 0.5);
                
            }
        }
        legend{
            margin-bottom: 5px;
            font-weight: 700;
            color: #1190ca;
        }
        p{
            font-size: 12px;
            color: #999;
        }
    }

`;

