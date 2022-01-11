import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox{
        background-color: #1190ca ;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1xp 0.3px rgba(0,0,0,0.2);
        display: flex;

        form{
            flex: 1;
            display: flex;

            input{
                flex: 1;
                padding: 0 10px;
                height: 30px;
                border: 0;
                border-radius:5px;
                outline: 0;
                margin-right: 25px;
                font-size: 14px;
                color:  #51b6d8;
                &::placeholder{
                    color: #51b6d8;
                }

            }
            button{
                padding: 7px 25px;
                background-color:#296292;
                border:2px solid #FFF;
                border-radius: 8px;
                color: #FFF;
                cursor: pointer;
                &:hover{
                    border:2px solid #FFF;
                    background-color:#51b6d8 ;
                } 
            }

        }

    }
    .categoryList{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem{
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #296292;
            text-decoration: none;
            &:hover{
                color: #51b6d8;
            }
            span{
                margin-left: 5px;
                text-shadow: 1px 1px 5px #999;
            }

        }
    }
 @media (max-width:600px){
     padding: 10px;
    .categoryList .categoryItem{
        width: 50%;
        margin-top: 5px;
    }

 }   
`;


export const PageArea = styled.div`
    h2{
        margin-bottom: 15px;
        margin-left: 25px;
        font-weight: 700;
        font-size: 25px;
        color: #1190ca;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        .aditem{
            width: 25%;
        }
    }
    .seeAllLink{
       color:#1190ca ;
       display: inline-block;
       margin-top: 20px;
       text-decoration: none;
       &:hover{
           color: #51b6df;
       }
    }
    hr{
        border-color: #1190ca;
    }
    p{
        color: rgba(17,144,202,0.5);
    }
@media (max-width: 600px) {
    .list .aditem{
        width: 100%;
    }
    .seeAllLink, p{
        margin-left: 10px;
    }
    
}

`;
