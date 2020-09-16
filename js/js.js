var myAudio = document.getElementById("sidemusik");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

//ARRAY
var wss_i = 0;
var wss_array = ["FÆLLESSKAB", "JORDNÆR", "GLÆDE", "UDVIKLING", "MULIGHEDER"];
var wss_elem;
function wssNext(){
	wss_i++;
	wss_elem.style.opacity = 0;
	if(wss_i > (wss_array.length - 1)){
		wss_i = 0;
	}
	setTimeout('wssSlide()',1000);
}
function wssSlide(){
	wss_elem.innerHTML = wss_array[wss_i];
	wss_elem.style.opacity = 1;
	setTimeout('wssNext()',2000);
}


 $(document).ready(function(){
  $("#visUdstyr").click(function(){
    $("#ukulele").fadeIn();
    $("#tromme").fadeIn();
    $("#mixer").fadeIn();
  });
});  


 $(document).ready(function(){
  $("#skjulUdstyr").click(function(){
    $("#ukulele").fadeOut();
    $("#tromme").fadeOut();
    $("#mixer").fadeOut();
  });
});  
