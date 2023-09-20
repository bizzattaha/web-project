const oyunlar = [
    {
        adı: "COD MW2",
        imgUrl: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg",
        fiyat: 22,
        id: 1,
        adet: 1
    },
    {
        adı: "Apex Legends",
        imgUrl: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg",
        fiyat: 25,
        id: 2,
        adet: 1
    },
    {
        adı: "Fornite",
        imgUrl: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg",
        fiyat: 27,
        id: 3,
        adet: 1
    },
    {
        adı: "PUBG",
        imgUrl: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg",
        fiyat: 30,
        id: 4,
        adet: 1
    }
]

var sepet = [];

function sepeteEkle(id) {
    var oyunObj;
    for (var i = 0; i < oyunlar.length; i++) {
        if (oyunlar[i].id === id) {
            oyunObj = oyunlar[i];
            break;
        }
    }

    var bulunanÜrün;
    sepet.forEach(sepettekiürün => {
        if (sepettekiürün.id === id) {
            bulunanÜrün = sepettekiürün;
        }
    })
    if (bulunanÜrün) {
        bulunanÜrün.adet++;
    } else {
        bulunanÜrün = {};
        bulunanÜrün.id = id;
        bulunanÜrün.adet = 1;
        bulunanÜrün.adı = oyunObj.adı;
        bulunanÜrün.fiyat = oyunObj.fiyat;
        sepet.push(bulunanÜrün);
    }
    setSepetItemsToLS();
    updateSepetView();
}

function updateSepetView() {
    var sepet3 = "";
    var tutar = 0;
    var adet3 = 0;
    sepet.forEach(bulunanÜrün => {
        sepet3 += bulunanÜrün.adet + "x " + bulunanÜrün.adı + " = " + bulunanÜrün.fiyat * bulunanÜrün.adet + "$ <button class='sill' onclick='sil(" + bulunanÜrün.id + ")'> - </button>" + "<br>";
        adet3 += bulunanÜrün.adet;
    });
    document.getElementById('sepet_içerigi').innerHTML = sepet3;
    document.getElementById("sepet-bilgi").innerHTML = "Sepette " + adet3 + " Adet Ürünüz Var!";;

    sepet.forEach(bulunanÜrün => {
        tutar += bulunanÜrün.fiyat * bulunanÜrün.adet;
    });
    document.getElementById('tutar').innerHTML = " Toplam : " + tutar + " $";
}

function getSepetItemsFromLS() {
    let sepetFromLS = localStorage.getItem('sepet');
    if (sepetFromLS) {
        sepet = JSON.parse(sepetFromLS);
    }
    updateSepetView();
}

function setSepetItemsToLS() {
    localStorage.setItem("sepet", JSON.stringify(sepet));    //JSON stringe çeviren metot
}

function sil(id) {
    var oyunObj;
    for (var i = 0; i < oyunlar.length; i++) {
        if (oyunlar[i].id === id) {
            oyunObj = oyunlar[i];
            break;
        }
    }

    var bulunanÜrün;
    var index;
    sepet.forEach((sepettekiürün, ix, a) => {
        if (sepettekiürün.id === id) {
            bulunanÜrün = sepettekiürün;
            index = ix;
        }
        console.log(a);
    })

    if (bulunanÜrün) {
        if (bulunanÜrün.adet == 1) {
            sepet.splice(index, 1);
        } else {
            bulunanÜrün.adet--;
        }
    }

    setSepetItemsToLS();
    updateSepetView();
}

function addGamesToPage() {
    document.getElementById('game-conteiner').innerHTML = '';

    oyunlar.forEach(oyunObj => {
        //ana container olustur
        var container = document.createElement('div');
        container.classList = 'games1';
        //img olustur
        var img = document.createElement('img');
        img.src = oyunObj.imgUrl;
        img.classList.add('foto');
        //name olustur
        var name = document.createElement('div');
        name.innerHTML = oyunObj.adı;
        name.classList.add('yazı');
        //fiyat olustur
        var fiyat = document.createElement('div');
        fiyat.innerHTML = oyunObj.fiyat + "$";
        fiyat.classList.add('fiyat');
        //btn olustur
        var btn = document.createElement('button');
        btn.innerHTML = 'Sepete Ekle';
        btn.classList.add('sepete-ekle');
        btn.onclick = function () { sepeteEkle(oyunObj.id); };
        //elementleri ana container a ekle
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(fiyat);
        container.appendChild(btn);
        // ana container i sayfaya ekle
        document.getElementById('game-conteiner').appendChild(container);
    });
}

addGamesToPage();
getSepetItemsFromLS();

//updateSepet()