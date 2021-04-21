import TreeView from './components/TreeView';

const nodes = [{
  id: 'root',
  label: 'Parent',
  children: [
    {
      id: '1',
      label: 'Child - 1',
    },
    {
      id: '2',
      label: 'Child - 2',
      children: [
        {
          id: '3',
          label: 'Child - 3',
        },
      ],
    },
  ],
}];

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{marginTop: '50px', border: '1px solid black', width: '200px', height: '200px'}}>
        <TreeView nodes={nodes}></TreeView>
      </div>
    </div>
  );
}

export default App;
