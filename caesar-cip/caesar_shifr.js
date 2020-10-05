module.exports = (argShift, action, text) => {
  
    let result = text.split('').map(item => {
      let itemCharCode = item.charCodeAt(0);
      let charCodeLength = 0

      if (itemCharCode > 64 && itemCharCode < 91) {
        charCodeLength = 65
      } else if (itemCharCode > 96 && itemCharCode < 123) {
        charCodeLength = 97
      }

      if (charCodeLength !==0) {
        if (action === 'encode') {
          item = (((itemCharCode - charCodeLength) + argShift) % 26) + charCodeLength
        } else if (action === 'decode'){
          item = ((26 + ((itemCharCode - charCodeLength) - argShift)) % 26) + charCodeLength
        }
        return String.fromCharCode(item)
        
      } 

      return item
    })
    return result.join('')
}
