import React from 'react';

function ExperienceTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {data.map((job) => (
                    <tr key={job.ExpID}>
                        <td>{job.JobTitle}</td>
                        <td>{job.CompanyName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExperienceTable;