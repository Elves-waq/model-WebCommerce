import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;
    
    a{
        text-decoration: none;
    }

    .container{
        max-width: 1000px;
        width:100%;
        height: 30px;
        margin: auto;
        display: flex;
    }
    .logo {
        flex: 1;
        display: flex;
        align-items: center;
       img{
           object-fit: cover;
       } 
    }
    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul,li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul{
            display: flex;
            align-items: center;
            height: 40px;
        }

        li{
            margin-left: 20px;
            margin-right: 20px;

            a, button{
                border: 0;
                background: none;
                color: #000;
                font-size: 14px;
                text-decoration: none;
                cursor: pointer;

                &:hover{
                    color: #999;
                }
                &.button{
                    background-color:#1190ca ;
                    color: #FFF;
                    padding: 5px 10px;
                    border-radius: 8px;

                    &:hover{
                        background-color:#51b6d8 ;
                    }
                }
            }
        }

    }
`;