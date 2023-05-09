import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 8, 7),
      title: 'Maxident',
      cost: 25,
      tag: 'album',
    },
    {
      date: new Date(2023, 0, 15),
      title: 'Brand New',
      cost: 18,
      tag: 'album',
    },
    {
      date: new Date(2023, 2, 14),
      title: 'Pizza',
      cost: 2,
      tag: 'food',
    },
    {
      date: new Date(2023, 2, 14),
      title: 'Temptation',
      cost: 22,
      tag: 'album',
    }
  ]


  return (
    <div>
      <h1>wasted</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;

