import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;


export const UserMenuTitle = styled.p`
margin-right: 16px;

font-size: 18px;
font-weight: bold;
padding: 10px 0;
`;

export const Btn = styled.button`
padding:10px;
font-size:16px;
border:none;
background-color: white;
:hover,:active{
    background-color: blue;
}
`;