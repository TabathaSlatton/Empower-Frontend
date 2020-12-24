import {Navbar, Nav} from 'react-bootstrap'


function NavigationBar(){
    return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#">EMPOWERMENT</Navbar.Brand>
        <Nav className="justify-content-end">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Goals</Nav.Link>
            <Nav.Link href="#">Reward Store</Nav.Link>
            <Nav.Link href="#">Groups</Nav.Link>
            <Nav.Link href="#">Chat</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
        </Nav>
        {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
    )
}

export default NavigationBar;