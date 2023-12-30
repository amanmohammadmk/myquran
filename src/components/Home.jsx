import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Nav, Row } from 'react-bootstrap';
import './home.css';





function Home() {
    return (
        <div>
            <div className='main'>
                <div className='container'>
                    <Navbar className="bg-body-tertiary rounded" expand="lg" style={{ marginTop: '20px' }}>
                        <Container>
                            <Navbar.Brand href="#home">
                                <div className='d-flex gap-2'>
                                    <h3 className='text-info'>Quran</h3>
                                    <h3>.com</h3>
                                </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarResponsive" />
                            <Navbar.Collapse id="navbarResponsive" className='me-5 justify-content-end'>
                                <Nav className="ml-auto">
                                    <Nav.Link href="#read">Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <Nav.Link href="#more"><Link style={{ textDecoration: "none" }} to={'/ayah'}>Ayahs</Link></Nav.Link>
                                    <Nav.Link ><Link style={{ textDecoration: "none" }} to={'/juz'}>Juz</Link></Nav.Link>
                                    <Nav.Link ><Link style={{ textDecoration: "none" }} to={'/voice'}>Voice</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className='second d-flex justify-content-center align-items-center flex-column'>

                <div className='s-one container bg-white p-3 rounded shadow-lg mt-4 position-absolute justify-content-center align-items-center'>
                    <Container >
                        <Row>
                            <Col className="left p-4  d-flex justify-content-center" xs={12} md={6}>
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/021/601/313/small/a-man-reading-a-quran-in-black-and-white-a-background-for-ramadan-social-media-posts-muslim-holy-month-ramadan-kareem-ramadan-mubarak-beautiful-greeting-card-photo.jpg"
                                    width={400}
                                    height={300}
                                    alt=""
                                    className='rounded'
                                />
                            </Col>
                            <Col className="right d-flex justify-content-center flex-column" xs={12} md={4}>
                                <div className='d-flex gap-2'>
                                    <h1>About </h1>
                                    <h1 className='text-info'>Quran</h1>
                                    <h1>.com</h1>
                                </div>
                                <p> This website offers a user-friendly interface that allows visitors to read, listen, and explore the teachings of the Quran in a convenient and immersive manner. Whether you are a student of Islamic studies, a researcher, or simply someone seeking spiritual guidance, our site offers a comprehensive collection of Quranic verses, translations, and interpretations.</p>
                                <Link to={'/edition'}> <button className='btn btn-info'>Read Now </button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className='s-two container bg-white rounded shadow-lg mt-4 position-absolute justify-content-center align-items-center'>
                    <Container>
                        <Row className="align-items-center">
                            <Col className="right ms-3" xs={12} md={4}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h1 className="mb-2">More</h1>
                                    <ul className="list-unstyled">
                                        <li>Total chapters(suras): 114</li>
                                        <li>Total verses: 6,236 excluding Bismillah and 6348 including Bismillah</li>
                                        <li>1924 Cairo edition of the Qur'an by Muhammad Asad</li>
                                        <li>English & Arabic</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col className="left p-4 d-flex justify-content-center" xs={12} md={6}>
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/01/14/20/21/islam-6938153_640.jpg"
                                    width={400}
                                    height={300}
                                    alt=""
                                    className="rounded ml-auto"
                                />
                            </Col>
                        </Row>
                    </Container>


                </div>

                <div className='third p-5 rounded container d-flex bg-white shadow-lg'>

                    <div className='item d-flex flex-column align-items-center m-5'>
                        <Link style={{ textDecoration: "none", color: "black" }} className='d-flex flex-column gap-3 align-items-center' to={'/edition'}>
                            <img src="https://png.pngtree.com/png-vector/20220105/ourlarge/pngtree-child-reading-the-quran-png-png-image_4237210.png" width={150} height={150} alt="" />
                            <h2 id='read' className='text-danger '> Read</h2>
                        </Link>
                    </div>

                    <div className='item d-flex flex-column align-items-center gap-1 m-5'>
                        <Link to={'/search'} style={{ textDecoration: "none", color: "black" }} className='d-flex flex-column gap-3 align-items-center' >
                            <img src="https://m.clearquran.com/quran-in-english-logo-2.png" width={150} height={150} alt="" />
                            <h2 className='text-danger'>Translation</h2>
                        </Link>
                    </div>

                    {/* New items added below */}
                    <div className='item d-flex flex-column align-items-center gap-1 m-5'>
                        <Link to={'/voice'} style={{ textDecoration: "none", color: "black" }} className='d-flex flex-column gap-3 align-items-center' >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DUjUiLray0VQGgbNBZ8WXpLrZYl-_zqk2A&usqp=CAU" width={150} height={150} alt="" />
                            <h2 className='text-danger'>Audio</h2>
                        </Link>
                    </div>

                    <div className='item d-flex flex-column align-items-center gap-1 m-5'>
                        <Link to={'/search'} style={{ textDecoration: "none", color: "black" }} className='d-flex flex-column gap-3 align-items-center' >
                            <img src="https://play-lh.googleusercontent.com/QLbK0Aqi1wnxAxLcbIzcMfEzkRrdWOuGt4EdOLft1uzPJntoeOkj08uQ5Q22m8He0U5C" width={150} height={150} alt="" />
                            <h2 className='text-danger'>Download</h2>
                        </Link>
                    </div>

                </div>



                <div className='fourth'>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Developer Information</h3>
                                <p>Aman Mohammad Mk.</p>
                                <p>amanmohammadmk@gmail.com</p>
                            </div>
                            <div className="col-md-6">
                                <h3>API Information</h3>
                                <p>https://alquran.cloud/api</p>
                            </div>
                        </div>
                    </div>
                </div>





            </div>



        </div>
    )
}

export default Home