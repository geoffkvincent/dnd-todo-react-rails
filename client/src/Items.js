import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: 
`;



class Items extends React.Component {
  render() {
    return (     
      <Container>
        {this.props.item.name}
      </Container>   
    );
  }
}

export default Items