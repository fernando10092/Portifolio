import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BackProjetos, DivCard, Cards, CardImg, H1project } from './portifolio_styled';
import Lista from './lista';

function Projetos() {
    return (
        <>
            <BackProjetos>
                <H1project>Projects and Key Technologies Used</H1project>
                <DivCard>

                    {Lista.map((item) => (
                        <Card style={{ width: '18rem' }} as={Cards}>
                            <Card.Img as={CardImg} variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.subtitle}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush" >
                                <ListGroup.Item>{item.l1} <ProgressBar variant="success" now={item.perc1} striped animated /></ListGroup.Item>
                                <ListGroup.Item>{item.l2} <ProgressBar variant="info" now={item.perc2} striped animated /></ListGroup.Item>
                                <ListGroup.Item>{item.l3} <ProgressBar variant="warning" now={item.perc3} striped animated /></ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">{item.link}</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}
                </DivCard>

            </BackProjetos>



        </>
    );
}

export default Projetos;