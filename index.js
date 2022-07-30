const axios = require("axios")
const secret = process.env.MY_SECRET

// ;(async () => {
//   const res = await axios.get("https://www.baidu.com/")
//   const data = res.data
//   console.log(data)
// })()
// https://www.jxuspt.com/schoolWebManage/web/pagesClickStatistics/recordClick
let count = 0
function run() {
  axios(
    {
      method: "POST",
      url: "https://www.jxuspt.com/schoolWebManage/web/pagesClickStatistics/recordClick",
      headers: {
        "Referer": 'https://www.jxuspt.com/Z07_ZSJY/rsContent.jsp?newsID=234324&Page=0&size=18&columnId=43',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
      }
    }
  ).then(res => {
    count++
    console.log(res.data.msg + count)
  }).catch(err => { })
}

setInterval(() => {
  // try {
  // } catch (e) { }
  run()
}, 0);

console.log(parseInt(secret) + 1)
