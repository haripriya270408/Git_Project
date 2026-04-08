const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('Event Board API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
