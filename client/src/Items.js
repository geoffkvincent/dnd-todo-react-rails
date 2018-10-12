import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;



class Items extends React.Component {

  setId = () => {
    debugger
  this.props.getItemId(this.props.item.id)
  }

  render() {
    
    return (  
      <Draggable disableInteractiveElementBlocking={true} onClick={this.setId} draggableId={this.props.item.id} index={this.props.index}> 
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.item.name}
          </Container>  
        )}
      </Draggable>   
    );
  }
}

export default Items