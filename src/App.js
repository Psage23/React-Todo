import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TaskList from './components/TodoComponents/TodoList';
import '../src/components/TodoComponents/Todo.css';

const tasks = [
  {
    task: "Laundry",
    id: 200,
    completed: false
  },
  {
    task: "Dishes",
    id: 300,
    completed: false
  },
  {
    task: "Soccer Practice",
    id: 400,
    completed: false
  },
  {
    task: "Oil Change",
    id: 500,
    completed: false
  },
  {
    task: "Dry Cleaning",
    id: 600,
    completed: false
  },
  {
    task: "School Play",
    id: 700,
    completed: false
  }

]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      list: ""
    };
  }

  addTask = newTitle => {
    const newTask = {
      task: newTitle,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTasks = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ tasks });
  };

  deleteItem = e => {
    e.preventDefault()
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({tasks})
}

// clearPurchase = event => {
//   event.preventDefault()
//   let todos = this.state.todos.filter(todo => !todo.completed);
//   this.setState({todos});
// };


  render() {
    console.log(tasks);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <div>
          <TaskList 
          toggleTasks={this.toggleTasks}
          tasks={this.state.tasks} />
        </div>
      </div>

    );
  }
}

export default App;
