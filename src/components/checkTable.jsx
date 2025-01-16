import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CheckTable = ({ headers, rows }) => {
    return (
        <Table striped bordered hover responsive data-aos="fade-up">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

CheckTable.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default CheckTable;
