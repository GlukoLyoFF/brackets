module.exports = function check(str, bracketsConfig) {
  let stack = [], 
      open_br = [], 
      close_br = [],
      valid = true;
  bracketsConfig.forEach(item => {
    open_br.push(item[0]);
    close_br.push(item[1]);
  });
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (close_br.includes(char)) {
      if (open_br.includes(char)) {
        if (stack.length == 0) {
          stack.push(char);
        } else {
          let top = stack.pop();
          (char != top) ? stack.push(top, char) : {};
        };
      } else if (stack.length == 0 || char != stack.pop()) {
        return false;
      };
    } else if (open_br.includes(char)) {
      stack.push(close_br[open_br.indexOf(char)]);
    };
  };
  if (stack.length != 0) {valid = false; };
  return valid;
}
