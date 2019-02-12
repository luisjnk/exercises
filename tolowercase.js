var toLowerCase = function(str) {
    let result = ''
    let strArray = str.split('');
    strArray.forEach( (item) => {
        const lowerCase = isLowerCase(item.charCodeAt(0))
        if(!lowerCase){
            result += trasnformInLowerCase(item)
        } else {
            result += item
        }
    })
    return result
};

var isLowerCase = (char) => (char >= 97 || char < 65);
var trasnformInLowerCase = (str) => String.fromCharCode(str.charCodeAt(0) + 32)

console.log(toLowerCase('al&phaBET'))

/*var item = 'A'
console.log(item.charCodeAt(0))*/