import React from "react";
import { AgGridReact } from  'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export const Table = () => {
  
    const data = [
        { name:'Don', age:20 },
        { name:'Max', age:23 },
        { name:'David', age:26 },
        { name:'Tony', age:23 },
        { name:'Allen', age:23 },
    ]

    const column = [
        { headerName:'Name',field:'name' },
        { headerName:'Age' ,field:'age'}
    ]

    const defaultColDef = {
        sortable:true, editable:true, filter:true, floatingFilter:true, flex:1  
    }
    
    let gridApi;
    const onGridReady = (params) => {
        gridApi = params.api
    }

    const onExportClick = () => {
        gridApi.exportDataAsCsv();
    }
    return (
        <div>
          {/* Function To Export Grid In Excel  */}
          <button onClick={()=>onExportClick()}>Export</button>
          <div className="ag-theme-alpine" style={{width:'100%',height:'300px'}}>
          <AgGridReact
           rowData = {data}
           columnDefs = {column}
           defaultColDef = {defaultColDef}
           onGridReady = {onGridReady}   
          />
          </div>
        </div>
    )
}