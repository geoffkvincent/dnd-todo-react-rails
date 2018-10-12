import React from 'react'
import styled from 'styled-components'
import Items from './Items'
import axios from 'axios'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px
  width: 220px;

  display: flex;
  flex-direction: column
`;

const Title = styled.h3`
  padding: 8px;
  background-color: lightgreen;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: 
  flex-grow: 1;
  min-height: 100px;
`;

class Lists extends React.Component {
  state = {items: []}

  componentDidMount() {
    const id = this.props.listId
    axios.get(`/api/lists/${id}/items`)
      .then (  res => this.setState({ items: res.data }) )
  }

  render() {
    const {items} = this.state
    const {list_name, listId} = this.props
    
    return (
      
      <Container >
        <Title >
          {list_name}
        </Title> 
        <Droppable droppableId={listId}>
          {provided => (
            <TaskList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >            
              {items.map((item, index) => (
                <Items key={item.id} item={item} index={index} getItemId={this.props.getItemId} />
              ))}
              {provided.placeholder}
            </TaskList>   
          )}  
        </Droppable>     
      </Container>    
    )
  }
}

export default Lists