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
        { field: "Name" },
        { field: "Manufacturer" },
        { field: "Grid" },
        { field: "State" },
        { field: "Utility" },
        { field: "Load Zone" },
        { field: "Capacity" },
        { field: "C Rating" },
        { field: "OP Mode" },
        { field: "SOC" },
        { field: "SOH" },
        { field: "Alert" },
        { field: "Cycle" },
        { field: "Life" },
        { field: "Certification" }
      ]);
    
      return (
        <div className="ag-theme-alpine" style={{ height: 800, width: "100%", padding:15 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      );
}

export default Table
