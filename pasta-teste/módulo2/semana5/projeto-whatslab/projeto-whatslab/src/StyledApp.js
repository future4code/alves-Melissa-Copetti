import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 600px;
  height: 95vh;
  border: 1px solid black;
  border-radius:5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background:
radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),
radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),
radial-gradient(circle closest-side at 42% 22%, #d35 43%, rgba(221,51,85,0) 45%),
radial-gradient(circle closest-side at 58% 22%, #d35 43%, rgba(221,51,85,0) 45%),
radial-gradient(circle closest-side at 50% 35%, #d35 32%, rgba(221,51,85,0) 27%),

radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
radial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,
radial-gradient(circle closest-side at 40% 22%, #d35 40%, rgba(221,51,85,0) 45%) 52px 50px,
radial-gradient(circle closest-side at 60% 22%, #d35 40%, rgba(221,51,85,0) 45%) 48px 50px,
radial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 37%) 50px 50px;
background-color:#b03;
background-size:100px 100px;
  margin: 0 auto;
  overflow-y: scroll;
 &:-webkit-scrollbar-track {
    background-color: #232C3B;
}
&::-webkit-scrollbar {
    width: 15px;
    background: #211f1f;
}
&::-webkit-scrollbar-thumb {
    background:  #27ae60;
    border-radius: 15px;
}
`;

export const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;
