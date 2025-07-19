import './App.css';
import Card from './card';
import data from './data';

function CreateCard(data){
  return<Card
        name={data.name}
        image={data.image}
        details={data.detail}
      />
}

function App() {
  return (
    <>
    <div id="space">
      {data.map(CreateCard)}
      </div>
    </>
  );
}

export default App;
