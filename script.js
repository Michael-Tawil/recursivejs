//-------------------------fibonacci & fibonacci Recursive-----------------------------------------------
function fib(num){
    if (num == 0 ) return [0]
    if (num == 1 ) return [0,1]
    
        let fibarr = [0,1]

        for (let i = 2; i < num; i++){
            
            const nextfib = fibarr[i-1] + fibarr[i-2]
            fibarr.push(nextfib)
            
        }
        return fibarr
}

function fibr(num){
    if (num == 0 ) return [0]
    if (num == 1 ) return [0,1]
    
    let prevnum = fibr(num-1)
    let nextnum = prevnum[num-1] + prevnum[num-2]

    return [...prevnum, nextnum]
}

console.log(fibr(8))

//-----------------------Merge Sort------------------------------------------

function MergeSort(arr){
    if (arr.length <=1) return arr
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right= arr.slice(middle,arr.length)
    return Merge(MergeSort(left),MergeSort(right))
}
function Merge(left,right){
    let result = []
    let leftindex = 0
    let rightindex = 0

    while(leftindex < left.length && rightindex < right.length){
        if(left[leftindex] < right[rightindex]){
            result.push(left[leftindex])
            leftindex++

        }else{
            result.push(right[rightindex])
            rightindex++
        }
    }

    return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
}
console.log(MergeSort([0,8,5,9,4,7,4,3,6,23,2.45,456,2456,31451345]))