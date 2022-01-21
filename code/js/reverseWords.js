var s = "  Bob    Loves  Alice   ";
console.log(s.split(" ").filter(function (item) { return item; }).reverse().join(" "));
