function transformCustomList(list) {
  const data = [
    [
      "备案编号",
      "产品名",
      "processid",
      "newProcessid",
      "企业名称",
      "apply_enter_address",
      "时间",
    ],
  ];
  const typeMap = [
    "applySn",
    "productName",
    "processid",
    "newProcessid",
    "enterpriseName",
    "apply_enter_address",
    "provinceConfirm",
  ];
  for (const item of list) {
    const dataItem = [];
    for (const type of typeMap) {
      dataItem.push(item[type]);
    }
    data.push(dataItem);
  }
  return data;
}
module.exports = { transformCustomList };
