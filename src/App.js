import './App.css';
import { CustomCell } from './CustomCell';
import { Table } from './Table';


function App() {
  return (
    <div className="App">
     <h1>AgGridReact</h1>
     {/* Simple AgGrid Table  */}
     {/* <Table/>  */}
     {/* Custom CellRenderer */}
     <CustomCell/>
    </div>
  );
}

export default App;
