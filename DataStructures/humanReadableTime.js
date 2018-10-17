const humanReadable = seconds => {
  let hours = Math.floor(seconds / 3600)
  let mins = Math.floor((seconds % 3600)/ 60)
  let sec = (seconds % 3600) % 60

  h = hours < 10 ? '0' + String(hours) : String(hours)
  m = mins < 10 ? '0' + String(mins) : String(mins)
  s = sec < 10 ? '0' + String(sec) : String(sec)

  return h + ':' + m + ':' + s;
}
console.log(humanReadable(6000))