function arrFill() {
    var arrayFIll = ["Hello", 0, "World!", true].filter(Boolean)

    console.log(arrayFIll);

    // filter berdasarkan isi data bukan berdasarkan indexOf
    var numbers = [1, 10, 2, 8, 11];
    var lucky = [].filter.call(numbers, function(number) {
      return number > 9;
    });

    console.log(lucky);
}

function forEachFunc() {
  var data = [20, 5, 5, 7, 9, 90]
  var tampungan = [];

  data.forEach(function(item){
    tampungan.push(item*item)
  })
  console.log(tampungan);
}

forEachFunc()


