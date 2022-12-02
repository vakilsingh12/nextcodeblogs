// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function handler(req, res) {
  let data = await fs.promises.readdir(`blogdata`);
  let allblog = [];
  data = data.slice(0, req.query.count);
  for (let index = 0; index < data.length; index++) {
    let item = data[index];
    let allData = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allblog.push(JSON.parse(allData));
  }
  res.status(200).json(allblog);
}
