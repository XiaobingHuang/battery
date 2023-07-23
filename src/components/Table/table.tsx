import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

function Table() {
    const [rowData] = useState([
        { name: "Battery1", manufacturer: "BYD", grid: "ERCOT", state:"TX", utility:"CNP", loadZone:"HoustonZone" ,capacity:"100", cRating:"4C", opMode:"Charging", soc:"85%", soh:"99%", alert:"None", cycle:"200", life:"1",certification:"Yes" },
        { name: "Battery2", manufacturer: "CATL(NingDe)", grid: "PJM", state:"PA", utility:"PECO", loadZone:"PECO" ,capacity:"50", cRating:"3C", opMode:"Discharging", soc:"15%", soh:"95%", alert:"None", cycle:"300", life:"3",certification:"Yes" },
        { name: "Battery3", manufacturer: "Tesla", grid: "NYISO", state:"NY", utility:"NYSEG", loadZone:"ZoneF" ,capacity:"25", cRating:"4C", opMode:"IDLE", soc:"", soh:"90%", alert:"Yes", cycle:"500", life:"2",certification:"Yes" },
      ]);
    
      const [columnDefs] = useState([
        { field:"name", headerName: "Name", width:90 },
        { field:"manufacturer",  headerName: "Manufacturer",  width:130 },
        { field:"grid", headerName: "Grid",  width:80 },
        { field:"state", headerName: "State",  width:90 },
        { field: "utility", headerName: "Utility",  width:90 },
        { field:"loadZone", headerName: "Load Zone", width:110 },
        { field:"capacity", headerName: "Capacity", width:105 },
        { field:"cRating", headerName: "C Rating", width:105 },
        { field:"opMode", headerName: "OP Mode", width:105 },
        { field:"soc", headerName: "SOC", width:78 },
        { field:"soh", headerName: "SOH", width:78 },
        { field:"alert", headerName: "Alert", width:80 },
        { field:"cycle", headerName: "Cycle", width:85 },
        { field:"life", headerName: "Life", width:75 },
        { field:"certification", headerName: "Certifications", width:130 }
      ]);
    
      return (
        <div className="ag-theme-alpine" style={{ height: 700, width: "100%", padding:15 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      );
}

export default Table
