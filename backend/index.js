import express from 'express';
import cors from 'cors';
import { getTabledata, insertData, deleteData, updateData, getdata, getRowdata} from './database.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/givedata', async (req, res) => {
  const rows = await getTabledata();
  res.send(rows);
});

app.get('/givedata/:id', async (req, res) => {
  const id = req.params.id;
  const rows = await getRowdata(id);
  res.send(rows[0]);
});

app.get('/givedata/singleuser', async (req, res) => {
  try{
    const {username, password} = req.body;
    const respond = await getdata(username, password);
    res.send(respond[0].username);
  }catch (error) {
    res.status(500).send(error);  
  }
});

app.post('/getdata', async (req, res) => {
  try{
    const {username, password} = req.body;
    await insertData(username, password);
    res.send(`Data received your name: ${username} and password: ${password}`);
  }catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/deletedata', async (req, res) => {
  try{
    const {username, password} = req.body;
    await deleteData(username, password);
    res.send(`Data deleted your username: ${username} and password: ${password}`);
  }catch (error) {
    res.status(500).send(error);
  }
});

app.put('/updatedata', async (req, res) => {
  try{
    const {username, password} = req.body;
      const respond = await updateData(username, password);
      try{
        if(respond[0].affectedRows === 0){
          res.send(`Data not found with username: ${username}`);
        }
        res.send(`Data updated your username: ${username} and password: ${password}`);
      }catch (error) {
        res.status(500).send(error);
      }
  }catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 