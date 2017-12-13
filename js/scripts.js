var $span = $("span");
$span.each(function(index, element) {
    if(index % 2 == 0) {
      	$(element).css('color', 'red');
    }
});

//$("span:even").css('color', 'red');


var $paragraphs = $('p');
$paragraphs.each(function(index, element) {
  var $button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
  $(element).append($button);
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

//dodaj klasę do elementu
$("<p>Dodaj klasę do elementu</p>").insertAfter("p:last");
$("p:last").addClass("firstParagraf second");

//usuń klasę z elementy
$("p:last").clone().insertAfter("p:last");
$("p:last").text("Usuń klasę z elementu");
$("p:last").removeClass("second");

//dodaj jakiś atrybut (np. data-test) do elementu
$("p:last").clone().insertAfter("p:last");
$("p:last").text("Dodaj jakiś atrybut (np. data-test) do elementu");
$("p:last").append().attr("data-test", "tested");

//pobierz wartosc jakiegos atrybutu
$("p:last").clone().insertAfter("p:last");
$("p:last").text("Pobierz wartosc jakiegos atrybutu");
var $classValue = $("p:last").attr("class");
console.log("Paragraf class value : " + $classValue);

//usuń element - usuwamy 9 paragraf
$("p:nth(9)").remove();

// dodaj jakis element PRZED istniejacym elementem
$("<p>Dodane przed istniejącym elementem</p>").insertBefore("p:nth(3)");

//dodaj element PO istniejacym elemencie
$("<p>Dodane po istniejącym elemencie</p>").insertAfter("p:nth(4)");

//ukryj element (potem pokaż element)
$("#hideMe").hide();
console.log("paragraf hidden");

//zmień treść w jakimś elemencie
$("p:last").text("Nowy tekst wstawiony do paragrafu");
