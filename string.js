const stringLength = (st) => {
  return st.length >= 1 && st.length <= 10? st.length: 'Error: Invalid length';
}

const reverseString = (st) => {
  str = st.split("").reverse().join("");
  return str;
}

const capitalize = (st) => {
  return st[0].toUpperCase() + st.slice(1);
}

module.exports = { stringLength, reverseString, capitalize };