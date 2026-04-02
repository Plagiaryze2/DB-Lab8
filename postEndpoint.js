app.post('/api/addExp', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input('UserID', sql.Int, 1)
            .input('JobTitle', sql.VarChar, 'Software Engineer')
            .input('CompanyName', sql.VarChar, 'Systems Ltd')
            .input('YearsWorked', sql.Int, 2)
            .execute('sp_AddExperience');

        res.json({ success: true, message: 'Experience added!' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});