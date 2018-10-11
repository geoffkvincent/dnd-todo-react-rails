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
        {this.state.columnOrder.map((columnId, index) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          
          
        })}
      </Container>
    
    )
  }   
}
export default App;
