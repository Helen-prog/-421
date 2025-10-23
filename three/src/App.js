import './App.css';
import React from 'react';
// import Hello from './Hello';
// import Length from './Length';
// import Form from './Form';
// import Range from './Range';
import Posts from './Posts';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    
    this.state = {
      posts: [
        { id: '1', name: "JS Basics", title: "Обучение базовым констркукциям JavaScript" },
        { id: '2', name: "JS Advanset", title: "Обучение расширенным возможностям JavaScript" },
        { id: '3', name: "React JS", title: "Обучение React JS" }
      ]
    }
  }

  componentDidMount(){
    console.log("componentDidMount");    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");    
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");    
  }

  removePost = (id) => {
    this.setState({ posts: this.state.posts.filter(post => post.id !== id) })
    console.log("removePost");
    
  }

  render() {
    let { posts } = this.state;
    console.log("Render");
    

    return (
      <div className="App">
        {
          console.log("Return")
          
        }
        <Posts posts={posts} removePost={this.removePost} />
        {/* <Hello />
        <Length />
        <Form />
        <Range /> */}
      </div>
    );
  }
}

export default App;
