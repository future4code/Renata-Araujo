import React from "react";
import styled from "styled-components";

const InserirDados = styled.div`
  display: flex;
  justify-content: space-between;
 
`
const Usuario = styled.input`
  width: 100px;
  
`
const Mensagem = styled.input`
  width: 440px;
`
const Botao = styled.button`

`

export class DadosConversa extends React.Component {
    state = {
        inputUsuario: '',        
        inputMensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }

    render(){
        return (
          <InserirDados>
            <Usuario type="text" placeholder="Usuário" value={this.state.inputUsuarionputUsuario} onChange={this.onChangeUsuario}/>
            <Mensagem type="text" placeholder="Mensagem" value={this.state.inputMensagem} onChange={this.onChangeMensagem}/>
            <Botao>Enviar</Botao>
          </InserirDados>
        )

    }
}
export default DadosConversa;