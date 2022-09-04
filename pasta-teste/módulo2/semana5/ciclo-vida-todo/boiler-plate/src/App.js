import React from 'react'
import styled from 'styled-components'
import { getEffectiveConstraintOfTypeParameter } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  cursor:pointer;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto:'Tarefa 1',
        completa:false
      },
    {
      id: Date.now(),
      texto:'tarefa 2',
      completa: true
    }],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
// localStorage.setItem("tarefas", JSON.stringify(lista))
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
this.setState({inputValue: event.target.value})
localStorage.setItem("tarefas", this.state.inputValue)
  }

  criaTarefa = () => {
const novaTarefa = {
  id: Date.now(),
        texto:this.state.inputValue,
        completa:false
}
const novaListaDeTrefas = [novaTarefa,...this.state.listaDeTarefas]

this.setState({listaDeTarefas:novaListaDeTrefas})
localStorage.setItem("lista", JSON.stringify(novaListaDeTrefas))

  }

criarLocalStorage = () => {
  let lista = localStorage.getItem("lista")
  const tarefaConvertida = JSON.parse(lista)

  tarefaConvertida && this.setState({tarefas: tarefaConvertida})
}

  selectTarefa = (listaId) => {


  }
  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input 
          value={this.state.inputValue} 
          onChange={this.onChangeInput}
          />
          <button onClick={this.criaTarefa}>Adicionar
          </button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
