/*function a(){
    let a = 8;
    function b(){
      console.log(a)
    }
    return b;
  }
  a();*/

  function z(){
    var a =100;
    function y(){
      var b = 9;
      function x(){
        console.log(a,b);
      }
      x();
    }
    y();
  }
  z();