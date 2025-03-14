import { ContainerLoad} from "./load_styled";
import Spinner from 'react-bootstrap/Spinner';

const Load = () => {
    return (
        <>
            <ContainerLoad>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </ContainerLoad>
        </>
    )
}

export default Load;