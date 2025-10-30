import ImageGallery from "react-image-gallery";
import { useState } from "react";
import data from './data.json';
import './App.css';

function App() {
  const collections = data.collections;
  const cats = data.categories;
  const [searchValue, setSearchValue] = useState('');
  const [categoruId, setCategoryId] = useState(0);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>

      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, index) => (
              <li
                className={categoruId === index ? 'active' : ''}
                key={index}
                onClick={() => setCategoryId(index)}
              >{obj.name}</li>
            ))
          }
        </ul>
      </div>

      <div className="search">
        <input type="search" className="search-input" placeholder="Поиск по названию" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </div>

      <div className="image-gallery-wrapper">
        {
          collections
          .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()) && (categoruId === obj.category || categoruId === 0))
          .map((obj, index) => (
            <div className="collection" key={index}>
              <h2>{obj.name}</h2>
              <ImageGallery items={obj.photos} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
