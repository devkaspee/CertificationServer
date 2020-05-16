


sqlfuncAdd = function(code){
  return `INSERT INTO codes VALUES ("${code}", 0, 0)`;
}

sqlfuncSuspend = function(code, num){
  return `update codes set valid = ${num} where codenum = "${code}"`;
}
mysqlfunc = {
  Add : sqlfuncAdd,
  Suspend : sqlfuncSuspend
}
module.exports = mysqlfunc;
