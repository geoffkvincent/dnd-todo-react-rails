import React from 'react';
import styled from 'styled-components'
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
  

  render() { 
    const {lists} = this.state
    return (
      <Container>
        {lists.map(list =>
            <Lists key={list.id} list_name={list.name} ></Lists>
          )
        }
      </Container>
    
    )
  }   
}
export default App;
