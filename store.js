import fs from "fs"
let dataArray=[];

export const writeDataToFile=(data)=>{ 
  dataArray=[...dataArray,data]
fs.writeFileSync ('example.txt',JSON.stringify(dataArray), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File has been written successfully!');
    }
  });
}
export const readDataFromFile=()=>{
    try {
        // Read the content of a file named "example.txt"
        const data = fs.readFileSync('example.txt', 'utf8');
    const newData=JSON.parse(data)
       
       return newData;
      } catch (err) {
        console.error('Error reading the file:', err);
      }
}
 
