$("canvas:not(#canvasMH1)").hide();
$(".runWheel:not(#mh1Run)").hide();
let mh1 = new Winwheel({
    'canvasId' : 'canvasMH1',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 17,
    'segments'    :
        [
            {'fillStyle' : '#ACAB5F', 'text' : 'Basarios'},
            {'fillStyle' : '#772026', 'text' : 'Cephadrome'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Diablos'},
            {'fillStyle' : '#772026', 'text' : 'Gendrome'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Gravios'},
            {'fillStyle' : '#772026', 'text' : 'Gypceros'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Iodrome'},
            {'fillStyle' : '#772026', 'text' : 'Khezu'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Monoblos'},
            {'fillStyle' : '#772026', 'text' : 'Plesioth'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Rathalos'},
            {'fillStyle' : '#772026', 'text' : 'Rathian'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Velocidrome'},
            {'fillStyle' : '#772026', 'text' : 'Yian Kut-Ku'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Fatalis'},
            {'fillStyle' : '#772026', 'text' : 'Kirin'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Lao-Shan Lung'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mh1)',
        'callbackAfter' : 'drawTriangle(mh1)'
    }
});

let mhf = new Winwheel({
    'canvasId' : 'canvasMHF',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 31,
    'segments'    :
        [
            {'fillStyle' : '#ACAB5F', 'text' : 'Basarios'},
            {'fillStyle' : '#772026', 'text' : 'Cephadrome'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Diablos'},
            {'fillStyle' : '#772026', 'text' : 'Black Diablos'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Gendrome'},
            {'fillStyle' : '#772026', 'text' : 'Gravios'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Black Gravios'},
            {'fillStyle' : '#772026', 'text' : 'Gypceros'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Purple Gypceros'},
            {'fillStyle' : '#772026', 'text' : 'Iodrome'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Khezu'},
            {'fillStyle' : '#772026', 'text' : 'Red Khezu'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Monoblos'},
            {'fillStyle' : '#772026', 'text' : 'White Monoblos'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Plesioth'},
            {'fillStyle' : '#772026', 'text' : 'Green Plesioth'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Rathalos'},
            {'fillStyle' : '#772026', 'text' : 'Azure Rathalos'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#772026', 'text' : 'Rathian'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#772026', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Velocidrome'},
            {'fillStyle' : '#772026', 'text' : 'Yian Kut-Ku'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Blue Yian Kut-Ku'},
            {'fillStyle' : '#772026', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Fatalis'},
            {'fillStyle' : '#772026', 'text' : 'Crimson Fatalis'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Kirin'},
            {'fillStyle' : '#772026', 'text' : 'Lao-Shan Lung'},
            {'fillStyle' : '#ACAB5F', 'text' : 'Ash Lao-Shan Lung'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhf)',
        'callbackAfter' : 'drawTriangle(mhf)'           
    }
});

let mhf2 = new Winwheel({
    'canvasId' : 'canvasMHF2',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 47,
    'segments'    :
        [
            {'fillStyle' : '#D68439', 'text' : 'Giadrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Velocidrome'},
            {'fillStyle' : '#D68439', 'text' : 'Gendrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Iodrome'},
            {'fillStyle' : '#D68439', 'text' : 'Yian Kut-ku'},
            {'fillStyle' : '#472B1B', 'text' : 'Blue Yian Kut-ku'},
            {'fillStyle' : '#D68439', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#472B1B', 'text' : 'Gypceros'},
            {'fillStyle' : '#D68439', 'text' : 'Purple Gypceros'},
            {'fillStyle' : '#472B1B', 'text' : 'Rathian'},
            {'fillStyle' : '#D68439', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#472B1B', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#D68439', 'text' : 'Rathalos'},
            {'fillStyle' : '#472B1B', 'text' : 'Azure Rathalos'},
            {'fillStyle' : '#D68439', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#472B1B', 'text' : 'Khezu'},
            {'fillStyle' : '#D68439', 'text' : 'Red Khezu'},
            {'fillStyle' : '#472B1B', 'text' : 'Basarios'},
            {'fillStyle' : '#D68439', 'text' : 'Gravios'},
            {'fillStyle' : '#472B1B', 'text' : 'Black Gravios'},
            {'fillStyle' : '#D68439', 'text' : 'Monoblos'},
            {'fillStyle' : '#472B1B', 'text' : 'White Monoblos'},
            {'fillStyle' : '#D68439', 'text' : 'Diablos'},
            {'fillStyle' : '#472B1B', 'text' : 'Black Diablos'},
            {'fillStyle' : '#D68439', 'text' : 'Tigrex'},
            {'fillStyle' : '#472B1B', 'text' : 'Akantor'},
            {'fillStyle' : '#D68439', 'text' : 'Cephadrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Plesioth'},
            {'fillStyle' : '#D68439', 'text' : 'Green Plesioth'},
            {'fillStyle' : '#472B1B', 'text' : 'Daimyo Hermitaur'},
            {'fillStyle' : '#D68439', 'text' : 'Shogun Ceanataur'},
            {'fillStyle' : '#472B1B', 'text' : 'Shen Gaoren'},
            {'fillStyle' : '#D68439', 'text' : 'Bulldrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Congalala'},
            {'fillStyle' : '#D68439', 'text' : 'Blangonga'},
            {'fillStyle' : '#472B1B', 'text' : 'Rajang'},
            {'fillStyle' : '#D68439', 'text' : 'Kirin'},
            {'fillStyle' : '#472B1B', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#D68439', 'text' : 'R.Kushala Daora'},
            {'fillStyle' : '#472B1B', 'text' : 'Chameleos'},
            {'fillStyle' : '#D68439', 'text' : 'Lunastra'},
            {'fillStyle' : '#472B1B', 'text' : 'Teostra'},
            {'fillStyle' : '#D68439', 'text' : 'Lao-Shan Lung'},
            {'fillStyle' : '#472B1B', 'text' : 'A.Lao-Shan Lung'},
            {'fillStyle' : '#D68439', 'text' : 'Fatalis'},
            {'fillStyle' : '#472B1B', 'text' : 'Crimson Fatalis'},
            {'fillStyle' : '#D68439', 'text' : 'White Fatalis'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhf2)',
        'callbackAfter' : 'drawTriangle(mhf2)'
    }
});

let mhfu = new Winwheel({
    'canvasId' : 'canvasMHFU',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 59,
    'segments'    :
        [
            {'fillStyle' : '#D68439', 'text' : 'King Shakalaka'},
            {'fillStyle' : '#472B1B', 'text' : 'Vespoid Queen'},
            {'fillStyle' : '#D68439', 'text' : 'Giadrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Velocidrome'},
            {'fillStyle' : '#D68439', 'text' : 'Gendrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Iodrome'},
            {'fillStyle' : '#D68439', 'text' : 'Yian Kut-ku'},
            {'fillStyle' : '#472B1B', 'text' : 'Blue Yian Kut-ku'},
            {'fillStyle' : '#D68439', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#472B1B', 'text' : 'Gypceros'},
            {'fillStyle' : '#D68439', 'text' : 'Purple Gypceros'},
            {'fillStyle' : '#472B1B', 'text' : 'Hypnocatrice'},
            {'fillStyle' : '#D68439', 'text' : 'Rathian'},
            {'fillStyle' : '#472B1B', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#D68439', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#472B1B', 'text' : 'Rathalos'},
            {'fillStyle' : '#D68439', 'text' : 'Azure Ratahlos'},
            {'fillStyle' : '#472B1B', 'text' : 'Silver Ratahlos'},
            {'fillStyle' : '#D68439', 'text' : 'Khezu'},
            {'fillStyle' : '#472B1B', 'text' : 'Red Khezu'},
            {'fillStyle' : '#D68439', 'text' : 'Basarios'},
            {'fillStyle' : '#472B1B', 'text' : 'Gravios'},
            {'fillStyle' : '#D68439', 'text' : 'Black Gravios'},
            {'fillStyle' : '#472B1B', 'text' : 'Monoblos'},
            {'fillStyle' : '#D68439', 'text' : 'White Monoblos'},
            {'fillStyle' : '#472B1B', 'text' : 'Diablos'},
            {'fillStyle' : '#D68439', 'text' : 'Black Diablos'},
            {'fillStyle' : '#472B1B', 'text' : 'Tigrex'},
            {'fillStyle' : '#D68439', 'text' : 'Nargacuga'},
            {'fillStyle' : '#472B1B', 'text' : 'Akantor'},
            {'fillStyle' : '#D68439', 'text' : 'Ukanlos'},
            {'fillStyle' : '#472B1B', 'text' : 'Cephadrome'},
            {'fillStyle' : '#D68439', 'text' : 'Plesioth'},
            {'fillStyle' : '#472B1B', 'text' : 'Green Plesioth'},
            {'fillStyle' : '#D68439', 'text' : 'Lavasioth'},
            {'fillStyle' : '#472B1B', 'text' : 'Daimyo Hermitaur'},
            {'fillStyle' : '#D68439', 'text' : 'P.DaimyoHermitaur'},
            {'fillStyle' : '#472B1B', 'text' : 'Shogun Ceanataur'},
            {'fillStyle' : '#D68439', 'text' : 'T.ShogunCeanataur'},
            {'fillStyle' : '#472B1B', 'text' : 'Shen Gaoren'},
            {'fillStyle' : '#D68439', 'text' : 'Bulldrome'},
            {'fillStyle' : '#472B1B', 'text' : 'Congalala'},
            {'fillStyle' : '#D68439', 'text' : 'Emerald Congalala'},
            {'fillStyle' : '#472B1B', 'text' : 'Blangonga'},
            {'fillStyle' : '#D68439', 'text' : 'Copper Blangonga'},
            {'fillStyle' : '#472B1B', 'text' : 'Rajang'},
            {'fillStyle' : '#D68439', 'text' : 'Furious Rajang'},
            {'fillStyle' : '#472B1B', 'text' : 'Kirin'},
            {'fillStyle' : '#D68439', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#472B1B', 'text' : 'R.Kushala Daora'},
            {'fillStyle' : '#D68439', 'text' : 'Chameleos'},
            {'fillStyle' : '#472B1B', 'text' : 'Lunastra'},
            {'fillStyle' : '#D68439', 'text' : 'Teostra'},
            {'fillStyle' : '#472B1B', 'text' : 'Lao-Shan Lung'},
            {'fillStyle' : '#D68439', 'text' : 'A.Lao-Shan Lung'},
            {'fillStyle' : '#472B1B', 'text' : 'Yama Tsukami'},
            {'fillStyle' : '#D68439', 'text' : 'Fatalis'},
            {'fillStyle' : '#472B1B', 'text' : 'Crimson Fatalis'},
            {'fillStyle' : '#D68439', 'text' : 'White Fatalis'},


        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhfu)',
        'callbackAfter' : 'drawTriangle(mhfu)'
    }
});

let mhtri = new Winwheel({
    'canvasId' : 'canvasMHTri',
    'textAlignment'  : 'outer',
    'lineWidth' : 2,
    'pointerAngle' : 0,
    'numSegments' : 18,
    'segments'    :
        [
            {'fillStyle' : '#7E5BA2', 'text' : 'Agnaktor'},
            {'fillStyle' : '#BE98C7', 'text' : 'Barioth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Barroth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Deviljho'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Diablos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Gigginox'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Gobul'},
            {'fillStyle' : '#BE98C7', 'text' : 'Great Baggi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Great Jaggi'},
            {'fillStyle' : '#BE98C7', 'text' : 'Lagiacrus'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Qurupeco'},
            {'fillStyle' : '#BE98C7', 'text' : 'Rathalos'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Rathian'},
            {'fillStyle' : '#BE98C7', 'text' : 'Royal Ludroth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Uragaan'},
            {'fillStyle' : '#BE98C7', 'text' : 'Alatreon'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Ceadeus'},
            {'fillStyle' : '#BE98C7', 'text' : 'Jhen Mohran'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhtri)',
        'callbackAfter' : 'drawTriangle(mhtri)'
    }
});

let mhp3rd = new Winwheel({
    'canvasId' : 'canvasMHP3rd',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 40,
    'segments'    :
        [
            {'fillStyle' : '#7E5BA2', 'text' : 'Agnaktor'},
            {'fillStyle' : '#BE98C7', 'text' : 'Glacial Agnaktor'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Akantor'},
            {'fillStyle' : '#BE98C7', 'text' : 'Arzuros'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Barioth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Sand Barioth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Barroth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Jade Barroth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Bulldrome'},
            {'fillStyle' : '#BE98C7', 'text' : 'Deviljho'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Diablos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Black Diablos'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Duramboros'},
            {'fillStyle' : '#BE98C7', 'text' : 'Gigginox'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Baleful Giginox'},
            {'fillStyle' : '#BE98C7', 'text' : 'Great Baggi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Great Jaggi'},
            {'fillStyle' : '#BE98C7', 'text' : 'Great Wroggi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Lagombi'},
            {'fillStyle' : '#BE98C7', 'text' : 'Nargacuga'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Green Nargacuga'},
            {'fillStyle' : '#BE98C7', 'text' : 'Nibelsnarf'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Qurupeco'},
            {'fillStyle' : '#BE98C7', 'text' : 'Crimson Qurupeco'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Rathalos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Rathian'},
            {'fillStyle' : '#BE98C7', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Royal Ludroth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Purple Ludroth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Tigrex'},
            {'fillStyle' : '#BE98C7', 'text' : 'Brute Tigrex'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Ukanlos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Uragaan'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Steel Uragaan'},
            {'fillStyle' : '#BE98C7', 'text' : 'Volvidon'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Zinogre'},
            {'fillStyle' : '#BE98C7', 'text' : 'Alatreon'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Amatsu'},
            {'fillStyle' : '#BE98C7', 'text' : 'Jhen Mohran'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhp3rd)',
        'callbackAfter' : 'drawTriangle(mhp3rd)'
    }
});

let mh3u = new Winwheel({
    'canvasId' : 'canvasMH3U',
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'pointerAngle' : 0,
    'numSegments' : 51,
    'segments'    :
        [
            {'fillStyle' : '#7E5BA2', 'text' : 'Agnaktor'},
            {'fillStyle' : '#BE98C7', 'text' : 'Glacial Agnaktor'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Alatreon'},
            {'fillStyle' : '#BE98C7', 'text' : 'Arzuros'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Barioth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Sand Barioth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Barroth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Jade Barroth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Brachydios'},
            {'fillStyle' : '#BE98C7', 'text' : 'Ceadeus'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Goldbeard Ceadeus'},
            {'fillStyle' : '#BE98C7', 'text' : 'Deviljho'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Savage Deviljho'},
            {'fillStyle' : '#BE98C7', 'text' : 'Diablos'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Black Diablos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Dire Miralis'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Duramboros'},
            {'fillStyle' : '#BE98C7', 'text' : 'Rust Duramboros'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Gigginox'},
            {'fillStyle' : '#BE98C7', 'text' : 'Baleful Giginox'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Gobul'},
            {'fillStyle' : '#BE98C7', 'text' : 'Great Baggi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Great Jaggi'},
            {'fillStyle' : '#BE98C7', 'text' : 'Great Wroggi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Jhen Mohran'},
            {'fillStyle' : '#BE98C7', 'text' : 'Hallow Jhen Mohran'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Lagiacrus'},
            {'fillStyle' : '#BE98C7', 'text' : 'Ivory Lagiacrus'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Abyssal Lagiacrus'},
            {'fillStyle' : '#BE98C7', 'text' : 'Lagombi'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Nargacuga'},
            {'fillStyle' : '#BE98C7', 'text' : 'Green Nargacuga'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Lucent Nargacuga'},
            {'fillStyle' : '#BE98C7', 'text' : 'Nibelsnarf'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Plesioth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Green Plesioth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Qurupeco'},
            {'fillStyle' : '#BE98C7', 'text' : 'Crimson Qurupeco'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Rathalos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Azure Rathalos'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#BE98C7', 'text' : 'Rathian'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#BE98C7', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Royal Ludroth'},
            {'fillStyle' : '#BE98C7', 'text' : 'Purple Ludroth'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Uragaan'},
            {'fillStyle' : '#BE98C7', 'text' : 'Steel Uragaan'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Volvidon'},
            {'fillStyle' : '#BE98C7', 'text' : 'Zinogre'},
            {'fillStyle' : '#7E5BA2', 'text' : 'Stygian Zinogre'},
            
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mh3u)',
        'callbackAfter' : 'drawTriangle(mh3u)'
    }
});

let mh4u = new Winwheel({
    'canvasId' : 'canvasMH4U',
    'lineWidth' : 2,
    'pointerAngle' : 0,
    'textAlignment'  : 'outer',
    'textFillStyle': 'lightgrey',
    'numSegments' : 75,
    'segments'    :
        [
            {'fillStyle' : '#131B10', 'text' : 'Akantor'},
            {'fillStyle' : '#518E40', 'text' : 'Basarios'},
            {'fillStyle' : '#131B10', 'text' : 'Ruby Basarios'},
            {'fillStyle' : '#518E40', 'text' : 'Brachydios'},
            {'fillStyle' : '#131B10', 'text' : 'R.Brachydios'},
            {'fillStyle' : '#518E40', 'text' : 'Cephadrome'},
            {'fillStyle' : '#131B10', 'text' : 'Congalala'},
            {'fillStyle' : '#518E40', 'text' : 'E.Congalala'},
            {'fillStyle' : '#131B10', 'text' : 'Daimyo Hermitaur'},
            {'fillStyle' : '#518E40', 'text' : 'P.Daimyo Hermitaur'},
            {'fillStyle' : '#131B10', 'text' : 'Deviljho'},
            {'fillStyle' : '#518E40', 'text' : 'Savage Deviljho'},
            {'fillStyle' : '#131B10', 'text' : 'Diablos'},
            {'fillStyle' : '#518E40', 'text' : 'Black Diablos'},
            {'fillStyle' : '#131B10', 'text' : 'Gendrome'},
            {'fillStyle' : '#518E40', 'text' : 'Gore Magala'},
            {'fillStyle' : '#131B10', 'text' : 'Chao Gore Magala'},
            {'fillStyle' : '#518E40', 'text' : 'Gravios'},
            {'fillStyle' : '#131B10', 'text' : 'Black Gravios'},
            {'fillStyle' : '#518E40', 'text' : 'Great Jaggi'},
            {'fillStyle' : '#131B10', 'text' : 'Gypceros'},
            {'fillStyle' : '#518E40', 'text' : 'Purple Gypceros'},
            {'fillStyle' : '#131B10', 'text' : 'Iodrome'},
            {'fillStyle' : '#518E40', 'text' : 'Kecha Wacha'},
            {'fillStyle' : '#131B10', 'text' : 'A.Kecha Wacha'},
            {'fillStyle' : '#518E40', 'text' : 'Khezu'},
            {'fillStyle' : '#131B10', 'text' : 'Red Khezu'},
            {'fillStyle' : '#518E40', 'text' : 'Lagombi'},
            {'fillStyle' : '#131B10', 'text' : 'Monoblos'},
            {'fillStyle' : '#518E40', 'text' : 'White Monoblos'},
            {'fillStyle' : '#131B10', 'text' : 'Najarala'},
            {'fillStyle' : '#518E40', 'text' : 'Tidal Najarala'},
            {'fillStyle' : '#131B10', 'text' : 'Nerscylla'},
            {'fillStyle' : '#518E40', 'text' : 'S.Nerscylla'},
            {'fillStyle' : '#131B10', 'text' : 'Rajang'},
            {'fillStyle' : '#518E40', 'text' : 'Furious Rajang'},
            {'fillStyle' : '#131B10', 'text' : 'Rathalos'},
            {'fillStyle' : '#518E40', 'text' : 'Azure Rathalos'},
            {'fillStyle' : '#131B10', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#518E40', 'text' : 'Rathian'},
            {'fillStyle' : '#131B10', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#518E40', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#131B10', 'text' : 'Seltas'},
            {'fillStyle' : '#518E40', 'text' : 'Desert Seltas'},
            {'fillStyle' : '#131B10', 'text' : 'Seltas Queen'},
            {'fillStyle' : '#518E40', 'text' : 'D.Seltas Queen'},
            {'fillStyle' : '#131B10', 'text' : 'Seregios'},
            {'fillStyle' : '#518E40', 'text' : 'Tetsucabra'},
            {'fillStyle' : '#131B10', 'text' : 'B.Tetsucabra'},
            {'fillStyle' : '#518E40', 'text' : 'Tigrex'},
            {'fillStyle' : '#131B10', 'text' : 'Brute Tigrex'},
            {'fillStyle' : '#518E40', 'text' : 'Molten Tigrex'},
            {'fillStyle' : '#131B10', 'text' : 'Ukanlos'},
            {'fillStyle' : '#518E40', 'text' : 'Velocidrome'},
            {'fillStyle' : '#131B10', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#518E40', 'text' : 'Yian Kut-Ku'},
            {'fillStyle' : '#131B10', 'text' : 'Blue Yian Kut-Ku'},
            {'fillStyle' : '#518E40', 'text' : 'Zamtrios'},
            {'fillStyle' : '#131B10', 'text' : 'Tiger Zamtrios'},
            {'fillStyle' : '#518E40', 'text' : 'Zinogre'},
            {'fillStyle' : '#131B10', 'text' : 'Stygian Zinogre'},
            {'fillStyle' : '#518E40', 'text' : 'Chameleos'},
            {'fillStyle' : '#131B10', 'text' : 'Dah\'ren Mohran'},
            {'fillStyle' : '#518E40', 'text' : 'Dalamadur'},
            {'fillStyle' : '#131B10', 'text' : 'Shah Dalamadur'},
            {'fillStyle' : '#518E40', 'text' : 'Fatalis'},
            {'fillStyle' : '#131B10', 'text' : 'Crimson Fatalis'},
            {'fillStyle' : '#518E40', 'text' : 'White Fatalis'},
            {'fillStyle' : '#131B10', 'text' : 'Gogmazios'},
            {'fillStyle' : '#518E40', 'text' : 'Kirin'},
            {'fillStyle' : '#131B10', 'text' : 'Oroshi Kirin'},
            {'fillStyle' : '#518E40', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#131B10', 'text' : 'R.Kushala Daora'},
            {'fillStyle' : '#518E40', 'text' : 'Shagaru Magala'},
            {'fillStyle' : '#131B10', 'text' : 'Teostra'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mh4u)',
        'callbackAfter' : 'drawTriangle(mh4u)'
    }
});

let mhgu = new Winwheel({
    'canvasId' : 'canvasMHGU',
    'textAlignment'  : 'outer',
    'lineWidth' : 2,
    'textFillStyle': 'lightgrey',
    'pointerAngle' : 0,
    'numSegments' : 93,
    'segments'    :
        [
            {'fillStyle' : '#131B10', 'text' : 'Agnaktor'},
            {'fillStyle' : '#518E40', 'text' : 'Akantor'},
            {'fillStyle' : '#131B10', 'text' : 'Arzuros'},
            {'fillStyle' : '#518E40', 'text' : 'Red Arzuros'},
            {'fillStyle' : '#131B10', 'text' : 'Astalos'},
            {'fillStyle' : '#518E40', 'text' : 'Bolt Astalos'},
            {'fillStyle' : '#131B10', 'text' : 'Ahtal-Ka'},
            {'fillStyle' : '#518E40', 'text' : 'Barioth'},
            {'fillStyle' : '#131B10', 'text' : 'Barroth'},
            {'fillStyle' : '#518E40', 'text' : 'Basarios'},
            {'fillStyle' : '#131B10', 'text' : 'Blangonga'},
            {'fillStyle' : '#518E40', 'text' : 'Brachydios'},
            {'fillStyle' : '#131B10', 'text' : 'R.Brachydios'},
            {'fillStyle' : '#518E40', 'text' : 'Bulldrome'},
            {'fillStyle' : '#131B10', 'text' : 'Cephadrome'},
            {'fillStyle' : '#518E40', 'text' : 'Congalala'},
            {'fillStyle' : '#131B10', 'text' : 'Daimyo Hermitaur'},
            {'fillStyle' : '#518E40', 'text' : 'Stone Hermitaur'},
            {'fillStyle' : '#131B10', 'text' : 'Deviljho'},
            {'fillStyle' : '#518E40', 'text' : 'Savage Deviljho'},
            {'fillStyle' : '#131B10', 'text' : 'Diablos'},
            {'fillStyle' : '#518E40', 'text' : 'Blood Diablos'},
            {'fillStyle' : '#131B10', 'text' : 'Duramboros'},
            {'fillStyle' : '#518E40', 'text' : 'Gammoth'},
            {'fillStyle' : '#131B10', 'text' : 'Elder Gammoth'},
            {'fillStyle' : '#518E40', 'text' : 'Gendrome'},
            {'fillStyle' : '#131B10', 'text' : 'Giadrome'},
            {'fillStyle' : '#518E40', 'text' : 'Glavenus'},
            {'fillStyle' : '#131B10', 'text' : 'Hell Glavenus'},
            {'fillStyle' : '#518E40', 'text' : 'Gore Magala'},
            {'fillStyle' : '#131B10', 'text' : 'Chao Gore Magala'},
            {'fillStyle' : '#518E40', 'text' : 'Gravios'},
            {'fillStyle' : '#131B10', 'text' : 'Great Maccao'},
            {'fillStyle' : '#518E40', 'text' : 'Gypceros'},
            {'fillStyle' : '#131B10', 'text' : 'Iodrome'},
            {'fillStyle' : '#518E40', 'text' : 'Kecha Wacha'},
            {'fillStyle' : '#131B10', 'text' : 'Khezu'},
            {'fillStyle' : '#518E40', 'text' : 'Lagiacrus'},
            {'fillStyle' : '#131B10', 'text' : 'Lagombi'},
            {'fillStyle' : '#518E40', 'text' : 'Snow Lagombi'},
            {'fillStyle' : '#131B10', 'text' : 'Lavasioth'},
            {'fillStyle' : '#518E40', 'text' : 'Malfestio'},
            {'fillStyle' : '#131B10', 'text' : 'Night Malfestio'},
            {'fillStyle' : '#518E40', 'text' : 'Mizutsune'},
            {'fillStyle' : '#131B10', 'text' : 'Soul Mizutsune'},
            {'fillStyle' : '#518E40', 'text' : 'Najarala'},
            {'fillStyle' : '#131B10', 'text' : 'Nargacuga'},
            {'fillStyle' : '#518E40', 'text' : 'Silver Nargacuga'},
            {'fillStyle' : '#131B10', 'text' : 'Nerscylla'},
            {'fillStyle' : '#518E40', 'text' : 'Nibelsnarf'},
            {'fillStyle' : '#131B10', 'text' : 'Plesioth'},
            {'fillStyle' : '#518E40', 'text' : 'Rajang'},
            {'fillStyle' : '#131B10', 'text' : 'Furious Rajang'},
            {'fillStyle' : '#518E40', 'text' : 'Rathalos'},
            {'fillStyle' : '#131B10', 'text' : 'Dread Rathalos'},
            {'fillStyle' : '#518E40', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#131B10', 'text' : 'Rathian'},
            {'fillStyle' : '#518E40', 'text' : 'Dread Rathian'},
            {'fillStyle' : '#131B10', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#518E40', 'text' : 'Royal Ludroth'},
            {'fillStyle' : '#131B10', 'text' : 'Seltas'},
            {'fillStyle' : '#518E40', 'text' : 'Seltas Queen'},
            {'fillStyle' : '#131B10', 'text' : 'Seregios'},
            {'fillStyle' : '#518E40', 'text' : 'Shogun Ceanataur'},
            {'fillStyle' : '#131B10', 'text' : 'Rust Ceanataur'},
            {'fillStyle' : '#518E40', 'text' : 'Tetsucabra'},
            {'fillStyle' : '#131B10', 'text' : 'Drill Tetsucabra'},
            {'fillStyle' : '#518E40', 'text' : 'Tigrex'},
            {'fillStyle' : '#131B10', 'text' : 'Grimclaw Tigrex'},
            {'fillStyle' : '#518E40', 'text' : 'Ukanlos'},
            {'fillStyle' : '#131B10', 'text' : 'Uragaan'},
            {'fillStyle' : '#518E40', 'text' : 'Crystal Uragaan'},
            {'fillStyle' : '#131B10', 'text' : 'Velocidrome'},
            {'fillStyle' : '#518E40', 'text' : 'Volvidon'},
            {'fillStyle' : '#131B10', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#518E40', 'text' : 'D.Yian Garuga'},
            {'fillStyle' : '#131B10', 'text' : 'Yian Kut-Ku'},
            {'fillStyle' : '#518E40', 'text' : 'Zamtrios'},
            {'fillStyle' : '#131B10', 'text' : 'Zinogre'},
            {'fillStyle' : '#518E40', 'text' : 'Thunder Zinogre'},
            {'fillStyle' : '#131B10', 'text' : 'Alatreon'},
            {'fillStyle' : '#518E40', 'text' : 'Amatsu'},
            {'fillStyle' : '#131B10', 'text' : 'Chameleos'},
            {'fillStyle' : '#518E40', 'text' : 'Fatalis'},
            {'fillStyle' : '#131B10', 'text' : 'Crimson Fatalis'},
            {'fillStyle' : '#518E40', 'text' : 'White Fatalis'},
            {'fillStyle' : '#131B10', 'text' : 'Kirin'},
            {'fillStyle' : '#518E40', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#131B10', 'text' : 'Lao-Shan Lung'},
            {'fillStyle' : '#518E40', 'text' : 'Nakarkos'},
            {'fillStyle' : '#131B10', 'text' : 'Shagaru Magala'},
            {'fillStyle' : '#518E40', 'text' : 'Teostra'},
            {'fillStyle' : '#131B10', 'text' : 'Valstrax'},  
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhgu)',
        'callbackAfter' : 'drawTriangle(mhgu)'
    }
});

let mhwi = new Winwheel({
    'canvasId' : 'canvasMHWI',
    'lineWidth' : 2,
    'pointerAngle' : 0,
    'textAlignment'  : 'outer',
    'numSegments' : 71,
    'segments'    :
        [
            {'fillStyle' : '#AFAA5E', 'text' : 'Alatreon'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Ancient Leshen'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Anjanath'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Fulgur Anjanath'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Banbaro'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Barioth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Frostfang Barioth'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Barroth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Bazelgeuse'},
            {'fillStyle' : '#D8D8D8', 'text' : 'S.Bazelgeuse'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Behemoth'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Beotodus'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Brachydios'},
            {'fillStyle' : '#D8D8D8', 'text' : 'R.Brachydios'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Deviljho'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Savage Deviljho'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Diablos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Black Diablos'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Dodogama'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Fatalis'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Glavenus'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Acidic Glavenus'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Great Girros'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Great Jagras'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Jyuratodus'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Kirin'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Kulu-Ya-Ku'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Kulve Taroth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Lavasioth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Legiana'},
            {'fillStyle' : '#D8D8D8', 'text' : 'S.Legiana'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Leshen'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Lunastra'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Namielle'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Nargacuga'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Nergigante'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Ruiner Nergigante'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Odogaron'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Ebony Odogaron'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Paolumu'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Night Paolumu'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Pukei-Pukei'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Coral Pukei-Pukei'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Radobaan'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Rajang'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Furious Rajang'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Rathalos'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Azure Rathalos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Silver Rathalos'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Rathian'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Pink Rathian'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Gold Rathian'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Safi\'jiiva'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Shara Ishvalda'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Teostra'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Tigrex'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Brute Tigrex'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Tobi-Kadachi'},
            {'fillStyle' : '#D8D8D8', 'text' : 'V.Tobi-Kadachi'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Tzitzi-Ya-Ku'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Uragaan'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Vaal Hazak'},
            {'fillStyle' : '#D8D8D8', 'text' : 'B.Vaal Hazak'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Velkhana'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Xeno\'jiiva'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Yian Garuga'},
            {'fillStyle' : '#D8D8D8', 'text' : 'S.Yian Garuga'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Zinogre'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Stygian Zinogre'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Zorah Magdaros'},            
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhwi)',
        'callbackAfter' : 'drawTriangle(mhwi)'
    }
});


let mhrs = new Winwheel({
    'canvasId' : 'canvasMHRS',
    'pointerAngle' : 0,
    'lineWidth' : 2,
    'textAlignment'  : 'outer',
    'numSegments' : 65,
    'segments'    :
        [
            {'fillStyle' : '#AFAA5E', 'text' : 'Aknosom'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Almudron'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Magma Almudron'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Anjanath'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Astalos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Arzuros'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Apex Arzuros'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Barioth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Barroth'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Bazelguese'},
            {'fillStyle' : '#AFAA5E', 'text' : 'S.Bazelguese'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Basarios'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Bishaten'},
            {'fillStyle' : '#D8D8D8', 'text' : 'B.Orange Bishaten'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Chameleos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Daimyo Hermitaur'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Diablos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Apex Diablos'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Espinas'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Gaismagorm'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Garangolm'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Gore Magala'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Goss Harag'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Great Baggi'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Great Izuchi'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Great Wroggi'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Jyuratodus'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Khezu'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Kulu-Ya-Ku'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Kushala Daora'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Lagombi'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Lunagaron'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Magnamalo'},
            {'fillStyle' : '#D8D8D8', 'text' : 'S.Magnamalo'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Malzeno'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Mizutsune'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Apex Mizutsune'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Nargacuga'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Lucent Nargacuga'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Pukei-Pukei'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Rajang'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Furious Rajang'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Rakna-Kadaki'},
            {'fillStyle' : '#D8D8D8', 'text' : 'P.Rakna-Kadaki'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Rathalos'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Apex Rathalos'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Rathian'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Apex Rathian'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Royal Ludroth'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Seregios'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Shagaru Magala'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Shogun Ceanataur'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Somnacanth'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Aurora Somnacanth'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Teostra'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Tetranadon'},
            {'fillStyle' : '#AFAA5E', 'text' : 'T.Serpent Narwa'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Narwa the Allmother'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Tigrex'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Tobi-Kadachi'},
            {'fillStyle' : '#AFAA5E', 'text' : 'C.Glow Valstrax'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Volvidon'},
            {'fillStyle' : '#AFAA5E', 'text' : 'W.Serpent Ibushi'},
            {'fillStyle' : '#D8D8D8', 'text' : 'Zinogre'},
            {'fillStyle' : '#AFAA5E', 'text' : 'Apex Zinogre'},
        ],
        'animation' :                   
    {
        'type'     : 'spinToStop',
        'duration' : Math.floor(Math.random() * 15) + 7,           
        'spins'    : Math.floor(Math.random() * 20) + 6,
        'callbackFinished' : 'showResult(mhrs)',
        'callbackAfter' : 'drawTriangle(mhrs)'
    }
});

drawTriangle(mh1);
drawTriangle(mhf);
drawTriangle(mhf2);
drawTriangle(mhfu);
drawTriangle(mhtri);
drawTriangle(mhp3rd);
drawTriangle(mh3u);
drawTriangle(mh4u);
drawTriangle(mhgu);
drawTriangle(mhwi);
drawTriangle(mhrs);
 
function drawTriangle(game)
{
    // Get the canvas context the wheel uses.
    let ctx = game.ctx;

    ctx.strokeStyle = 'black';     // Set line colour.
    ctx.fillStyle   = 'lightgrey';     // Set fill colour.
    ctx.lineWidth   = 2;
    ctx.beginPath();              // Begin path.
    ctx.moveTo(570, 1);        // Move to initial position.
    ctx.lineTo(630, 1);630           // Draw lines to make the shape.
    ctx.lineTo(600, 25);600//metade
    ctx.lineTo(570, 1);
    ctx.stroke();                 // Complete the path by stroking (draw lines).
    ctx.fill();                   // Then fill.
}

let wheelSpin = false;

function resetWheel(game)
{
    game.stopAnimation(false)
    game.rotationAngle = 0
    game.draw()
    drawTriangle(game)
}

function showResult(game)
{
    let result = game.getIndicatedSegment();
    alert("The monster is " + result.text + " !!!");
    resetWheel(game)
}

document.addEventListener('DOMContentLoaded', () => {
    let btnMH1 = document.querySelector("#mh1")
    let btnMHF = document.querySelector("#mhf")
    let btnMHF2 = document.querySelector("#mhf2")
    let btnMHFU = document.querySelector("#mhfu")
    let btnMHTri = document.querySelector("#mhtri")
    let btnMHP3rd = document.querySelector("#mhp3rd")
    let btnMH3U = document.querySelector("#mh3u")
    let btnMH4U = document.querySelector("#mh4u")
    let btnMHGU = document.querySelector("#mhgu")
    let btnMHWI = document.querySelector("#mhwi")
    let btnMHRS = document.querySelector("#mhrs")
    let contentSH = true;
    btnMH1.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMH1").show();
            $("#mh1Run").show();
            $("canvas:not(#canvasMH1)").hide();
            $(".runWheel:not(#mh1Run)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMH1").toggle();
            $("#mh1Run").toggle();
            $("canvas:not(#canvasMH1)").hide();
            $(".runWheel:not(#mh1Run)").hide();
        }
          
    });
    btnMHF.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHF").show()
            $("#mhfRun").show();
            $("canvas:not(#canvasMHF)").hide();
            $(".runWheel:not(#mhfRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHF").toggle();
            $("#mhfRun").toggle();
            $("canvas:not(#canvasMHF)").hide();
            $(".runWheel:not(#mhfRun)").hide();
        }
    });
    btnMHF2.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHF2").show()
            $("canvas:not(#canvasMHF2)").hide();
            $("#mhf2Run").show();
            $(".runWheel:not(#mhf2Run)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHF2").toggle();
            $("canvas:not(#canvasMHF2)").hide();
            $("#mhf2Run").toggle();
            $(".runWheel:not(#mhf2Run)").hide();
        }
    });
    btnMHFU.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHFU").show()
            $("canvas:not(#canvasMHFU)").hide();
            $("#mhfuRun").show();
            $(".runWheel:not(#mhfuRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHFU").toggle();
            $("canvas:not(#canvasMHFU)").hide();
            $("#mhfuRun").toggle();
            $(".runWheel:not(#mhfuRun)").hide();
        }
    });    
    btnMHTri.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHTri").show()
            $("canvas:not(#canvasMHTri)").hide();
            $("#mhtriRun").show();
            $(".runWheel:not(#mhtriRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHTri").toggle();
            $("canvas:not(#canvasMHTri)").hide();
            $("#mhtriRun").toggle();
            $(".runWheel:not(#mhtriRun)").hide();
        }
    });    
    btnMHP3rd.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHP3rd").show()
            $("canvas:not(#canvasMHP3rd)").hide();
            $("#mhp3rdRun").show();
            $(".runWheel:not(#mhp3rdRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHP3rd").toggle();
            $("canvas:not(#canvasMHP3rd)").hide();
            $("#mhp3rdRun").toggle();
            $(".runWheel:not(#mhp3rdRun)").hide();
        }
    });    
    btnMH3U.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMH3U").show()
            $("canvas:not(#canvasMH3U)").hide();
            $("#mh3uRun").show();
            $(".runWheel:not(#mh3uRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMH3U").toggle();
            $("canvas:not(#canvasMH3U)").hide();
            $("#mh3uRun").toggle();
            $(".runWheel:not(#mh3uRun)").hide();
        }
    });    
    btnMH4U.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMH4U").show()
            $("canvas:not(#canvasMH4U)").hide();
            $("#mh4uRun").show();
            $(".runWheel:not(#mh4uRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMH4U").toggle();
            $("canvas:not(#canvasMH4U)").hide();
            $("#mh4uRun").toggle();
            $(".runWheel:not(#mh4uRun)").hide();
        }
    });    
    btnMHGU.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHGU").show()
            $("canvas:not(#canvasMHGU)").hide();
            $("#mhguRun").show();
            $(".runWheel:not(#mhguRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHGU").toggle();
            $("canvas:not(#canvasMHGU)").hide();
            $("#mhguRun").toggle();
            $(".runWheel:not(#mhguRun)").hide();
        }
    });    
    btnMHWI.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHWI").show()
            $("canvas:not(#canvasMHWI)").hide();
            $("#mhwiRun").show();
            $(".runWheel:not(#mhwiRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHWI").toggle();
            $("canvas:not(#canvasMHWI)").hide();
            $("#mhwiRun").toggle();
            $(".runWheel:not(#mhwiRun)").hide();
        }
    });    
    btnMHRS.addEventListener("click", function()
    {
        if (contentSH)
        {
            contentSH = false;
            $("#canvasMHRS").show()
            $("canvas:not(#canvasMHRS)").hide();
            $("#mhrsRun").show();
            $(".runWheel:not(#mhrsRun)").hide();
        }
        else
        {
            contentSH = true;
            $("#canvasMHRS").toggle();
            $("canvas:not(#canvasMHRS)").hide();
            $("#mhrsRun").toggle();
            $(".runWheel:not(#mhrsRun)").hide();
        }
    });        
    console.log('DOM fully loaded and parsed');
});