
function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    function namedfunction(){}
    return namedfunction;
}
function returnsAnAnonymousFunction(){
    return function() {}
}


   


