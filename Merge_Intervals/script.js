var merge = function(intervals) {
    if (intervals.length === 1) return intervals;
    
    // intervals.sort(key=lambda interval: interval[0]) in Python
    intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
    
    let lastStart = intervals[0][0];
    let lastEnd = intervals[0][1];
    const newIntervals = [];
    
    for (let i = 1; i < intervals.length; i++) {
        const curInterval = intervals[i];
        const curStart = curInterval[0];
        const curEnd = curInterval[1];
        
        if (curStart <= lastEnd) {
            // overlap
            lastEnd = Math.max(lastEnd, curEnd);
        } else {
            // non-overlap
            newIntervals.push([lastStart, lastEnd]);
            lastStart = curStart;
            lastEnd = curEnd;
        }
    }
    
    newIntervals.push([lastStart, lastEnd]);
    return newIntervals;
};

/* 2nd */
// var merge = function(intervals) {
//     if ( intervals.length === 1 ) return intervals
    
//     intervals.sort( ( intervalA, intervalB ) =>  intervalA[ 0 ] - intervalB[ 0 ]  )
                
//     const outputArr = []
//     let prevInterval = intervals[ 0 ]
//     outputArr.push( prevInterval )
    
//     intervals.forEach( ( interval ) => {
//         let prevStart = prevInterval[ 0 ]
//         let prevEnd = prevInterval[ 1 ]
//         let curStart = interval[ 0 ]
//         let curEnd = interval[ 1 ]
        
//         if ( curStart <= prevEnd ) {
//             prevInterval[ 1 ] = Math.max( prevEnd, curEnd )
//         } else {
//             prevInterval = interval
//             outputArr.push( prevInterval )
//         }
//     } )
    
//     return outputArr
// };
