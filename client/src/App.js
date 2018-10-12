import React from 'react';
import styled from 'styled-components'
import {DragDropContext} from 'react-beautiful-dnd'
import axios from 'axios'
import Lists from './Lists'

const Container = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = { lists: [] };

  componentDidMount() {
    axios.get('/api/lists')
      .then( ({data: lists}) => this.setState({lists}) )           
  }

  onDragEnd = result => {
    
  }
  
  render() { 
    const {lists} = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {lists.map(list =>
              <Lists key={list.id} list_name={list.name} listId={list.id} ></Lists>
            )
          }
        </Container>
      </DragDropContext>
    )
  }   
}
export default App;
