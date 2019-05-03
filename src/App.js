import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
          id: 1,
          title: 'take out the trash',
          completed: false
        },
        {
          id: 2,
          title: 'go out to eat',
                    completed: false
        },
        {
          id: 3,
          title: 'gargle',
          completed: false
        },
        {
          id: 4,
          title: 'gargle',
          completed: false
        }
                ] 
                  
              }               
      render()  {        
         return (
          <div className="App">        
          <Todos  todos={this.state.todos} />    
            </div>
            );

}
}
export default App;
