import { Accordion } from "react-bootstrap";

const faqs = [
  { title: "FAQ title 1", body: "FAQ 1" },
  { title: "FAQ title 2", body: "FAQ 2" },
  { title: "FAQ title 3", body: "FAQ 3" },
  { title: "FAQ title 4", body: "FAQ 4" },
];

const AccordionComp = () => {
  return (
    <div>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.title}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComp;
