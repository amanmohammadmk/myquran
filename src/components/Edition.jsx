import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Edition() {
    const [surahsData, setSurahsData] = useState(null);
    const [aya, setAya] = useState()

    useEffect(() => {
        const fetchEditionData = async () => {
            try {
                const response = await fetch('http://api.alquran.cloud/v1/quran/en.asad');
                const data = await response.json();
                console.log(data);

                // Extract Surahs data from the edition data
                if (data && data.data && data.data.surahs) {
                    setSurahsData(data.data.surahs);
                    console.log(data);
                }

                if (data && data.data && data.data.surahs && data.data.surahs.ayahs) {
                    setAya(data.data.surahs.ayahs);
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching edition data:', error);
            }
        };

        fetchEditionData();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div className=''>
            <div style={{ width: "100%", height: "auto" }} className='bg-info p-3 text-white' >
                <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>
                    <h2 style={{ textDecoration: "none", color: "white" }}>Quran.com</h2>
                </Link>
            </div>

            <div className='container p-3 mt-4'>
                <h1>Get Your Surah</h1>
                <p> Where you can discover the profound verses of the Holy Quran. Here, you'll find a comprehensive list of all Surahs. Click the "Read" button next to each Surah to explore in-depth insights, translations, and additional details. We invite you to embark on a spiritual journey, gaining wisdom and guidance from the sacred text of the Quran.</p>
            </div>
            {surahsData ? (
                <div className='container'>
                    <Row>
                        {surahsData.map((surah) => (
                            <Col className='m-4' key={surah.number}>
                                <Card className='shadow-lg bg-white' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" />

                                    <Card.Body className='bg-white rounded'>
                                        <Card.Title className='bg-white'>{surah.number} : {surah.name}</Card.Title>
                                        <Card.Text className='bg-white'>
                                            <strong className='bg-white'>{surah.englishName}</strong>
                                        </Card.Text>
                                        <Card.Text className='bg-white'>
                                            Means: {surah.englishNameTranslation}
                                        </Card.Text>



                                        {/* Use Link to navigate to the 'More' component with the corresponding ayahs as URL parameter */}
                                        <Link to={`/ayahs/${surah.number}-${encodeURIComponent(surah.name)}`}>
                                            <Button variant="primary">More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <h1 className='m-5 d-flex justify-content-center align-items-center text-center'>Loading Surahs data...</h1>
            )}
        </div>
    );
}

export default Edition;
