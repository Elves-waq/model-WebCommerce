import styled from "styled-components";


export const PageRecoverArea = styled.div`
    max-width: 1000px;
    background: #1190ca;
    display: flex;
    justify-content: center;
    align-items: center;


`;

export const FormAreaContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    background-color: #fff;
    height: 300px;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #4E4E4E;
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        
        h3{       
            margin-bottom: 15px;
            justify-self: flex-start;
            align-self: flex-start;
            font-weight: 700;
            font-size: 23px;
            color: #1190ca;
        }
        label{
            legend{
                font-size: 14px;
                color: #1190ca;
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
                &::placeholder{
                    color: rgba(81,182,216, 0.5);
                    
                }
            }
            
        }
        .button__recover{
                padding: 7px 25px;
                margin-top: 10px;
                background-color: #1190ca;
                border:2px solid #51b6d8;
                border-radius: 8px;
                color: #FFF;
                cursor: pointer;
                &:hover{
                    border:2px solid #1190ca;
                    background-color: #51b6d8;
                }
            }
    }

    


`;