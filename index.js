const axios = require("axios")
const secret = process.env.MY_SECRET

// ;(async () => {
//   const res = await axios.get("https://www.baidu.com/")
//   const data = res.data
//   console.log(data)
// })()

console.log(parseInt(secret) + 1)
