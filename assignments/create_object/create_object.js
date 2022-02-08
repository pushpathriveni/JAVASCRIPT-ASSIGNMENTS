function CreateObject(arr) {
    // Write your code here
    var obj = {};
    var index=0;
    while(index<arr.length){
        var key=arr[index];
        var value=arr[index+1];
        obj[key]=value;
        index+=2;
    }
    return obj;   
}

module.exports = CreateObject;
