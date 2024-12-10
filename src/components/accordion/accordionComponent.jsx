import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionComponent =() => {
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

export default AccordionComponent;