

import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {


  return (
    <div style={{ height: 440, width: "100%" }}>
      <DataGrid
        editMode="row"
        rows={rows}
        autoPageSize 
        columns={columns}
        checkboxSelection
        sx={{
          ".MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
          ".MuiDataGrid-cell--textCenter": { color: "lightGree" },
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
};

export default DataTable;