import React, { useEffect, useState } from "react";
import {useTable} from 'react-table'
import styled from 'styled-components'
import './pacientes.css'
import axios from 'axios';
import { FaTrashAlt, FaPencilAlt, FaNotesMedical } from 'react-icons/fa';

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for the table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function Pacientes() {
  const [books, setBooks] = useState([]); 
  const getAllBooks = async() => {
      const resp = await axios.get(`http://localhost:8080/api/books`, {mode: 'cors', credentials: 'include'});
      const newBooks = resp.data.map((book) => {
         return {...book, 'key': book._id, 'read': book.read ? 'Yes' : 'No'}
      })
      setBooks(newBooks);
  }
  useEffect(() =>{
      getAllBooks()
  }, [])


  function bookEdit(row) {
    console.log(row);
    // display modal
    // post request
  }   
  
  function bookDelete(rowID){
    axios.delete(`http://localhost:8080/api/books/${rowID}`, {mode: 'cors', credentials: 'include'});
  }

const columns = React.useMemo(
  () => [
    {
      Header: 'Author',
      accessor: 'author' //is like key in the another project we did in the class
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
    {
      Header: 'Genre',
      accessor: 'genre'
    },
    {
      Header: 'Read',
      accessor: 'read'
    },
    {
      width: 300,
      Header: "Editar",
      accessor: "...",
      Cell: ({ cell }) => (
        <>
        <button className="edit-button" title="Editar" onClick={() => bookEdit(cell.row.original)}>
          <FaPencilAlt/>
        </button>
        <button className="delete-button" title="Eliminar"  onClick={() => bookDelete(cell.row.original._id)}>
        <FaTrashAlt/>
        </button>
        </>
      )
    }
  ],
  []
)

return (
  <>
    <header>
      <h1>Pacientes</h1>
    </header>
    <div className="button-container">
    <button><FaNotesMedical/> Añadir pacientes</button>
    </div>
    <Styles>
    <Table columns={columns} data={books} />
  </Styles>
  
  </>
  
)
}


export default Pacientes






/* <header>
  <h1>Pacientes</h1>
  <Link to='/'>
  <button className="header-button">Añadir paciente</button>
  </Link>

</header>

<div className="container">
  <div className="Card">
    <div className="Card-header">Santiago Sanchez</div>
    <hr />
    <div className="Card-body">
      <ul>
        <li>Raza: Caniche</li>
        <li>Dueño: -</li>
        <li>Dueño Tel.: +543811234567</li>
      </ul>
    </div>
    <hr />
    <div className="Card-footer">
      <button className="Card-button">
        <AiIcons.AiOutlineSearch />Ver expediente</button>
    </div>
  </div>

</div> */