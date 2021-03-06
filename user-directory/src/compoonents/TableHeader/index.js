import React, { useState} from "react";
import TableData from "../TableData";


function TableHeader(props) {
    const  employees  = props.employees;
    
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    if (employees !== null) {

        employees.sort((a, b) => {

            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }

            if (b[sortConfig.key] > a[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }

            return 0;
        });
    }

    const reqSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    return (
        <tbody>
            <tr>
                <th key="ID" style={{fontFamily: "Times New Roman, Times, serif"}} onClick={() => reqSort('id')}>ID</th>
                <th key="NAME" style={{fontFamily: "Times New Roman, Times, serif"}} onClick={() => reqSort('name')}>NAME</th>
                <th key="DEPARTMENT" style={{fontFamily: "Times New Roman, Times, serif"}} onClick={() => reqSort('department')}>DEPARTMENT</th>
                <th key="EMAIL" style={{fontFamily: "Times New Roman, Times, serif"}} onClick={() => reqSort('email')}>EMAIL</th>
            </tr>
            <TableData employees={employees} />
        </tbody>
    );
}

export default TableHeader;