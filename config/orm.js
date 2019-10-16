var connection = require("./connection");

//not sure what this function will do; it may be printing out the devour it
function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; I++){
        arr.push("What is this doing?");
    }
    return arr.toString();
}

//helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    
    //loop through the keys and push the key/value as a string int arr
    for(var key in ob) {
        var value = ob[key];
        //check to skip hidden properties
        if(Object.hasOwnProperty.call(ob, key)){
            //if string with spaces, add quotations (Bacon Burger => 'Bacon Burger')
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'"+ value + "'";
            }
            //e.g. {name: 'bacon burger'} => ["name='bacon burger'"]
            //e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    //translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    //selectAll()
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw(err);
            }
            cb(result);
        });
    };
    //insertOne
    create: function(table, cols, vals, cb){
        var queryString = "INSERT INTO" + table;
        
    }

}

//insertOne()

//updateOne()

//Export the ORM object in module.exports.
module.exports = orm;