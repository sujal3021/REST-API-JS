const express=require('express');
const userRoutes = require("./Routes/userRoutes");
const mongoose=require('mongoose');
const cors=require('cors');
const Item=require('./models/Items');
const dotenv=require('dotenv');

dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);


mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


  app.get('/api/items', async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    });


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});