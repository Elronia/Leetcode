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