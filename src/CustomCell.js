import React from "react";
import { AgGridReact } from  'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export function CustomCell(){

    const columnDefs= [
        { headerName: "Make",  field: "make"  },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" },
        { headerName: "Action",field: "action",
          cellRenderer:(params)=><div>
            <button>Click Me</button>
          </div>
        }
        
    ]

    const rowData= [
        { make: "Toyota", model: "Celica", price: 35000 }, 
        { make: "Ford", model: "Mondeo", price: 32000 }, 
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]
    
    return(

        <div className="ag-theme-alpine" style={ {height: '200px'} }>
         <AgGridReact
         columnDefs={columnDefs}
         rowData={rowData}
         defaultColDef={{flex:1}}
         />
        </div>
      )
}