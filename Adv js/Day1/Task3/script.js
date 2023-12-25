function Obj(names, id, Age) {
    this.name = names;
    this.id = id;
    this.age = Age;

    this.getSetGen = function () {
        var self = this;
        for (var x in self)
            (function () {
                var key = x;
                {
                    if ((typeof self[key]) !== 'function') {
                        var valueOfProperty = self[key];
                        Object.defineProperty(self, key,
                            {

                                get: function () {
                                    return valueOfProperty;
                                },
                                set: function (e) {
                                    console.log(e);
                                    return valueOfProperty = e

                                }
                            }


                        )
                    }
                }
            })()

    }
}
var obj = new Obj("lolo", 22, 3);
console.log(obj);
obj.getSetGen();
console.log(obj);
console.log(obj.name)
obj.name="Samah";

console.log(obj.age)
obj.age=33;
console.log(obj.age);
var stuff={
    sub:"html",
    time:4,

}
// obj.setget.call(stuff,"nppe"); 
// console.log(stuff.getSetGen);


