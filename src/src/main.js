const ajax = function (url,data,options) {
  let type = "GET";
  if (options && options.type) {
    type = options.type;
  }
  return new Promise((resolve, reject) => {
    $.ajax({
      type: type,
      url: url,
      data: JSON.stringify(data),
      dataType: 'json',
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (e) {
        resolve(e)
      },
      error: function (e) {
        reject(e)
      }
    });
  })

}
export default { ajax }