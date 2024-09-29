"use client";
import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoIcon from "@mui/icons-material/Info";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";
import axios from "axios";

const Row = ({ rowData, index, handleChange, removeRow }) => {
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        <img src="/move.svg" alt="move" />
      </TableCell>
      <TableCell>
        <TextField
          fullWidth
          name="title"
          value={rowData.title}
          onChange={(e) => handleChange(e, rowData.id)}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => removeRow(rowData.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const AddProperty = () => {
  const baseUrl = "http://localhost:3001/properties";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(baseUrl);
      setData(res.data);
    };
    fetchData();
  }, []);

  const handleChange = async (event, id) => {
    const { name, value } = event.target;
    const res = await axios.put(`${baseUrl}/${id}`, { title: value });
    setData(res.data);
  };

  const addRow = async () => {
    const res = await axios.post(baseUrl, { title: "" });
    setData(res.data);
  };

  const removeRow = async (id) => {
    const res = await axios.delete(`${baseUrl}/${id}`);
    setData(res.data);
  };

  return (
    <div className="px-[30px] md:px-[150px]">
      <TableContainer component={Paper}>
        <div className="flex flex-row justify-between p-5">
          <div className="text-[20px] font-semibold text-[#7261FF]">
            Property highlights <InfoIcon />
          </div>
          <div
            className="h-[39px] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#7261FF] text-white font-medium px-5"
            onClick={addRow}
          >
            + Add Highlight
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data.map((row, index) => (
              <Row
                key={index}
                rowData={row}
                index={index}
                handleChange={handleChange}
                removeRow={removeRow}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AddProperty;
