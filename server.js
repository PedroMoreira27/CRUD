const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://PedroMoreira27:Zubumafu%40123@crud.amjibhv.mongodb.net/';

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));