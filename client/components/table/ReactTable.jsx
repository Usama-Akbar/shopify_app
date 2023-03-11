import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "./table.css";
import { getTableCell } from "./getTableCell";
import { useNavigate } from "raviger";

const columns = [
  { id: "name", label: "Name" },
  { id: "emailSubject", label: "Email Subject" },
  {
    id: "language",
    label: "Language",
    color: "#C0C0C0",
  },
  {
    id: "emailType",
    label: "Email Type",
    color: "#6434F8",
  },
  {
    id: "time",
    label: "Time",
  },
];

function ReactTable({ data = [], height = "80vh" }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/edit-template");
  }
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        style={{
          overflow: "scroll",
          display: "flex",
          height,
        }}
      >
        <Table size="small" sx={{ padding: 0, margin: 0 }}>
          <TableBody>
            {data.map((row) => {
              return (
                <div hover tabIndex={1} key={row.code} className="table-row">
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <div
                        key={column.id}
                        className="table-column"
                        style={{
                          "&:last-child td, &:last-child th": {
                            justifyContent: "flex-end",
                          },
                        }}
                      >
                        {getTableCell(column, index, value, handleNavigate)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ReactTable;
