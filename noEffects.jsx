import React, { useState, useEffect } from 'react';

function ExperienceLoader() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/getExp/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setExperience(data.data);
            });
    }, []);

    return (
        <ul>
            {experience.map((job) => (
                <li key={job.ExpID}>{job.JobTitle} at {job.CompanyName}</li>
            ))}
        </ul>
    );
}

export default ExperienceLoader;