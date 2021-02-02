function subStr(str, max){
  if(str.length <= max){
    return str;
  }

  return `${String(str).substr(0, max)}...`
}

export default subStr;
