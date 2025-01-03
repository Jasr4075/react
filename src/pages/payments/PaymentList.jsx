import styled from 'styled-components';
import { FaCreditCard, FaMoneyBillWave, FaBarcode, FaUniversity, FaBitcoin } from 'react-icons/fa';

const paymentMethods = [
    { id: 1, name: 'Cartao de credito/debito', icon: <FaCreditCard /> },
    { id: 2, name: 'Pix', icon: <FaMoneyBillWave /> },
    { id: 3, name: 'Boleto', icon: <FaBarcode /> },
    { id: 4, name: 'Transferencia bancaria', icon: <FaUniversity /> },
    { id: 5, name: 'Criptomoeda', icon: <FaBitcoin /> },
];

const Container = styled.div`
    margin-top: 60px;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.span`
    margin-right: 10px;
`;

const PaymentList = () => {
    return (
        <Container>
            <Title>PaymentList</Title>
            <List>
                {paymentMethods.map(method => (
                    <ListItem key={method.id}>
                        <IconWrapper>{method.icon}</IconWrapper>
                        {method.name}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default PaymentList;