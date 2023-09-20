/* Açılır kapanır metin Product Sayfası */
text1 = '"Dijital pazarlama şablonu", "tek sayfalık şablon", "şablon galerisi" gibi anahtar kelimeler kullanarak Google Arama da daha fazla şablon arayabilirsiniz. Lütfen arkadaşlarınıza web sitemizden bahsedin. Çeşitli HTML şablonlarına ihtiyacınız varsa Tooplate ve Too CSS web sitelerini ziyaret edebilirsiniz.oyama kitabı hava bitkisi eski püskü şık haç normcore raclette cred swag artisan aktif kömür. PBR&B bel çantası pok pok soylulaştırmak truffaut kitsch helvetica jean şort edison ampul poutine next level alçakgönüllülük la croix adaptogen. Hashtag kelimenin tam anlamıyla locavore, sakal marfa kogi bruh artisan succulents seitan tonx yelek chambray tahnitçilik. Aynı inanç meggings 3 kurt ay lomo ironi cray cehennem cehennemi asimetrik glütensiz sanat partisi ham denim chillwave tousled try-hard sulu meyveler sokak sanatı.'
text2 = 'Boyama kitabı hava bitkisi eski püskü şık, haç normcore raclette cred swag artisan aktif kömür. PBR&B bel çantası pok pok soylulaştırmak truffaut kitsch helvetica jean şort edison ampul poutine next level alçakgönüllülük la croix adaptogen. <br> Hashtag kelimenin tam anlamıyla locavore, sakal marfa kogi bruh artisan succulents seitan tonx yelek chambray tahnitçilik. Aynı inanç meggings 3 kurt ay lomo ironi cray cehennem cehennemi asimetrik glütensiz sanat partisi ham denim chillwave tousled try-hard sulu meyveler sokak sanatı.'
document.getElementById("but").style.color = "blue"
document.getElementById("deneme11").innerHTML = text1
function tıkla1() {
    document.getElementById("deneme11").innerHTML = text1
    document.getElementById("but").style.color = "blue"
    document.getElementById("but1").style.color = "black"
}
function tıkla2() {
    document.getElementById("deneme11").innerHTML = text2
    document.getElementById("but").style.color = "black"
    document.getElementById("but1").style.color = "blue"
}



/* Dizi Oluşturma, Ekrana Yazdırma 
let gamess = new Array(
    "COD", "Apex", "PUBG", "CS"
    );
x = document.getElementById("deneme").innerHTML = gamess[1];
 */

/* 
let texttt = "";

for (let a = 0; a < 10; a++) {
    texttt += "Sayınız değeri" + a + "<br>";
}
document.getElementById("deneme12").innerHTML = texttt;



let language = "JavaScript";

let texxt = "";
for (let x of language) {
texxt += x + "<br>";
}
document.getElementById("deneme13").innerHTML = texxt;

let oyun = 0;
let yazi = "";
do {
    yazi += "Dünya Yaşı = " + oyun + "</br>" ;
    oyun++;
}
while(oyun < 10);
document.getElementById("deneme14").innerHTML = yazi



 */
/* Oyun adeti kullanıcıdan alıp tutar ve adet miktarıyla sepete ekleme */ 
let objText ='{ "oyunlar" : [ {"GamesName1":"Call of Duty MW2","GamesPrice1":22,"GamesPeice1": 1}, {"GamesName1":"APEX","GamesPrice1":25,"GamesPeice1": 1},{"GamesName1":"LoL","GamesPrice1":30,"GamesPeice1": 1}],"abc":25234}';
const obj = JSON.parse(objText);
console.log(obj);
var queryValueText = document.getElementById("query").value;

function ekle() {
    var x = document.getElementById("query").value;
    var queryValue = Number(x);
    obj.oyunlar[0].GamesPeice1 = queryValue
    obj.oyunlar[0].GamesPrice1 = queryValue*22 
    console.log(obj)
    document.getElementById("sepet-1").innerHTML = obj.oyunlar[0].GamesPeice1 + "x " + obj.oyunlar[0].GamesName1 + " " + obj.oyunlar[0].GamesPrice1 + " $";
}
/* */



/* */