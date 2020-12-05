import logo from './logo.svg';
import './App.css';

function Card(props) {
  return (
    <div className="card">
      <img src={"./img/" + props.imgUrl} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Card name="Bill Mahoney" title="Product owner" imgUrl="photo1.png" />
      <Card name="Saba Cabrera" title="Art director" imgUrl="photo2.png" />
      <Card name="Shae Le" title="Tech Lead" imgUrl="photo3.png" />
      <Card name="Skylah Lu" title="UX Designer" imgUrl="photo4.png" />
      <Card name="Griff Richards" title="Developer" imgUrl="photo5.png" />
      <Card name="Stan John" title="Developer" imgUrl="photo6.png" />
    </div>
  );
}

export default App;
