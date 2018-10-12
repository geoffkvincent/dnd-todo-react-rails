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
  
  getItemId = (id) => {
    debugger
  this.setState({item_id: id})
  }
  

  onDragEnd = result => {
    const{ destination, source, draggableId } = result;
 
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    
    const itemId = this.state.item_id
    const list = this.state.lists[source.droppableId]
    const newItemIds = Array.from(list.itemId)
    newItemIds.splice(source.index, 1)
    newItemIds.splice(destination.index, 0, draggableId)

    const newList = {
      ...list,
      itemIds: newItemIds
    }

    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newList.id]: newList,
      },
    }
    this.setState(newState)
  }
  
  render() { 
    const {lists} = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {lists.map(list =>
              <Lists key={list.id} list_name={list.name} listId={list.id} getItemId={this.getItemId} />
            )
          }
        </Container>
      </DragDropContext>
    )
  }   
}
export default App;
