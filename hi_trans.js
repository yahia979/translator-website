var transForm = document.getElementById("form");
var Input = document.getElementById("eng");
var Output = document.getElementById("arb");
transForm.onsubmit = function (e) {
  getResponse(Input.value);
  e.preventDefault();
}

function getResponse(query) {
  var xhttp = new XMLHttpRequest();

  var url = "http://localhost:3000/?query=" + query;

  xhttp.open("GET", url, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      Output.value = xhttp.responseText;
      }
  };


}
      
var arbic_lable = $('#ar');
var english_lable = $('#en');
var arabic_area  = $('#arb');
var english_area  = $('#eng');

function switch_lang() {
  if(english_lable.text() == 'english'){ //english to arabic
    english_lable.text('arabic');
    english_area.css('text-align','right');
    arbic_lable.text('english');
    arabic_area.css('text-align','left');

  }else{                              //arabic to english
    arbic_lable.text('arabic');
    arabic_area.css('text-align','right');
    english_lable.text('english');
    english_area.css('text-align','left');
  }
  var tmp = arabic_area.val();
  arabic_area.val(english_area.val());
  english_area.val(tmp);
        
}

$('.btn_convert').click(function(){

  switch_lang();


});



