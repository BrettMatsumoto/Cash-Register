var calculatorModule = function(){
    var memory = 0;
    var total = 0;
    var calculator = {};
    var error = 'Error!@#'
    var load = function(x){
        if (typeof x === 'number'){
            memory = x;
            return memory
        } else {
            throw error
        }
    }
    var getTotal = function(){
        return total
    }
    var add = function(x){
        if (typeof x === 'number'){
            total += x;
        } else {
            throw error
        }
    }
    var subtract = function(x){
        if (typeof x === 'number'){
            return total -= x
        } else {
            throw error
        }
    }
    var multiply = function(x){
        if(typeof x === 'number'){
            return total *= x;
        } else {
            throw error
        }
    }
    var divide = function(x){
        if (typeof x === 'number'){
            return total /= x;
        } else {
            throw error
        }
    }
    var recallMemory = function(){
        return memory
    }
    var saveMemory =  function(x){
        memory = total;
        return total;
    }
    var clearMemory = function(){
        memory = 0;
        return memory
    }
    return{
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        recallMemory: recallMemory,
        saveMemory: saveMemory,
        clearMemory: clearMemory

    }
}