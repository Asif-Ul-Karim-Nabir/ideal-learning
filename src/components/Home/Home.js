import React, { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import HomeCourse from '../HomeCourse/HomeCourse';
import './Home.css'

const Home = () => {
    const history = useHistory();
    const [homeCourses, setHomeCourses] = useState([])
    useEffect( () => {
        fetch('./home.json')
        .then( res => res.json())
        .then(data => setHomeCourses(data))
    },[])
    const handleLearnMoreClick = () =>{
        history.push('./courses')
    }
    return (
        <div className="bg-light">
            <Container>
                <h2 className="w-50 mx-auto pt-5 fs-1 text-info">Best online courses to achieve your goals</h2>
                <p className="w-50 mx-auto mt-4 pb-3">If you’re new to online learning and not sure where to start, you’re not alone. We’ve curated a free collection of courses for professionals. Take one of these courses and learn new skills (on us).</p>
                <Button onClick={handleLearnMoreClick} className="mb-5" variant="outline-info">All Courses</Button>{' '}
                <h2 className="mb-5 text-info">Our Services</h2>
                <div className="home-courses">         
                    {
                        homeCourses.map(homeCourse => <HomeCourse
                                key={homeCourse.key}
                                homeCourse={homeCourse}
                                ></HomeCourse>)
                    }
                </div>           
        </Container>
        </div>
    );
};

export default Home;