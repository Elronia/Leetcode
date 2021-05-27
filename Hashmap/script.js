var isAnagram = function(s, t) {
    let hash = {};
    
    if (s.length !== t.length) return false;
    
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(hash[char]) {
            hash[char] = hash[char] + 1; //hash[char] += 1 // hash[char] ++
        }
        else {
            hash[char] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if(!hash[char]) {
            return false; 
        }
        hash[char] = hash[char] - 1;
    }
    return true;
      
};


// we create an empty hashmap
// loop through the 1st string
// if letter isn't in a hashmap we'll create a key, 
// if it is in a hashmap we'll increment value and we'll go to the next symbol in a string
// loop over the 2nd string and compare with symbols in a hashmap