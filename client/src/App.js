import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

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
    return (
      <Container>
        
      </Container>
    
    )
  }   
}
export default App;
