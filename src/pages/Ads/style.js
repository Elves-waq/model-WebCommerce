import styled from "styled-components";


export const PageArea = styled.div`
    display: flex;
    
    .leftSide{
        width: 250px;
        margin-right: 10px;
        background-color: rgba(81,182,216, 0.4);
        padding: 10px;

        .filter__title{
            font-weight: bold;
            font-size: 15px;
            margin: 10px 0 ;
        }
        input{
            border:2px solid #1190ca;
            outline: none;
            width: 100%;
            border-radius: 5px;
            padding: 5px;
            ::placeholder{
                color: rgba(81,182,216, 0.5);
            }
        }
        ul , li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .categoryItem{
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            
            img{
                width: 30px;
                height: 30px;
                margin-right: 10px;
                object-fit: cover;
            }
            span{
                font-size: 14px;
                font-weight: bold;
            }
        }
        .categoryItem:hover ,
        .categoryItem.active{
                background-color:#51b6d8;
                
        }

    }
    .rightSide {
        flex: 1;

        h2{
            margin-top: 0;
            
        }
        .listWarning{
            padding: 30px;
            text-align: center;

        }
        .list{
            display: flex;
            flex-wrap: wrap;

            .aditem{
                width: 33%;
            }

        }
        .pagination{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            .pagItem{
                width: 25px;
                height: 25px;
                font-size: 12px;
                border:1px solid #1190ca ;
                border-radius: 5px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 3px;
                margin-top: 3px;
                margin-bottom: 5px;
                &:hover{
                    background-color: #51b6d8;
                }
                &.active{
                    background-color: #51b6d8;
                }
            }
        }

    }
@media (max-width:600px){
    &{
        flex-direction:column;
    }
    .leftSide{
        width: 100%;
         input{
            font-size: 16px;
            padding: 10px;
        }
        .categoryItem img{
            width: 40px;
            height: 40px;
        }
        .categoryItem span{
          font-size:15px;
          font-weight: bold;
        }
        
    }
    .rightSide{
        h2{
            margin-top: 10px;
            margin-left: 10px;
        }
        .list .aditem{
            width: 100%;
        }

    }
}
`;
