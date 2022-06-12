import { Container } from './style';
import ReactDOM from 'react-dom';

const MyModal = ({ isOpen, close, children }) => isOpen ? ReactDOM.createPortal(
    <Container onClick={(e) => e.target === e.currentTarget && close()}>
        {children}
    </Container>
    , document.body) : null

export default MyModal
