const express = require("express")
const app = express();
const path = require('path');
const fs = require('fs/promises');

function getCompletePath(dirName){
  return path.join(__dirname, dirName);
}

app.use(express.static(getCompletePath('public')))
app.use(express.json())


async function writeToFile(data){
  const randomFileID = (Math.random() * 100000).toString(16).replace('.', '');
  const finalPath = path.join(getCompletePath('results'), `result-${randomFileID}.json`);
  return await fs.writeFile(finalPath, JSON.stringify(data, undefined, 2));
}

app.post('/results', async (req, res) => {
  if(req.body && Object.keys(req.body).length){
    await writeToFile(req.body);
    res.json({
      message: "success"
    })
  }
})


const port = process.env.PORT || 3000

app.listen(port, () => console.log('server is up on port', port));