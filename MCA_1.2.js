// ==UserScript==
// @name         Mush Character Autopicker
// @namespace    https://github.com/HwangLiu/Mush-Character-Autopicker
// @version      1.2
// @description  Reloads the /chooseHero page, waits for your favorite character and autopicks it
// @author       HwangLiu
// @match        http://mush.vg/chooseHero
// @match        http://mush.twinoid.com/chooseHero
// @match        http://mush.twinoid.es/chooseHero
// @grant        none
// ==/UserScript==

//Sets the countdown to reload the page (3 minutes by default)
setTimeout(function() {
    location.reload();
}, 60000);

//Creating hero objects
var jinsu = {
    name: "Kim Jin Su",
    icon: "http://mush.twinoid.com/img/icons/ui/jinsu.png"
};
var frieda = {
    name: "Frieda Bergmann",
    icon: "http://mush.twinoid.com/img/icons/ui/frieda.png"
};
var kuan = {
    name: "Lai Kuan-Ti",
    icon: "http://mush.twinoid.com/img/icons/ui/kuanti.png"
};
var janice = {
    name: "Janice Kent",
    icon: "http://mush.twinoid.com/img/icons/ui/janice.png"
};
var roland = {
    name: "Roland Zuccali",
    icon: "http://mush.twinoid.com/img/icons/ui/roland.png"
};
var hua = {
    name: "Jiang Hua",
    icon: "http://mush.twinoid.com/img/icons/ui/hua.png"
};
var paola = {
    name: "Paola Rinaldo",
    icon: "http://mush.twinoid.com/img/icons/ui/paola.png"
};
var chao = {
    name: "Wang Chao",
    icon: "http://mush.twinoid.com/img/icons/ui/chao.png"
};
var finola = {
    name: "Finola Keegan",
    icon: "http://mush.twinoid.com/img/icons/ui/finola.png"
};
var stephen = {
    name: "Stephen Seagull",
    icon: "http://mush.twinoid.com/img/icons/ui/stephen.png"
};
var ian = {
    name: "Ian Soulton",
    icon: "http://mush.twinoid.com/img/icons/ui/ian.png"
};
var chun = {
    name: "Zhong Chun",
    icon: "http://mush.twinoid.com/img/icons/ui/chun.png"
};
var raluca = {
    name: "Raluca Tomescu",
    icon: "http://mush.twinoid.com/img/icons/ui/raluca.png"
};
var gioele = {
    name: "Gioele Rinaldo",
    icon: "http://mush.twinoid.com/img/icons/ui/gioele.png"
};
var eleesha = {
    name: "Eleesha Williams",
    icon: "http://mush.twinoid.com/img/icons/ui/eleesha.png"
};
var terrence = {
    name: "Terrence Archer",
    icon: "http://mush.twinoid.com/img/icons/ui/terrence.png"
};
var andie = {
    name: "Andie Graham",
    icon: "http://mush.twinoid.com/img/icons/ui/andie.png"
};
var derek = {
    name: "Derek Hogan",
    icon: "http://mush.twinoid.com/img/icons/ui/derek.png"
};

