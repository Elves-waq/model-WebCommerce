import styled from "styled-components";

export const Item = styled.div`
    a{
        display: block;
        border: 1px solid #FFF;
        background-color: #FFF;
        text-decoration: none;
        box-shadow: 1px 1px 10px rgba(0,0,0,0.8);
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        transition: all ease .4s;
        &:hover{
            border: 1px solid #1190ca;
            background-color: #b8ecff;
        }

        .itemImage img{
            width: 100%;
            border-radius: 10px;
        }

        .itemName{
            color: #296292;
            font-weight: 700;
        }

    }


`;