import './App.css';
import Nav from './Nav';
import Header from './Header';
import data from './db.json';
import Articles from './Articles';
import Footer from './Footer';


function App(props) {
  let {text, slogan, copy} = props;
  let db = data.people;
  

  return (
    <div className="App">
      <Header text={text} slogan={slogan} />
      <Nav navigation={props.navigation} />
      <Articles db={db} />
      <Footer copyright={copy} />
    </div>
  );
}

export default App;
