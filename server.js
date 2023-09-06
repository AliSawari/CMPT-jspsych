const express = require("express")
const app = express();
const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require("fs");

function getCleanPath(...args){
  return path.join(__dirname, ...args);
}

app.use(express.static(getCleanPath('public')))
app.use(express.json())


async function writeToFile(data){
  const randomFileID = (Math.random() * 100000).toString(16).replace('.', '');
  const finalPath = getCleanPath('results', `result-${randomFileID}.json`);
  return await fs.writeFile(finalPath, JSON.stringify(data, undefined, 2));
}


app.post('/results', async (req, res) => {
  if (req.body && Object.keys(req.body).length) {
    try {
      await writeToFile(req.body);
      await writeResultsToFile()
      res.json({
        message: "success"
      })
    } catch (e) {
      console.log(e)
      res.json({
        message: "ERROR! please check server output"
      })
    }
  } else res.json({ message: "No data has been received from client!" });
})


async function combineAllData(){
  let resultsDir = getCleanPath('results');
  const files = await fs.readdir(resultsDir);
  let allTrials = [];
  for(let f of files){
    if(f.split('.').pop() !== 'json') continue;
    const f_path = getCleanPath('results', f);
    const f_content = await fs.readFile(f_path);
    const json = JSON.parse(f_content);
    allTrials.push(json);
  }
  return allTrials;
}

async function writeResultsToFile(){
  const finalPath = getCleanPath('results', 'finalResults.json');
  if(existsSync(finalPath)) await fs.unlink(finalPath);
  const allTrials = await combineAllData();
  return await fs.writeFile(finalPath, JSON.stringify(allTrials, null, 2));
}



app.get('/generateResponse', async (req, res) => {
  return res.download(getCleanPath('results', 'finalResults.json'), 'finalResults.json');
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log('server is up on port', port));
