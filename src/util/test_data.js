import MockRequest from './mockrequest'
function ra() {
  var str = ""
  for (var i = 0; i < 4; i++) {
    str = Math.floor(Math.random(1, 10) * 10) + "" + str
  }
  return str
}
window.TestData = {
  "query:HomeList": {
    "code": "S_OK",
    "summary": "",
    "var": {
        "createDate": new Date(),
        "createId": ra(),
        "content":"This is webpack&&jQuery project"
      },
  },
}



var rules = [];
for (var key in window.TestData) {

  rules.push({
    url: key,
    responseText: window.TestData[key]
  })
}
MockRequest.create().addRules(rules);

export default TestData