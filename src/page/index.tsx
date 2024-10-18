import React, { useContext } from "react";
import "./index.css";
import Datatable from "../components/Datatable/Datatable";
import { dataPersons } from "../utils/dataPersons";
import { Container, Row, Col } from "react-bootstrap";
import { Info } from "../components/Info/Info";

function Index() {
  return (
    <div className="App">
    
      <main>
        <div className="container py-4">

          <Info />

          <hr/>

          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid ">
              <Datatable
                headerNames={["Fullname", "Email", "Phone", "Address"]}
                keyNames={["name", "email", "phone", "address"]}
                data={dataPersons}
              />
            </div>
          </div>

          <footer className="pt-3 mt-4 text-body-secondary border-top">
            © 2024 Developed by Felipe Murcia
          </footer>
        </div>
      </main>
 
    </div>
  );
}

export default Index;
