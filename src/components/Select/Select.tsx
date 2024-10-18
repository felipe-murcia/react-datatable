import Form from 'react-bootstrap/Form';

interface Props {
  label?: string | null;
  data: any[];
  onChange: (event: any) => void;
}
function SelectPage({ data, onChange, label = null }:Props) {
  return (
    <>
    {
        label && <Form.Label>{label}</Form.Label>
    }
        <Form.Select aria-label="Default select example" onChange={(e:any)=>onChange(e)}>
        {
            data.map((item, index) => (
            <option key={index} value={item}>{item}</option>
            ))
        }
        </Form.Select>
    </>
  );
}

export default SelectPage;