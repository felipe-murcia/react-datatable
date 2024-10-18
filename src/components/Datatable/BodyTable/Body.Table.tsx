// HeaderTable.tsx

import { IPerson } from "../../../interfaces/Person";

 

interface Props {
    data: IPerson[];
}

export const BodyTable = ({ data = [ ]}:Props) => {
  return (
    <tbody>
        {
            data.map((person:IPerson, index) =>{
                return( 
                <tr>
                    <td>{person.name}</td> 
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                    <td>{person.address}</td>
                </tr>
                )
            })
        }
      </tbody>
  );
};