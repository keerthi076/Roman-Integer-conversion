
function operation1(){
 
 $(".romanToInt").show();
 $(".selectoperation").hide();   
}
function operation2(){
 
 $(".intToRoman").show();
 $(".selectoperation").hide();   
}

$("#operation2").on("click",function(){

     $(".romanToInt").style.display="none";
     $(".intToRoman").style.display="block";
});

function clear1(){
	$("input"). val("");
	$("#result1").html("");
}
function clear2(){
	$("input"). val("");
	$("#result2").html("");
}
function change(){
	
  $(".intToRoman").hide();
  $(".romanToInt").hide();
 $(".selectoperation").show();
}

 

function conversionint(){
	var s=$("#romaninput").val();
      const map={
      	 I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      }

      let result=0;
      
      for(var j=0;j<s.length;j++){
       
        if(map[s[j]] < map[s[j+1]]){
        	result=result-map[s[j]];
        }
        else{
        	result+=map[s[j]];
        }
      }
      
      document.getElementById("result1").textContent=`${s}=${result}`;
     }

      function conversionroman(){
      
      	var t=$("#intinput").val();
      	var z=$("#intinput").val();
      	const table={
     M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,

      };

      var str = '';

  for (var i of Object.keys(table)) {
    var q = Math.floor(t / table[i]);
    t -= q * table[i];
    str += i.repeat(q);
  }

$("#result2").html(`${z}=${str}`);

     
};

      	
      
