
let australie = {
    picture :"img/australie.jpg",
    name:"Australie",
    climat : "Une grande partie du pays est donc aride, avec un climat sec. Dans le nord, le climat est tropical",
    continent : "L'océanie",
    capital : "La capital est Canberra",
    population : "Sa population est estimée à près de 26 millions d'habitants",
    monnaie :"La monnaie en Australie est le dollar australien ( AUD )",
}
let usa = {
    picture :"img/USA.jpg",
    name:"Etats-unies",
    climat :"Le climat est globalement continental subarctique aux hivers glacés et aux étés frais ou froids. Dans l'extrême nord, le climat est polaire. Sur la côte sud-est, il est généralement océanique. Il faut aussi tenir compte de l'altitude et de la proximité de la mer.",
    continent : "Amérique du Nord",
    capital :"La capital est Washington",
    population : "Sa population est estimée à près de 331,9 millions d'habitants",
    monnaie : "L'unité monétaire est le dollar américain ( USD )",
}
let newZealand = {
    picture :"img/new-zelande.jpg",
    name:"Nouvelle-Zélande",
    climat :"La Nouvelle-Zélande a un climat de type tempéré océanique avec une tendance subtropicale au Nord.",
    continent : "L'océanie",
    capital : "La capital est Wellington",
    population :"Sa population est estimée à près de 5,123 millions d'habitants",
    monnaie : "La monnaie de la Nouvelle Zelande est le dollar néo-zélandais ( NZD ou $NZ )",
}
let espagne = {
    picture :"img/espagne.jpg",
    name:"Espagne",
    climat :"Le climat de l'Espagne est pour la plus grande partie du territoire un climat méditerranéen. Les températures moyennes annuelles y sont élevées et les précipitations relativement faibles voire insuffisantes en été.",
    continent :"Europe",
    capital : "La capital est Madrid",
    population : "Sa population est estimée à près de 47,42 millions d'habitants",
    monnaie : "L'euro est la monnaie en vigueur dans le pays( EUR )",
}
let portugal = {
    picture :"img/portugal.jpg",
    name:"Portugal",
    climat :"Le climat du Portugal est de type méditerranéen selon la classification de Köppen. D'après cette classification, le climat est caractérisé essentiellement par des étés chauds et secs et des hivers plus ou moins doux.",
    continent : "Europe",
    capital : "La capital est Lisbonne",
    population : "Sa population est estimée à près de 10,33 millions d'habitants",
    monnaie : "L'Euro est la monnaie en cours au Portugal depuis l'année 2002.( EUR )",
}
let madagascar = {
    picture :"img/madagascar.jpg",
    name:"Madagascar",
    climat :"Le climat à Madagascar est assez humide sur la côte Est. Le pic d'humidité a lieu de décembre à avril même si les précipitations peuvent survenir à d'autres moments de l'année, en dehors de la saison des pluies.",
    continent : "Afrique",
    capital : "La capital est Tananarive",
    population : "Sa population est estimée à près de 28,92 millions d'habitants",
    monnaie : "L'ariary  est une monnaie traditionnelle de la République de Madagascar( MGA )",
}
let grece = {
    picture :"img/grece.jpg",
    name:"Grèce",
    climat :"La Grèce jouit d'un climat méditerrannéen dans l'ensemble, qui varie cependant selon les régions, avec des hivers doux et pluvieux et des étés très chauds et secs, rafraîchis cependant par les vents du nord.",
    continent :"Europe",
    capital : "La capital est Athènes",
    population :"Sa population est estimée à près de 10,64 millions millions d'habitants",
    monnaie :"La monnaie grecque est l'Euro.( EUR)",
}
let perou = {
    picture :"img/perou.jpg",
    name:"Perou",
    climat :"Le Pérou, vaste pays, a plusieurs climats : Lima et les côtes, climat tempéré : préférez les mois de décembre à avril. Les Andes et le Machu Picchu, climat plus froid : la saison sèche entre mai et octobre est la plus favorable. La région amazonienne, climat tropical : les mois conseillés sont juillet et août.",
    continent : "Amérique du Sud",
    capital : "La capital est Lima",
    population : "Sa population est estimée à près de 33,72 millions d'habitants",
    monnaie :"La devise péruvienne est le Nouveau Sol, ou le Nuevo Sol.( PEN )",
}
let laos = {
    picture :"img/laos.jpg",
    name: "Laos",
    climat :"Le climat au Laos est de type tropical humide, avec deux grandes saisons. Il fait chaud toute l'année, avec une température moyenne de 29°C en janvier et de 35°C en avril. La saison sèche, de novembre à mars, est parfaite pour partir au Laos.",
    continent : "Asie",
    capital : "La capital est Vientiane",
    population : "Sa population est estimée à près de 7,425 millions d'habitants",
    monnaie : "La monnaie nationale de la République démocratique populaire du Laos est le kip.( LAK )",
}
let philippine = {
    picture :"img/philippines.jpg",
    name:"Philippines",
    climat :"Situé près de l'équateur, l'archipel des Philippines est soumis à un climat tropical. Il y fait chaud et humide toute l'année. On distingue deux types de moussons : Amihan est la mousson du nord-est, caractérisée par des vents frais et secs.",
    continent : "Asie",
    capital : "La capital est Manille",
    population : "Sa population est estimée à près de 113,9 millions millions d'habitants",
    monnaie : "Le nom officiel de la devise nationale est peso philippin (PHP).",
}
let carte = [australie , usa , newZealand , espagne , portugal , madagascar , grece  
    , perou , laos , philippine ]
    

    function cartesGenerateur() {
        let main = document.querySelector("main");
    
        carte.forEach(element => {
            // -------------CREATION DES BALISES-------------
            let section = document.createElement("section");
            let imgCarte = document.createElement("img")
            let titre = document.createElement("h1");
            let blocClimat = document.createElement("article");
            let titreClimat = document.createElement("h2");
            let paraClimat = document.createElement("p");
            let blocContinent = document.createElement("article");
            let titreContinent = document.createElement("h2");
            let paraContinent = document.createElement("p");
            let blocCapital = document.createElement("article");
            let titreCapital = document.createElement("h2");
            let paraCapital = document.createElement("p");
            let blocPopulation = document.createElement("article");
            let titrePopulation = document.createElement("h2");
            let paraPopulation = document.createElement("p");
            let blocMonnaie = document.createElement("article");
            let titreMonnaie = document.createElement("h2");
            let paraMonnaie = document.createElement("p");
            let button = document.createElement("button");
            
    
            // -------------CREATION DES CLASSES-------------
            section.classList.add("carte", `carte--${element.name}`);
            titre.classList.add("carte__pays");
            section.classList.add("carte");
            blocClimat.classList.add("carte__climat");
            blocContinent.classList.add("carte__continent");
            blocCapital.classList.add("carte__capital");
            blocPopulation.classList.add("carte__population");
            blocMonnaie.classList.add("carte__monnaie");
            imgCarte.classList.add("carte__img");
            imgCarte.src=element.picture;
    
            // ------------Ajoute les éléments créés à la section-----------------
            section.appendChild(button);
            section.appendChild(titre);
            section.appendChild(blocClimat);
            section.appendChild(blocContinent);
            section.appendChild(blocCapital);
            section.appendChild(blocPopulation);
            section.appendChild(blocMonnaie);
            section.appendChild(imgCarte);
            
    
            // -----------------Ajoute la section au "main"-------------------
            main.appendChild(section);
    
            // -----------------Remplissage des éléments avec les données-------------------
            button.textContent = "x"
            titre.textContent = element.name;
            titreClimat.textContent = "Climat";
            paraClimat.textContent = element.climat;
    
            titreContinent.textContent = "Continent";
            paraContinent.textContent = element.continent;
    
            titreCapital.textContent = "Capital";
            paraCapital.textContent = element.capital;
    
            titrePopulation.textContent = "Population";
            paraPopulation.textContent = element.population;
    
            titreMonnaie.textContent = "Monnaie";
            paraMonnaie.textContent = element.monnaie;
            // Evenement___________________________________________________
    
            button.addEventListener("click", function() {
                // Supprime la carte correspondante
                main.removeChild(section);
            });
            // ------------Ajoute les éléments remplis à leurs blocs correspondants-----------------
            blocClimat.appendChild(titreClimat);
            blocClimat.appendChild(paraClimat);
    
            blocContinent.appendChild(titreContinent);
            blocContinent.appendChild(paraContinent);
    
            blocCapital.appendChild(titreCapital);
            blocCapital.appendChild(paraCapital);
    
            blocPopulation.appendChild(titrePopulation);
            blocPopulation.appendChild(paraPopulation);
    
            blocMonnaie.appendChild(titreMonnaie);
            blocMonnaie.appendChild(paraMonnaie);
        });
    }
    
    cartesGenerateur();