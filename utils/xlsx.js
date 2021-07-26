const Excel = require("exceljs");
const fs = require("fs");
// 写xlsx
async function writeXlsx(fileName, sheetName, data) {
  const workbook = new Excel.Workbook();
  try {
    fs.accessSync(fileName);
    await workbook.xlsx.readFile(fileName);
  } catch (err) {
    console.log("文件不存在");
  }
  const worksheet =
    workbook.getWorksheet(sheetName) || workbook.addWorksheet(sheetName);
  worksheet.addRows(data);
  await workbook.xlsx.writeFile(fileName);
}
module.exports = { writeXlsx };
