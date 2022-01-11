import styled from "styled-components";

export const ContainerAdArea = styled.div`
    width: 100%;
    background-color: #1190ca;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;


`;

export const AreaProduct = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #FFF;
    max-width: 600px;
    height: 600px;
    border-radius: 30px;
    box-shadow:0px 0px 15px #4E4E4E ;

    .ad__title{
        
        margin-bottom: 15px;
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
        
        .button__Add{
            padding: 7px 25px;
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
        input, textarea , select{
            color: #1190ca;
            outline-style: none;
            margin-bottom: 5px;
            width: 300px;
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
        .price__negotiable{
            display: flex;
            input{
                width: 20px;
            }
        }
        textarea{
            height: 150px;
            resize: none;            
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
