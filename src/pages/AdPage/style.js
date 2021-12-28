import styled from "styled-components";

export const FakeArea = styled.div`
    background-color: #ddd;
    height: ${props=> props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    background-color: #1190ca;
    padding: 15px;
    
    padding-top: 20px;
        .Adbox{
            padding: 5px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 4px #999;
            margin-bottom: 20px;
            

        }

        .leftSide{
            flex: 1;
            margin-right: 20px;

            .Adbox{
                display: flex;
                box-shadow:0px 0px 5px #51b6d8;
                
            }

            .left__Adimg{
                width: 320px;
                height: 320px;
                

                .each__slide img{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-size: cover;
                    border-radius: 5px;
                    height: 320px;
                   
                }

            }
            .left__AdInfo{
                flex: 1;
                margin-left: 20px;

                &--name{
                   margin-bottom: 10px;
                   h2{
                       color: #1190ca;
                       font-weight: 700;
                   }
                   small{
                           color: rgba(81,182,216,0.5);
                    }
                }
                &--description{
                    color: #51b6d8;

                    hr{
                        border-color: rgba(81,182,216,0.3);
                    }
                    small{
                           color: rgba(81,182,216,0.5);
                    }
                }
            }

        }
        .rightSide{
            width:250px;

            .price span {
                display: block;
                color: blue;
                font-size: 25px;
                font-weight: bold;
            }

            .contact__link{
                display: flex;
                justify-content: center;
                background-color: #fff;
                padding:5px 10px;
                text-decoration: none;
                font-weight: 600;
                border-radius: 5px;
                box-shadow:0px 0px 4px #51b6d8;
                &:hover{
                    color: rgba(81,182,216,0.3) ;
                } 


            }
            .createdBy{
                margin-top: 15px;
                display: flex;
                flex-direction: column;
                small{
                    margin-bottom: 10px;
                }
            }

        }

`;

export const OthersArea = styled.div`
  
    
    
    h2{
        font-size: 18px;
    }

    .list{
        display: flex;
        flex-wrap: wrap;
        .aditem{
            width: 25%;
        }

    }


`;

export const BreadChumb = styled.div`
        font-size: 13px;
        margin-top: 10px;
        margin-bottom: 10px;
        a{
            display: inline-block;
            margin: 0px 5px;
            text-decoration: underline;
            color: #51b6d8;

        }




`;