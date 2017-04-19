$(document).ready(function () {
    var literki = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w", "y", "z", "ż", "ź"];
    for (var i = 0; i < literki.length; i++) {
        var id = literki[i];
        var litery = $("<button>").attr('id', id.toUpperCase()).text(id).addClass("litery");
        $('.alfabet').append(litery);
    }
    var fireworks=$(".container");
    var select = $("#lvl");
    var button = $(".alfabet").find("button");
    var szanse = $(".misstakes");
    var ilosc = 9;
    szanse.html("Ilość Szans:  " + ilosc);
    var score = $(".score");
    var pkt = 0;
    score.html("Wynik:   " + pkt);
    var obrazek = $(".hang");
    var url = "img/s" + ilosc + ".jpg";
    obrazek.html('<img src="' + url + '" />');
    $(".alfabet").on("click", "button", function () {
        var litera = $(this).attr("id");
        var litpass = $('#password [data-id=' + litera + ']');
        var litdiv = litpass.attr('data-id');
        var obrazek = $(".hang");
        console.log(obrazek);
        if (litera == litdiv) {
            litpass.find("span").addClass("unhide");
            $("#" + litera).addClass("color1").attr('disabled', 'disabled');
        }
        else {
            $("#" + litera).addClass("color2").attr('disabled', 'disabled');
            --ilosc;
            szanse.html("Ilość Szans:  " + ilosc);
            var url = "img/s" + ilosc + ".jpg";
            console.log(url);
            obrazek.html('<img src="' + url + '" />');
            if (ilosc == 0) {
                if (confirm('Game over! Czy chcesz zagrać jeszcze raz?')) {
                    window.location.reload();
                }
            }
        }
        var spanE = $(".md");
        var spanU = $(".unhide");
        if (spanE.length == spanU.length) {
            setTimeout(function () {
                alert("Gratulacje poprawnie zgadłeś hasło"), startGame();
            }, 1000);
            pkt++
            score.html("Wynik:  " + pkt);
        }
    });
    var date = {
        easy: [
            {
                Państwo: "Polska"
                , Stolica: "Warszawa"
            }
            , {
                Państwo: "Niemcy"
                , Stolica: "Berlin"
            }
            , {
                Państwo: "Francja"
                , Stolica: "Paryż"
            }
            , {
                Państwo: "Włochy"
                , Stolica: "Rzym"
            }
            , {
                Państwo: "Belgia"
                , Stolica: "Bruksela"
            }
            , {
                Państwo: "Hiszpania"
                , Stolica: "Madryt"
            }
            , {
                Państwo: "Czechy"
                , Stolica: "Praga"
            }
            , {
                Państwo: "Słowacja"
                , Stolica: "Bratysława"
            }
            , {
                Państwo: "Austria"
                , Stolica: "Wiedeń"
            }
            , {
                Państwo: "Portugalia"
                , Stolica: "Lizbona"
            }
            , {
                Państwo: "Grecja"
                , Stolica: "Ateny"
            }
]
        , medium: [
            {
                Państwo: "Jamajka"
                , Stolica: "Kingston"
            }
            , {
                Państwo: "Kanada"
                , Stolica: "Ottawa"
            }
            , {
                Państwo: "Dominikana"
                , Stolica: "San Domingo"
            }
            , {
                Państwo: "Meksyk"
                , Stolica: "Meksyk"
            }
            , {
                Państwo: "Kuba"
                , Stolica: "Hawana"
            }
            , {
                Państwo: "USA"
                , Stolica: "Waszyngton"
            }
]
        , hard: [
            {
                Państwo: "Afganistan"
                , Stolica: "Kabul"
            }
            , {
                Państwo: "Armenia"
                , Stolica: "Erewań"
            }
            , {
                Państwo: "Korea Południowa"
                , Stolica: "Seul"
            }, {
                Państwo: "Korea Północna"
                , Stolica: "Phenian"
            }, {
                Państwo: "Turcja"
                , Stolica: "Ankara"
            }, {
                Państwo: "Wietnam"
                , Stolica: "Hanoi"
            }, {
                Państwo: "Zjednoczone Emiraty Arabskie"
                , Stolica: "Abu Zabi"
            }, {
                Państwo: "Timor Wschodni"
                , Stolica: "Dili"
            }, {
                Państwo: "Syria"
                , Stolica: "Damaszek"
            }, {
                Państwo: "Pakistan"
                , Stolica: "Islamabad"
            }
        ]
        , vhard: [
            {
                Państwo: "Czad"
                , Stolica: "Ndżamena"
            }
         
        ]
    }
    var easyPass = $("#password");
    var er = date["easy"];
    var sr = date["medium"];
    var hr = date["hard"];
    var vhr = date["vhard"];
    var lvl = $("#lvl");
    var strBtn = $("#startButton");
    var liczba = 0;

    function startGame() {
        button.removeClass("color1");
        button.removeClass("color2");
        button.removeAttr("disabled");
        select.attr("disabled", "disabled");
        strBtn.attr("disabled", "disabled");
        if (lvl.val() == "Łatwy") {
            if (er.length == 0) {
                setTimeout(function () {
                    alert("Gratulacje! Ukończyłeś poziom łatwy. Kliknij ok i wybierz wyższy poziom trudności"), window.location.reload();
                }, 1000);
            }
            liczba = ((Math.floor(Math.random() * er.length)));
            console.log(liczba);
            var haslo = er[liczba].Stolica;
            haslo = haslo.toUpperCase();
            var country = er[liczba].Państwo;
            er.splice(liczba, 1);
            var haslo1 = "";
            for (var i = 0; i < haslo.length; i++) {
                if (haslo[i] == " ") {
                    haslo1 = haslo1 + "<div class='brake'>&nbsp;</div>";
                }
                else {
                    haslo1 = haslo1 + "<div data-id=" + haslo[i] + "><span class='md'>" + haslo[i] + "</span></div>";
                }
            }

            function wypiszHaslo() {
                $("#password").html(haslo1);
            }
            wypiszHaslo();

            function wypiszPanstwo() {
                $("#country").html(country);
            }
            wypiszPanstwo();
        }
        else if (lvl.val() == "Średni") {
               if (sr.length == 0) {
                setTimeout(function () {
                    alert("Gratulacje! Ukończyłeś poziom średni. Kliknij ok i wybierz wyższy poziom trudności"), window.location.reload();
                }, 1000);
            }
            liczba = ((Math.floor(Math.random() * sr.length)));
            var haslo = sr[liczba].Stolica;
            haslo = haslo.toUpperCase();
            var country = sr[liczba].Państwo;
            sr.splice(liczba, 1);
            var haslo1 = "";
            for (var i = 0; i < haslo.length; i++) {
                if (haslo[i] == " ") {
                    haslo1 = haslo1 + "<div class='brake'>&nbsp;</div>";
                }
                else {
                    haslo1 = haslo1 + "<div data-id=" + haslo[i] + "><span class='md' >" + haslo[i] + "</span></div>";
                }
            }

            function wypiszHaslo() {
                $("#password").html(haslo1);
            }
            wypiszHaslo();

            function wypiszPanstwo() {
                $("#country").html(country);
            }
            wypiszPanstwo();
        }
        else if (lvl.val() == "Trudny") {
                 if (hr.length == 0) {
                setTimeout(function () {
                    alert("Gratulacje! Ukończyłeś poziom trudny. Kliknij ok i wybierz wyższy poziom trudności"), window.location.reload();
                }, 1000);
            }
            liczba = ((Math.floor(Math.random() * hr.length)));
            var haslo = hr[liczba].Stolica;
            haslo = haslo.toUpperCase();
            var country = hr[liczba].Państwo;
            hr.splice(liczba, 1);
            var haslo1 = "";
            for (var i = 0; i < haslo.length; i++) {
                if (haslo[i] == " ") {
                    haslo1 = haslo1 + "<div class='brake'>&nbsp;</div>";
                }
                else {
                    haslo1 = haslo1 + "<div data-id=" + haslo[i] + "><span class='md'>" + haslo[i] + "</span></div>";
                }
            }

            function wypiszHaslo() {
                $("#password").html(haslo1);
            }
            wypiszHaslo();

            function wypiszPanstwo() {
                $("#country").html(country);
            }
            wypiszPanstwo();
        }
        else if (lvl.val() == "B.trudny") {
                 if (vhr.length == 0) {
                $('.demo').fireworks({
                    sound: true, 
                    opacity: 0.9,
                    width: '100%',
                    height: '100%'
});
     
                setTimeout(function () {
                    alert("Gratulacje! Ukończyłeś całą grę. Jesteś mistrzem stolic"), window.location.reload();
                }, 12000);
            }
            liczba = ((Math.floor(Math.random() * vhr.length)));
            var haslo = vhr[liczba].Stolica;
            haslo = haslo.toUpperCase();
            var country = vhr[liczba].Państwo;
            vhr.splice(liczba, 1);
            var haslo1 = "";
            for (var i = 0; i < haslo.length; i++) {
                if (haslo[i] == " ") {
                    haslo1 = haslo1 + "<div class='brake'>&nbsp;</div>";
                }
                else {
                    haslo1 = haslo1 + "<div data-id=" + haslo[i] + "><span class='md'>" + haslo[i] + "</span></div>";
                }
            }

            function wypiszHaslo() {
                $("#password").html(haslo1);
            }
            wypiszHaslo();

            function wypiszPanstwo() {
                $("#country").html(country);
            }
            wypiszPanstwo();
        }
    }
    strBtn.on("click", function () {
            startGame();
        })
        //    eu101.ts3.cloud:1320
});