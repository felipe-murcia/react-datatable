import Table from 'react-bootstrap/Table';
import { HeaderTable } from './HeaderTable/HeaderTable';
import { BodyTable } from './BodyTable/Body.Table';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import SelectPage from '../Select/Select';
import { Col, Row } from 'react-bootstrap';
import TextInput from '../TextInput/TextInput';

interface DatatableProps {
    headerNames: string[];
    keyNames: string[];
    data: any[];
}

function Datatable( props: DatatableProps ) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);    
    const [search, setSearch] = useState("");
    const [orderKey, setOrderKey] = useState<string|null>(null);

    // Filtrar los datos basados en el valor de búsqueda
    const filteredData = props.data.filter(item =>
        Object.values(item).some(val =>
        String(val).toLowerCase().includes(search.toLowerCase())
        )
    ); 
    
    // Ordenar los datos basados en la clave de ordenación
    const sortedData = orderKey
        ? [...filteredData].sort((a, b) => {
            if (a[orderKey] < b[orderKey]) return -1;
            if (a[orderKey] > b[orderKey]) return 1;
            return 0;
        })
        : filteredData;

    // Calcular los datos que se deben mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  
    // Calcular el número total de páginas
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  
    // Crear botones de paginación
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
          {number}
        </Pagination.Item>
      );
    }

    // Función para cambiar la clave de ordenación
    const handleSort = (key: number) => {
        setOrderKey(props.keyNames[key]);
    };
    
    return (
        <div>
            <Row>
                <Col>
                    <SelectPage label={"Por pagina"} data={[5, 10, 15, 20]} onChange={(e:any) => setItemsPerPage(e.target.value)} />
                </Col>
                <Col></Col>
                <Col>
                    <TextInput label={"Buscar"} placeholder={"Buscar"} value={search} onChange={(e:any) => setSearch(e.target.value)} />
                </Col>
            </Row>

            <br/>
            
            <Table striped bordered hover>
                <HeaderTable headerNames={props.headerNames} handleHeader={(index)=>handleSort(index)}/>
                <BodyTable data={currentData} />
            </Table>
            <Pagination>{paginationItems}</Pagination>
        </div>
    );
}

export default Datatable;