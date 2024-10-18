// HeaderTable.tsx
import React from 'react';

interface HeaderTableProps {
    headerNames: string[];
    handleHeader: (headerName: any) => void;
}

export const HeaderTable = ({ headerNames = [ ], handleHeader}:HeaderTableProps) => {
  return (
    <thead>
      <tr>
        {
            headerNames.map((headerName, index) => (
                <th key={index} onClick={()=>handleHeader(index)}>{headerName}</th>
            ))
        }
      </tr>
    </thead>
  );
};