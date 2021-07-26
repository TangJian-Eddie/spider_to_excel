const express = require("express");
const router = express.Router();
const { writeXlsx } = require("../utils/xlsx");
const { transformCustomList } = require("../utils/model");
const path = require("path");

router.post("/receive_spider", function (req, res, next) {
  const { list, fileName, sheet } = req.body;
  // data处理
  const data = transformCustomList(JSON.parse(list));
  writeXlsx(path.join(__dirname, `../data/${fileName}`), sheet, data);
  res.json({ code: 200, msg: "ok" });
});

module.exports = router;
