import React from "react";
import DataTable from "./ui/dataTable";
import { getGoodsList, removeGoodsId } from "./api/apiGoods";
import NameForm from "./form/nameForm";
import { Button } from "@mui/material";
import BasicModal from "./ui/modal";
import { GridDeleteForeverIcon } from "@mui/x-data-grid";


const Goods = () => {

  const [error, setError] = React.useState("");
  const [goods, setGoods] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setError(""); // очистка ошибки при вторичной загрузке
    getGoodsList()
      .then((result) => {
        setGoods(result.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
 
   

  const rows = goods;
  const columns = [
    {
      field: "id",
      width: 125,
      headerName: "идентификатор",
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      width: 450,
      headerName: "Изделие",
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Количество",
      editable: true,
      width: 125,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "storageLocation",
      width: 450,
      headerName: "Место хранения",
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      editable: true,
      field: "actions",
      headerName: "Удалить",
      sortable: false,
      width: 100,
      align: "center",
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <GridDeleteForeverIcon
              index={params.row.id}
              onClick={async () => {
                const res = window.confirm("Вы уверены");
                if (!res) {
                  return false;
                }
                await removeGoodsId(params.row.id);
                setGoods((await getGoodsList()).data);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className={"goods"}>
       <Button onClick={handleOpen}>Добавить изделие</Button>
      <h3 style={{ width: "100%", textAlign: "center" }}>Список задач</h3>
      <DataTable rows={rows} columns={columns} />
      <BasicModal
        open={open}
        handleClose={handleClose}
        text={"Добавить пользователя"}
        children={<NameForm setGoods={setGoods} handleClose={handleClose} />}
      />
    </div>
  );
};

export default Goods;