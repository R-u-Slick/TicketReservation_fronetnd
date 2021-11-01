import { DataGrid } from "@material-ui/data-grid";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const Schedule = ({ sessions, onRowSelect }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (sessions.length) {
      const rows = sessions.map((session) => {
        const totalSeats = session.hall.plan.reduce(
          (total, row) => total + row.length,
          0
        );
        const seatsReserved = session.orders.reduce((total, order) => {
          return (
            total +
            (order.status === "reserved" || order.status === "paid" ? 1 : 0)
          );
        }, 0);
        const seatsAvailable = totalSeats - seatsReserved;
        return {
          id: session._id,
          col1: session.cinema.name,
          col2: session.cinema.city.name,
          col3: session.film.name,
          col4: session.hall.name,
          col5: new Date(session.date),
          col6: new Date(session.date).toLocaleTimeString(),
          col7: seatsAvailable,
        };
      });
      setRows(rows);
    }
  }, [sessions]);

  const columns = [
    { field: "col1", headerName: "Theater name", flex: 1 },
    { field: "col2", headerName: "City", flex: 1 },
    { field: "col3", headerName: "Movie", flex: 1.2 },
    { field: "col4", headerName: "Hall", flex: 1 },
    { field: "col5", type: "date", headerName: "Date", flex: 1 },
    { field: "col6", type: "date", headerName: "Time", flex: 1 },
    { field: "col7", headerName: "Seats available", flex: 1 },
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            onSelectionModelChange={(newSelectionModel) => {
              onRowSelect(newSelectionModel[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

Schedule.defaultProps = {
  sessions: [],
  onRowSelect: () => {},
};

Schedule.propTypes = {
  sessions: PropTypes.array,
  onRowSelect: PropTypes.func,
};

export default Schedule;
