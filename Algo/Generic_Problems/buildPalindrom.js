function buildPalindrome(st){
 let stArr = st.split('');
 let i = 0, j = st.length - 1;
 while(i < j){
    if(st[i] !== st[j]){
        const arr = stArr.slice(j+1);
        arr.unshift(st[i]);
        i++;
        stArr = stArr.slice(0, j+1).concat(arr);
    } else{
        i++;
        j--;
    }
 }
 return stArr.join('');
}