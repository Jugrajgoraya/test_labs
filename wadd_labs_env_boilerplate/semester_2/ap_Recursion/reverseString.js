function revString(string) {
    if (string.length === 0) {
        return "";
      }
      return string[string.length -1] + revString(string.slice(0,string.length -1))
}

console.log(revString("apple"));