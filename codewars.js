//Codewars

//Question 1
const areaOrPerimeter = function(l , w) {
    if (l != w){
      return (l * 2) + (w * 2)
    }else{
      return l * w
    }
};

//Question 2
function makeNegative(num) {
    if (num < 0){
      return num
    }else{
      return num - (num * 2)
    }
}
                