//Creating hero buttons, applying style and assigning icons
for (var c = 0; c < 18; c++) {
    var hero_button = document.createElement("button");
    hero_button.style.width = '40px';
    hero_button.style.height = '40px';
    hero_button.style.margin = '7px';
    hero_button.style.backgroundColor = "#008CBA";
    hero_button.style.border = '1px solid double black';
    hero_button.style.borderRadius = "4px";
    hero_button.style.boxShadow = "inset 0px 0px 4px 4px rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    container_inside.appendChild(hero_button);
    if (c === 0) {
        var jin_icon = document.createElement('img');
        jin_icon.src = jinsu.icon;
        hero_button.appendChild(jin_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + jinsu.name;
            location.reload();
        });
    }
    if (c === 1) {
        var frieda_icon = document.createElement('img');
        frieda_icon.src = frieda.icon;
        hero_button.appendChild(frieda_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + frieda.name;
            location.reload();
        });
    }
    if (c === 2) {
        var kuan_icon = document.createElement('img');
        kuan_icon.src = kuan.icon;
        hero_button.appendChild(kuan_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + kuan.name;
            location.reload();
        });
    }
    if (c === 3) {
        var janice_icon = document.createElement('img');
        janice_icon.src = janice.icon;
        hero_button.appendChild(janice_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + janice.name;
            location.reload();
        });
    }
    if (c === 4) {
        var roland_icon = document.createElement('img');
        roland_icon.src = roland.icon;
        hero_button.appendChild(roland_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + roland.name;
            location.reload();
        });
    }
    if (c === 5) {
        var hua_icon = document.createElement('img');
        hua_icon.src = hua.icon;
        hero_button.appendChild(hua_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + hua.name;
            location.reload();
        });
    }
    if (c === 6) {
        var paola_icon = document.createElement('img');
        paola_icon.src = paola.icon;
        hero_button.appendChild(paola_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + paola.name;
            location.reload();
        });
    }
    if (c === 7) {
        var chao_icon = document.createElement('img');
        chao_icon.src = chao.icon;
        hero_button.appendChild(chao_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + chao.name;
            location.reload();
        });
    }
    if (c === 8) {
        var finola_icon = document.createElement('img');
        finola_icon.src = finola.icon;
        hero_button.appendChild(finola_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + finola.name;
            location.reload();
        });
    }
    if (c === 9) {
        var stephen_icon = document.createElement('img');
        stephen_icon.src = stephen.icon;
        hero_button.appendChild(stephen_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + stephen.name;
            location.reload();
        });
    }
    if (c === 10) {
        var ian_icon = document.createElement('img');
        ian_icon.src = ian.icon;
        hero_button.appendChild(ian_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + ian.name;
            location.reload();
        });
    }
    if (c === 11) {
        var chun_icon = document.createElement('img');
        chun_icon.src = chun.icon;
        hero_button.appendChild(chun_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + chun.name;
            location.reload();
        });
    }
    if (c === 12) {
        var raluca_icon = document.createElement('img');
        raluca_icon.src = raluca.icon;
        hero_button.appendChild(raluca_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + raluca.name;
            location.reload();
        });
    }
    if (c === 13) {
        var gioele_icon = document.createElement('img');
        gioele_icon.src = gioele.icon;
        hero_button.appendChild(gioele_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + gioele.name;
            location.reload();
        });
    }
    if (c === 14) {
        var eleesha_icon = document.createElement('img');
        eleesha_icon.src = eleesha.icon;
        hero_button.appendChild(eleesha_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + eleesha.name;
            location.reload();
        });
    }
    if (c === 15) {
        var terrence_icon = document.createElement('img');
        terrence_icon.src = terrence.icon;
        hero_button.appendChild(terrence_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + terrence.name;
            location.reload();
        });
    }
    if (c === 16) {
        var andie_icon = document.createElement('img');
        andie_icon.src = andie.icon;
        hero_button.appendChild(andie_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + andie.name;
            location.reload();
        });
    }
    if (c === 17) {
        var derek_icon = document.createElement('img');
        derek_icon.src = derek.icon;
        hero_button.appendChild(derek_icon);
        hero_button.addEventListener('click', function(event) {
            document.cookie = "chosenHero=" + derek.name;
            location.reload();
        });
    }
}

//Getting the value of chosenHero cookie
function getCookie(chosenHero) {
    var nameEQ = chosenHero + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//Creating a text line for a user to see which character he chose
var chosenHero = getCookie("chosenHero");
var newDiv = document.createElement("div");
container_inside.appendChild(newDiv);
newDiv.innerHTML = "You want to be: " + chosenHero;

//Creating a click event
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('click', true, true);

//Checking for a preferred character, choosing it and joining the ship
var allNames = document.getElementsByTagName("h2");
for (var i = 0, max = allNames.length; i < max; i++)
    if (allNames[i].textContent === chosenHero) {
        var target = allNames[i];
        target.dispatchEvent(clickEvent);
        document.cookie = "chosenHero=Choose your Hero!";
        var joinButton = document.getElementsByClassName("but2bg");
        joinButton[0].dispatchEvent(clickEvent);
        break;
    }