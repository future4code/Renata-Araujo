import styled from "styled-components";
import Conversa from './Components/Conversa'

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 110%;
  display: flex;
  flex-direction: column;
   
`
const ContainerInterno = styled.div`
  flex: 110%;
  display: flex;
  flex-direction: column;
  -moz-box-pack: end;
  justify-content: flex-end;
`

function App() {
  return (
    <Container>
      <ContainerInterno>
          <Conversa/>
      </ContainerInterno>     
    </Container>
  );
}

export default App;