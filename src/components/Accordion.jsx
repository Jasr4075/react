import { Accordion } from "react-bootstrap";

const AccordionComp =() => {
    return (
        <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>FAQ title</Accordion.Header>
            <Accordion.Body>
              FAQ
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>FAQ title</Accordion.Header>
            <Accordion.Body>
              FAQ
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>FAQ title</Accordion.Header>
            <Accordion.Body>
              FAQ
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>FAQ title</Accordion.Header>
            <Accordion.Body>
              FAQ
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    )
}

export default AccordionComp;