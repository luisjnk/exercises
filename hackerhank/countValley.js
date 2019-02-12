function countingValleys(n, s) {
    let hikes = s.split('')
    let countOfValleys = 0;
    let sealevel = 0;

    for (let i = 0; i <=( n - 1); i++) {
        let isInSeaLevel = sealevel == 0;
        if (isInSeaLevel) {
            if (hikes[i] == 'D') {
                countOfValleys++
            }
        }

        if (hikes[i] == 'U')
            sealevel++

        if (hikes[i] == 'D')
            sealevel--
    }
    return countOfValleys
}

var n = 8;
var s = 'UDDDUDUU'

countingValleys(n, s)