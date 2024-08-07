import React from "react";

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <table style={{ border: "2px solid #4CAF50", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key} style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>{header.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {headers.map((header) => (
            <td key={header.key} style={{ border: "1px solid #ddd", padding: "8px" }}>{row[header.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default SortableTable;
