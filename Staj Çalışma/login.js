function giriş() {
    document.getElementById("giriss").style.display = 'block';
    document.getElementById("kayıtt").style.display = 'none';
}

function kayıt() {
    document.getElementById("giriss").style.display = 'none';
    document.getElementById("kayıtt").style.display = 'block';
}
function loginkontrol() {
    ad = document.getElementById('ad').value
    kullanıcı_adı = document.getElementById('kullanıcı_adı').value
    sifre = document.getElementById('sifre').value;
    sifrek = document.getElementById('sifrek').value;
    mail = document.getElementById('maill').value;
    kullanıcılar = [];
    var maill = document.getElementById("maill").value.indexOf("@gmail.com", "@outlook.com", "@icloud.com", "@hotmail.com");
    if (ad.length < 1) {
        document.getElementById('adError').innerHTML = "Adınız ve Soyadınızı girin!"
    } else {
        document.getElementById('adError').innerHTML = "";
        yeniAd = document.getElementById('ad').value
        kullanıcılar.push(yeniAd)
    }
    if (kullanıcı_adı.length < 8) {
        document.getElementById('kadıError').innerHTML = "En az 8 karakterden oluşmalı!"
    } else {
        document.getElementById('kadıError').innerHTML = "";
        yeniKadı = kullanıcı_adı = document.getElementById('kullanıcı_adı').value
        kullanıcılar.push(yeniKadı)
    }
    if (maill == -1) {
        document.getElementById('mailError').innerHTML = "Geçersiz mail adresi!";
    } else {
        document.getElementById('mailError').innerHTML = "";
        yenimail = sifre = document.getElementById('maill').value;
        kullanıcılar.push(yenimail)
    }
    if (sifre.length < 8) {
        document.getElementById('sifreError').innerHTML = "En az 8 karakterden oluşmalı!"
    } else {
        document.getElementById('sifreError').innerHTML = "";
        yeniSifre = sifre = document.getElementById('sifre').value;
        kullanıcılar.push(yeniSifre)
    }
    if (sifre = sifrek) {
        document.getElementById('ksifreError').innerHTML = "Şifreler Uyuşmuyor!"
    } else {
        document.getElementById('ksifreError').innerHTML = "";
    }
    console.log(ad + " " + kullanıcı_adı + " " + mail + " " + sifre + " " + sifrek);
    console.log(kullanıcılar);
}
