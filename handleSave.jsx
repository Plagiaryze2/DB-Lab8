const handleSave = async () => {
    await fetch('http://localhost:5000/api/addExp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            UserID: 1,
            JobTitle: 'Software Engineer',
            CompanyName: 'Systems Ltd',
            YearsWorked: 2
        })
    });
};