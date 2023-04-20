const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.port || 5000;
app.use(express.json());

// Routes
const adRoute = require('./routes/ads');
const companyRoute = require('./routes/companies');

// DataBase connection
const db = require('./utils/db');

// Ad Route
app.use('/api/ad', adRoute);

// Company Route
app.use('/api/company', companyRoute);

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});
