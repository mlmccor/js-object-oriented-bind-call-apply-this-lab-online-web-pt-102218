function justInvoke(fn) {
  return fn()
}

function SetThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}