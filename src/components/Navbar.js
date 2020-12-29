import {Navbar, Nav} from 'react-bootstrap'


function NavigationBar(){
    return (
    <Navbar sticky="top" id="navbar">
    {/* style={{ backgroundColor: "red"}} */}
        <Navbar.Brand href="#" id="nav-brand">Empowerment</Navbar.Brand>
        <Nav className="justify-content-end" >
            <Nav.Link href="#" id="nav-text" >Home</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Goals</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Reward Store</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Groups</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Chat</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Resources</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default NavigationBar;