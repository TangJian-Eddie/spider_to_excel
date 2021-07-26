/**
 * @param {string} productName
 * @param {number} conditionType 1:产品名称 2:备案编号 3:单位名称
 * @param {*} startPage
 * @param {*} endPage
 */
async function fetchData(
  productName,
  conditionType,
  startPage,
  endPage,
  delay = 1000
) {
  function ajax(url, type, data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        type,
        data,
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        async: false,
        cache: false,
        error: function (e) {
          console.log(e);
          reject(e);
        },
        success: function (res) {
          resolve(res);
        },
      });
    });
  }
  if (startPage > endPage) return;
  const data = {
    on: true,
    productName,
    conditionType,
    applyname: "",
    applysn: "",
    num: startPage,
  };
  const res = await ajax(
    "itownet/fwAction.do?method=getBaNewInfoPage",
    "POST",
    data
  );
  console.log(res)
  await ajax("http://localhost:3000/receive_spider", "POST", {
    list: JSON.stringify(res.list),
    fileName: "perfectDiary.xlsx",
    sheet: "sheet1",
  });
  setTimeout(() => {
    fetchData(productName, conditionType, startPage + 1, endPage);
  }, delay);
}
fetchData("完美日记", 1, 1, 25);
