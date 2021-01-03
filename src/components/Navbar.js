import {Navbar, Nav, Button} from 'react-bootstrap'


function NavigationBar(props){
    return (
    <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="http://localhost:3001/" id="nav-brand">Empowerment</Navbar.Brand>
        <Nav className="justify-content-end" >
            <Nav.Link href="http://localhost:3001/" id="nav-text" >Home</Nav.Link>
            <Nav.Link href="http://localhost:3001/goals" id="nav-text" >Goals</Nav.Link>
            <Nav.Link href="http://localhost:3001/products" id="nav-text" >Reward Store</Nav.Link>
            <Nav.Link href="http://localhost:3001/profile" id="nav-text" >Profile</Nav.Link>
            <Button inline  onClick={props.logout} id="nav-logout">Logout</Button>
        </Nav>
    </Navbar>
    )
}

export default NavigationBar;