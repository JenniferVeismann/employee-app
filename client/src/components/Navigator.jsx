import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import '../index.css';

function Navigator() {
  return (
<Container fluid="md">
    <Row className="navibar">
    <Col>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/"><svg className='Logo' width="132" height="37" viewBox="0 0 132 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.2219 10.0085C26.5338 10.0085 27.5973 8.94791 27.5973 7.6396C27.5973 6.33129 26.5338 5.27069 25.2219 5.27069C23.91 5.27069 22.8466 6.33129 22.8466 7.6396C22.8466 8.94791 23.91 10.0085 25.2219 10.0085Z" fill="#017737"/>
<path d="M27.3552 11.1945H23.0906V25.7863H27.3552V11.1945Z" fill="#017737"/>
<path d="M93.8509 10.0085C95.1628 10.0085 96.2263 8.94791 96.2263 7.6396C96.2263 6.33129 95.1628 5.27069 93.8509 5.27069C92.5391 5.27069 91.4756 6.33129 91.4756 7.6396C91.4756 8.94791 92.5391 10.0085 93.8509 10.0085Z" fill="#017737"/>
<path d="M95.9842 11.1945H91.7196V25.7863H95.9842V11.1945Z" fill="#017737"/>
<path d="M126.997 18.0097C126.997 13.8447 123.668 10.8741 119.667 10.8741C115.169 10.8741 111.898 13.9906 111.898 18.4761C111.898 22.9039 114.965 26.0782 119.667 26.0782C123.668 26.0782 126.325 23.6028 126.822 20.8647H122.704C122.236 22.059 120.863 22.7291 119.579 22.7291C117.855 22.7002 116.571 21.6807 116.191 19.4668H126.968L126.997 18.0097ZM116.278 16.8154C116.746 14.6607 118.352 14.1364 119.665 14.1364C121.009 14.1364 122.586 14.8065 122.79 16.8154H116.278Z" fill="#017737"/>
<path d="M108.744 11.1945H113.124L107.166 25.7863H102.669L96.7103 11.1945H101.296L105.005 20.8633L108.744 11.1945Z" fill="#017737"/>
<path d="M85.2918 13.5251C86.2851 11.9813 87.8621 10.9906 89.6723 10.9906C89.9938 10.9906 90.4022 11.0195 90.6657 11.1075V15.0978C90.3152 15.0399 89.9358 15.011 89.5853 15.011C86.8398 15.011 85.409 17.0213 85.409 19.9039V25.7874H81.1748V15.0399C81.1748 14.8074 81.0865 14.7483 80.8243 14.7483H79.3633V11.1956H83.0429C84.5329 11.1956 85.2918 11.8945 85.2918 13.2058V13.5251Z" fill="#017737"/>
<path d="M78.6033 22.2322C78.3701 22.2322 78.3108 22.1744 78.3108 21.9406V7.37895C78.3108 5.92319 77.552 5.25311 76.004 5.25311H72.2953V8.77691H73.6681C73.9303 8.77691 74.0186 8.86362 74.0186 9.09749V12.5346C73.4639 11.8067 71.9159 10.8738 69.8423 10.8738C65.7239 10.8738 62.7162 13.9903 62.7162 18.4759C62.7162 23.0481 65.608 26.0779 69.725 26.0779C72.0319 26.0779 73.6681 24.9125 74.2807 23.9521C74.3387 24.5933 74.7774 25.7876 76.3544 25.7876H80.1223V22.2349H78.6033V22.2322ZM70.6011 22.5817C68.5564 22.5817 67.0677 21.009 67.0677 18.4746C67.0677 16.0571 68.5867 14.4265 70.6301 14.4265C72.9369 14.4265 74.1055 16.4657 74.1055 18.4457C74.1055 21.5333 72.2374 22.5817 70.6011 22.5817Z" fill="#017737"/>
<path d="M61.7813 18.0097C61.7813 13.8447 58.4521 10.8741 54.451 10.8741C49.9532 10.8741 46.682 13.9906 46.682 18.4761C46.682 22.9039 49.749 26.0782 54.451 26.0782C58.4521 26.0782 61.1094 23.6028 61.606 20.8647H57.4877C57.02 22.059 55.6472 22.7291 54.3627 22.7291C52.6395 22.7002 51.355 21.6807 50.9756 19.4668H61.7523L61.7813 18.0097ZM51.0638 16.8154C51.5315 14.6607 53.1375 14.1364 54.451 14.1364C55.7948 14.1364 57.3718 14.8065 57.576 16.8154H51.0638Z" fill="#017737"/>
<path d="M38.8557 10.8741C36.4606 10.8741 34.7663 12.1262 34.1247 13.2036C34.0075 12.5913 33.5991 11.1934 31.9641 11.1934H28.4017V14.7474H29.8615C30.1236 14.7474 30.1829 14.8052 30.1829 15.039V31.7567H34.4475V25.2912L34.4185 24.2427C35.0311 25.2623 36.6674 26.0782 38.6528 26.0782C42.8291 26.0782 45.7499 22.9906 45.7499 18.4761C45.7472 13.9315 42.9727 10.8741 38.8557 10.8741ZM37.7741 22.582C35.4672 22.582 34.3566 20.5139 34.3566 18.5339C34.3566 15.5055 36.1971 14.4268 37.832 14.4268C39.8174 14.4268 41.3944 16.0875 41.3944 18.5037C41.3957 21.3588 39.4683 22.582 37.7741 22.582Z" fill="#017737"/>
<path d="M22.0912 18.4763C22.0912 22.9908 19.1704 26.0784 14.9941 26.0784C13.0087 26.0784 11.3724 25.2625 10.7598 24.2429L10.7888 25.2914V31.7569H6.52555V15.0393C6.52555 14.8067 6.46758 14.7476 6.20409 14.7476H4.74304V11.1949H8.30674C9.94169 11.1949 10.3514 12.5928 10.4673 13.2051C11.1103 12.1277 12.8032 10.8756 15.1983 10.8756C19.3166 10.8743 22.0912 13.9317 22.0912 18.4763ZM17.7397 18.5052C17.7397 16.0877 16.1627 14.4283 14.176 14.4283C12.541 14.4283 10.7005 15.5057 10.7005 18.5355C10.7005 20.5155 11.8098 22.5835 14.118 22.5835C15.8122 22.5822 17.7397 21.359 17.7397 18.5052Z" fill="#017737"/>
</svg>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="employees">Employees</Nav.Link>
            <Nav.Link href="tribes">Tribes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Col>
    </Row>
    </Container>
  );
}

export default Navigator;