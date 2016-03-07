var map = function(collection, callback) {
    var newArray = []; var i; 
	var result ;
    if (Array.isArray(collection)) {
        console.log("hi");
        for( i = 0; i < collection.length; i++) {
		result = callback(collection[i]); 
		newArray.push(result);
        }
    } else if (typeof collection === "object"){
                for (i in collection){
                  result = (2*sampleObj[i]);
                  newArray.push(result);
        }
          
        }   else {
            alert("Please enter either an array or an object");
        } return newArray;
}; 


var example = function(x){
    return x *2;
};


var sampleObj ={a: "1", b: "2", c: "3"}

map(sampleObj, example);