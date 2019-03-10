function dolciDiRiso() {/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/HrQYVTzo
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(952, 652, Phaser.AUTO, 'giocoDolci', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#FFFFF';

    game.load.baseURL = './assets';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', '/player.png');
    game.load.image('piatto', '/piatto_r.png');

    game.load.image('ingrediente1', '/ingrediente2_acqua_2.png');
    game.load.image('ingrediente2', '/ingrediente1_riso_2.png');
    game.load.image('ingrediente3', '/ingrediente6_zucchero_2.png');
    game.load.image('ingrediente4', '/ingrediente11_cannella_2.png');
    game.load.image('ingrediente5', '/ingrediente3_mele_2.png');
    game.load.image('ingrediente6', '/ingrediente4_avocado_2.png');
    game.load.image('ingrediente7', '/ingrediente5_funghi_2.png');
    game.load.image('ingrediente8', '/ingrediente7_amido_2.png');
    game.load.image('ingrediente9', '/ingrediente9_zenzero_3.png');
    game.load.image('ingrediente10', '/ingrediente9_anko_2.png');
    game.load.image('ingrediente11', '/ingrediente12_fichi_2.png');
    game.load.image('ingrediente12', '/ingrediente13_salsadisoia_2.png');
    game.load.image('ingrediente13', '/ingrediente14_brodagliaverde_2.png');
    game.load.image('ingrediente14', '/ingrediente15_cerealigenerici_2.png');
    game.load.image('ingrediente15', '/ingrediente16_pappettarosa_2.png');
    game.load.image('ingrediente16', '/ingrediente19_sostanzabuffa_2.png');
    game.load.image('ingrediente17', '/ingrediente20_petali_2.png');
    game.load.image('ingrediente18', '/ingrediente8_fragole_2.png');
    game.load.image('ingrediente19', '/ingrediente17_broccoli_2.png');
    game.load.image('ingrediente20', '/ingrediente18_pesce_2.png');
    game.load.image('sfondo', '/Sfondo_dolci.png');
    game.load.image('carta', '/carta.png');
    game.load.image('barra', '/sbarraTempo.png');

}

var player;

var ingrediente1;
var ingrediente2;
var ingrediente3;
var ingrediente4;
var ingrediente5;
var ingrediente6;
var ingrediente7;
var ingrediente8;
var ingrediente9;
var ingrediente10;
var ingrediente11;
var ingrediente12;
var ingrediente13;
var ingrediente14;
var ingrediente15;
var ingrediente16;
var ingrediente17;
var ingrediente18;
var ingrediente19;
var ingrediente20;
var ingredienti;

var time;
var ordine = 0;

var victorytext;
var subtext;
var text;

var instructions;

var tempo;
var timer;
var timeText;

var sug1;
var sug2;
var sug3;
var sug4;
var sug5;
var volte = 0;

var ingrY;

var sfondo;
var carta;

var barre;

var ricetta;
var ricetta2;
var ricetta3;
var ricetta4;
var ricetta5;

var più2;

var opacità0 = 0;

var recipe;
var recipe2;
var recipe3;
var recipe4;
var recipe5;

function create() {
time = 0;
ordine = 0;
  //sfondo
  sfondo = game.add.sprite(0, 0, 'sfondo');

  //cartiglio sul quale sta il suggerimento
  carta = game.add.sprite(952/2-100, 50, 'carta');

  //tempo max dopo il quale perdi
  tempo = 10;

  //indicatore del tempo
  barra = game.add.sprite(952/2-100, 550, 'barra');
    barre = game.add.group();
  barre.add(barra);

    //piatto
    player = game.add.sprite(952/2-50, 652/2-50, 'player');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    piatto = game.add.sprite(345, 652/2-252/2, 'piatto');
    game.physics.arcade.enable(piatto);

     //world bounds
    game.world.setBounds(0,0,952,652);

    //suggerimenti
    var sugx = 952/2-25;
    var sugy = 82;



    sug1 = game.add.sprite(sugx, sugy, 'ingrediente1');
         game.physics.arcade.enable(sug1);
         sug1.body.immovable = true;
         var style2 = { font: "bold 16px nanami", fill: "#6e532d", boundsAlignH: "center", boundsAlignV: "middle" };
         recipe = game.add.text(25, -10, "Versa l'acqua", style2);
         sug1.addChild(recipe);
         recipe.anchor.setTo(0.5, 0.5);

    sug2 = game.add.sprite(sugx, sugy, 'ingrediente2');
         game.physics.arcade.enable(sug2);
        sug2.body.immovable = true;
        recipe2 = game.add.text(25, -10, "aggiungi il riso", style2);
        recipe2.anchor.setTo(0.5, 0.5);
        sug2.addChild(recipe2);

    sug3= game.add.sprite(sugx, sugy, 'ingrediente3');
         game.physics.arcade.enable(sug3);
         sug3.body.immovable = true;
         recipe3 = game.add.text(25, -10, "aggiungi lo zucchero", style2);
         recipe3.anchor.setTo(0.5, 0.5);
         sug3.addChild(recipe3);

    sug4= game.add.sprite(sugx, sugy, 'ingrediente4');
         game.physics.arcade.enable(sug4);
         sug4.body.immovable = true;
         recipe4 = game.add.text(25, -10, "aggiungi la cannella", style2);
         recipe4.anchor.setTo(0.5, 0.5);
         sug4.addChild(recipe4);

    sug5= game.add.sprite(sugx, sugy, 'ingrediente8');
          game.physics.arcade.enable(sug5);
          sug5.body.immovable = true;
          recipe5 = game.add.text(25, -10, "aggiungi l'amido", style2);
            recipe5.anchor.setTo(0.5, 0.5);
          sug5.addChild(recipe5);

          //l'opacità del suggerimento è zero
          sug1.alpha = 0;
          sug2.alpha = 0;
          sug3.alpha = 0;
          sug4.alpha = 0;
          sug5.alpha = 0;

  var suggerimenti = [sug1, sug2, sug3, sug4, sug5];

  function ricettarandom() {

  var index1 = Math.floor(Math.random()*suggerimenti.length);
  var val1 = suggerimenti[index1];

  suggerimenti.splice(index1, 1);
  return val1;
  }

 ricetta = ricettarandom();
 ricetta2 = ricettarandom();
 ricetta3 = ricettarandom();
 ricetta4 = ricettarandom();
 ricetta5 = ricettarandom();

//creazione degli ingredienti
//si crea un array vuoto
var uniqueRandoms = [];
//indica il n di elementi in totale: 4x5=20
var numRandoms = 20;
function makeUniqueRandom() {
    //se l'array è vuoto, lo riempie fino al valore di numRandoms
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    //prende un numero random compreso nella lunghezza dell'array
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    //prende il valore dell'array sta al posto index
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);
    //l'intera funzione restituisce val
    return val;

}

  //distanza del primo gruppo di ingredienti dal bordo sx
  var x1 = 125;
  //distanza del secondo gruppo di ingredienti dal bordo sx
  var x2 = 500;
      //prende un numero da 1 a 20
      var ingr1coordinata = makeUniqueRandom();
      //divide gli ingredienti in due gruppi
     if (ingr1coordinata < 10) {
     var v1 = x1;
      } else {var v1 = x2;}

     ingrediente1 = game.add.sprite(Math.floor(ingr1coordinata / 5)*100+v1, ingr1coordinata % 5 *100+100, 'ingrediente1');
         game.physics.arcade.enable(ingrediente1);
         ingrediente1.body.immovable = true;
         if(ricetta == sug1) {
           ingrediente1.anchor.setTo(0.5, 0.5);
           game.add.tween(ingrediente1.scale).to( { x: 1.15, y: 1.15 }, 300, Phaser.Easing.Linear.None, true, 0, 500, true);
         }

     var ingr2coordinata = makeUniqueRandom();
     if (ingr2coordinata < 10) {
          var v2 = x1;
        } else {var v2 = x2;}

     ingrediente2 = game.add.sprite( Math.floor(ingr2coordinata / 5)*100+v2, ingr2coordinata % 5 *100+100, 'ingrediente2');
         game.physics.arcade.enable(ingrediente2);
         ingrediente2.body.immovable = true;
        if (ricetta == sug2) {
           ingrediente2.anchor.setTo(0.5, 0.5);
           game.add.tween(ingrediente2.scale).to( { x: 1.15, y: 1.15 }, 300, Phaser.Easing.Linear.None, true, 0, 500, true);
         }

     var ingr3coordinata = makeUniqueRandom();
     if (ingr3coordinata < 10) {
          var v3 = x1;
        } else {var v3 = x2;}

     ingrediente3= game.add.sprite(Math.floor(ingr3coordinata / 5)*100+v3, ingr3coordinata % 5 *100+100, 'ingrediente3');
         game.physics.arcade.enable(ingrediente3);
         ingrediente3.body.immovable = true;
         if (ricetta == sug3) {
           ingrediente3.anchor.setTo(0.5, 0.5);
           game.add.tween(ingrediente3.scale).to( { x: 1.15, y: 1.15 }, 300, Phaser.Easing.Linear.None, true, 0, 500, true);
         }

     var ingr4coordinata = makeUniqueRandom();
     if (ingr4coordinata < 10) {
          var v4 = x1;
        } else {var v4 = x2;}

    ingrediente4= game.add.sprite(Math.floor(ingr4coordinata / 5)*100+v4, ingr4coordinata % 5 *100+100, 'ingrediente4');
         game.physics.arcade.enable(ingrediente4);
         ingrediente4.body.immovable = true;
         if (ricetta == sug4) {
           ingrediente4.anchor.setTo(0.5, 0.5);
           game.add.tween(ingrediente4.scale).to( { x: 1.15, y: 1.15 }, 300, Phaser.Easing.Linear.None, true, 0, 500, true);
         }

     var ingr5coordinata = makeUniqueRandom();
     if (ingr5coordinata < 10) {
          var v5 = x1;
        } else {var v5 = x2;}

    ingrediente5= game.add.sprite( Math.floor(ingr5coordinata / 5)*100+v5, ingr5coordinata % 5 *100+100, 'ingrediente5');
         game.physics.arcade.enable(ingrediente5);
         ingrediente5.body.immovable = true;

     var ingr6coordinata = makeUniqueRandom();
     if (ingr6coordinata < 10) {
          var v6 = x1;
        } else {var v6 = x2;}

    ingrediente6= game.add.sprite(Math.floor(ingr6coordinata / 5)*100+v6, ingr6coordinata % 5 *100+100, 'ingrediente6');
         game.physics.arcade.enable(ingrediente6);
         ingrediente6.body.immovable = true;

     var ingr7coordinata = makeUniqueRandom();
     if (ingr7coordinata < 10) {
          var v7 = x1;
        } else {var v7 = x2;}

    ingrediente7= game.add.sprite(Math.floor(ingr7coordinata / 5)*100+v7, ingr7coordinata % 5 *100+100, 'ingrediente7');
         game.physics.arcade.enable(ingrediente7);
         ingrediente7.body.immovable = true;

     var ingr8coordinata = makeUniqueRandom();
     if (ingr8coordinata < 10) {
          var v8 = x1;
        } else {var v8 = x2;}

    ingrediente8= game.add.sprite(Math.floor(ingr8coordinata / 5)*100+v8, ingr8coordinata % 5 *100+100, 'ingrediente8');
         game.physics.arcade.enable(ingrediente8);
         ingrediente8.body.immovable = true;
         if (ricetta == sug5) {
           ingrediente8.anchor.setTo(0.5, 0.5);
           game.add.tween(ingrediente8.scale).to( { x: 1.15, y: 1.15 }, 300, Phaser.Easing.Linear.None, true, 0, 500, true);
         }

     var ingr9coordinata = makeUniqueRandom();
     if (ingr9coordinata < 10) {
          var v9 = x1;
        } else {var v9 = x2;}

    ingrediente9= game.add.sprite(Math.floor(ingr9coordinata / 5)*100+v9, ingr9coordinata % 5 *100+100, 'ingrediente9');
         game.physics.arcade.enable(ingrediente9);
         ingrediente9.body.immovable = true;

     var ingr10coordinata = makeUniqueRandom();
     if (ingr10coordinata < 10) {
          var v10 = x1;
        } else {var v10 = x2;}

    ingrediente10= game.add.sprite(Math.floor(ingr10coordinata / 5)*100+v10, ingr10coordinata % 5 *100+100, 'ingrediente10');
         game.physics.arcade.enable(ingrediente10);
         ingrediente10.body.immovable = true;

     var ingr11coordinata = makeUniqueRandom();
     if (ingr11coordinata < 10) {
          var v11 = x1;
        } else {var v11 = x2;}

    ingrediente11= game.add.sprite(Math.floor(ingr11coordinata / 5)*100+v11, ingr11coordinata % 5 *100+100, 'ingrediente11');
         game.physics.arcade.enable(ingrediente11);
         ingrediente11.body.immovable = true;

     var ingr12coordinata = makeUniqueRandom();
     if (ingr12coordinata < 10) {
          var v12 = x1;
        } else {var v12 = x2;}

    ingrediente12= game.add.sprite(Math.floor(ingr12coordinata / 5)*100+v12, ingr12coordinata % 5 *100+100, 'ingrediente12');
         game.physics.arcade.enable(ingrediente12);
         ingrediente12.body.immovable = true;

     var ingr13coordinata = makeUniqueRandom();
     if (ingr13coordinata < 10) {
          var v13 = x1;
        } else {var v13 = x2;}

    ingrediente13= game.add.sprite(Math.floor(ingr13coordinata / 5)*100+v13, ingr13coordinata % 5 *100+100, 'ingrediente13');
         game.physics.arcade.enable(ingrediente13);
         ingrediente13.body.immovable = true;

     var ingr14coordinata = makeUniqueRandom();
     if (ingr14coordinata < 10) {
          var v14 = x1;
        } else {var v14 = x2;}

    ingrediente14= game.add.sprite(Math.floor(ingr14coordinata / 5)*100+v14, ingr14coordinata % 5 *100+100, 'ingrediente14');
         game.physics.arcade.enable(ingrediente14);
         ingrediente14.body.immovable = true;

     var ingr15coordinata = makeUniqueRandom();
     if (ingr15coordinata < 10) {
          var v15 = x1;
        } else {var v15 = x2;}

    ingrediente15= game.add.sprite(Math.floor(ingr15coordinata / 5)*100+v15, ingr15coordinata % 5 *100+100, 'ingrediente15');
         game.physics.arcade.enable(ingrediente15);
         ingrediente15.body.immovable = true;

     var ingr16coordinata = makeUniqueRandom();
     if (ingr16coordinata < 10) {
          var v16 = x1;
        } else {var v16 = x2;}

    ingrediente16= game.add.sprite(Math.floor(ingr16coordinata / 5)*100+v16, ingr16coordinata % 5 *100+100, 'ingrediente16');
         game.physics.arcade.enable(ingrediente16);
         ingrediente16.body.immovable = true;

     var ingr17coordinata = makeUniqueRandom();
     if (ingr17coordinata < 10) {
          var v17 = x1;
        } else {var v17 = x2;}

    ingrediente17= game.add.sprite(Math.floor(ingr17coordinata / 5)*100+v17, ingr17coordinata % 5 *100+100, 'ingrediente17');
         game.physics.arcade.enable(ingrediente17);
         ingrediente17.body.immovable = true;

     var ingr18coordinata = makeUniqueRandom();
     if (ingr18coordinata < 10) {
          var v18 = x1;
        } else {var v18 = x2;}

    ingrediente18= game.add.sprite(Math.floor(ingr18coordinata / 5)*100+v18, ingr18coordinata % 5 *100+100, 'ingrediente18');
         game.physics.arcade.enable(ingrediente18);
         ingrediente18.body.immovable = true;

     var ingr19coordinata = makeUniqueRandom();
     if (ingr19coordinata < 10) {
          var v19 = x1;
        } else {var v19 = x2;}

    ingrediente19= game.add.sprite(Math.floor(ingr19coordinata / 5)*100+v19, ingr19coordinata % 5 *100+100, 'ingrediente19');
         game.physics.arcade.enable(ingrediente19);
         ingrediente19.body.immovable = true;

     var ingr20coordinata = makeUniqueRandom();
     if (ingr20coordinata < 10) {
          var v20 = x1;
        } else {var v20 = x2;}

    ingrediente20= game.add.sprite(Math.floor(ingr20coordinata / 5)*100+v20, ingr20coordinata % 5 *100+100, 'ingrediente20');
         game.physics.arcade.enable(ingrediente20);
         ingrediente20.body.immovable = true;

    //creazione del gruppo ingredienti
    ingredienti = game.add.group();
    //aggiunta degli ingredienti al gruppo
    ingredienti.add(ingrediente1);
    ingredienti.add(ingrediente2);
    ingredienti.add(ingrediente3);
    ingredienti.add(ingrediente4);
    ingredienti.add(ingrediente5);
    ingredienti.add(ingrediente6);
    ingredienti.add(ingrediente7);
    ingredienti.add(ingrediente8);
    ingredienti.add(ingrediente9);
    ingredienti.add(ingrediente10);
    ingredienti.add(ingrediente11);
    ingredienti.add(ingrediente12);
    ingredienti.add(ingrediente13);
    ingredienti.add(ingrediente14);
    ingredienti.add(ingrediente15);
    ingredienti.add(ingrediente16);
    ingredienti.add(ingrediente17);
    ingredienti.add(ingrediente18);
    ingredienti.add(ingrediente19);
    ingredienti.add(ingrediente20);

    ingredienti.forEach(function(item) {
      //gli ingredienti pulsano
      item.anchor.setTo(0.5, 0.5);
      //game.add.tween(item.scale).to( { x: 1.15, y: 1.15 }, Math.random()*500+200, Phaser.Easing.Linear.None, true, 0, 1000, true);
      //permette lo spostamento dell'oggetto
      item.inputEnabled = true;
      item.input.enableDrag();
    })

    //timer
    timer = game.time.create(false);
    timer.loop(1000, updateCounter, this);
    timer.start();

  } //end of create function

//game over and restart function
function gameOver() {
    game.paused = true;
    statoDolci = 2;
    dolciCompari();
        //restart on click function
        game.input.onTap.addOnce(function () {
            game.paused = false;
            game.state.restart();
            time = 0;
            ordine = 0;
            statoDolci = 1;
            dolciCompari();
        });
}
function updateCounter() {
    tempo--;

    var shrinkBarra = tempo/10;

    barre.forEach(function(item) {
    game.add.tween(item.scale).to( { x: shrinkBarra-0.1, y: 1 }, 1000, Phaser.Easing.Linear.None, true);
  })

    if (tempo==0) {

        timer.stop();
        gameOver();

    }
}

//victory and restart function
function victory () {
  sug1.alpha = 0;
  sug2.alpha = 0;
  sug3.alpha = 0;
  sug4.alpha = 0;
  sug5.alpha = 0;

    game.paused = true;

       statoDolci = 3;
       dolciCompari();

    //restart on click function
        game.input.onTap.addOnce(function () {
            game.paused = false;
            game.state.restart();
            time = 0;
            ordine = 0;
            if( statoDolci == 3) {goRight();}
            else {statoDolci = 1;
              dolciCompari();
              game.paused = false;
              game.state.restart();
            }
        });
}

function update () {
//start on click
      if(volted == 0 || statoDolci == 0) {
    game.paused = true;
    volted = 1;
  }

game.input.onTap.addOnce(function () {
  if (volted == 1) {
    game.paused = false;
    statoDolci = 1;
    dolciCompari();
    volted = 2;
}
});

if(volted == 2) {
  ricetta.alpha = 1;
}

   game.physics.arcade.overlap(player, ingrediente1, ingrediente1scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente2, ingrediente2scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente3, ingrediente3scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente4, ingrediente4scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente5, ingrediente5scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente6, ingrediente6scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente7, ingrediente7scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente8, ingrediente8scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente9, ingrediente9scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente10, ingrediente10scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente11, ingrediente11scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente12, ingrediente12scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente13, ingrediente13scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente14, ingrediente14scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente15, ingrediente15scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente16, ingrediente16scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente17, ingrediente17scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente18, ingrediente18scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente19, ingrediente19scompare, null, this);
   game.physics.arcade.overlap(player, ingrediente20, ingrediente20scompare, null, this);

   game.physics.arcade.collide(ingrediente1, player);
   game.physics.arcade.collide(ingrediente2, player);
   game.physics.arcade.collide(ingrediente3, player);
   game.physics.arcade.collide(ingrediente4, player);
   game.physics.arcade.collide(ingrediente5, player);
   game.physics.arcade.collide(ingrediente6, player);
   game.physics.arcade.collide(ingrediente7, player);
   game.physics.arcade.collide(ingrediente8, player);
   game.physics.arcade.collide(ingrediente9, player);
   game.physics.arcade.collide(ingrediente10, player);
   game.physics.arcade.collide(ingrediente11, player);
   game.physics.arcade.collide(ingrediente12, player);
   game.physics.arcade.collide(ingrediente13, player);
   game.physics.arcade.collide(ingrediente14, player);
   game.physics.arcade.collide(ingrediente15, player);
   game.physics.arcade.collide(ingrediente16, player);
   game.physics.arcade.collide(ingrediente17, player);
   game.physics.arcade.collide(ingrediente18, player);
   game.physics.arcade.collide(ingrediente19, player);
   game.physics.arcade.collide(ingrediente20, player);

//vinci se fai l'ordine giusto o perdi
if (ordine == 5) {victory(); volted = 0; }
if (time == 1 && ordine < 1) { gameOver();}
if (time == 2 && ordine < 2) { gameOver();}
if (time == 3 && ordine < 3) { gameOver();}
if (time == 4 && ordine < 4) { gameOver();}
if (time == 5 && ordine < 5) { gameOver();}
if (time == 0) {

}
if (time == 1)
{
    ricetta.kill();
    //game.add.tween(ricetta2).to( { alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 1000, true);
    ricetta2.alpha = 1;
     }
if (time == 2)
{
    ricetta2.kill();
    //game.add.tween(ricetta3).to( { alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 1000, true);
    ricetta3.alpha = 1;
     }
if (time == 3)
{
  ricetta3.kill();
    //game.add.tween(ricetta4).to( { alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 1000, true);
    ricetta4.alpha = 1;
       }
if (time == 4) {
  ricetta4.kill();
  //game.add.tween(ricetta5).to( { alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 1000, true);
  ricetta5.alpha = 1;

}

} //end of update function

//va quando fa comparire il +2
function piùdue() {
  ordine = ordine + 1;
  tempo = tempo + 2;
  var style1 = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  più2 = game.add.text(952/2+120, 550+16, "+2!", style1);
  più2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
  //più2.setTextBounds(100, 239, 952, 652);
  game.add.tween(più2.scale).to( { x: 2.2, y: 2.2 }, 500, Phaser.Easing.Linear.None, true);
  più2.anchor.setTo(0.5, 0.5);
  setTimeout(più2Sparisce, 300);
}

function più2Sparisce() {
    game.add.tween(più2).to( { alpha: 0 }, 200, Phaser.Easing.Linear.None, true);
}

//funzioni che tengono conto dell'ordine e aggiornano time quando gli ingredienti toccano il player

function  ingrediente1scompare (player, ingrediente1)
{
    ingr1 = game.add.sprite(ingrediente1.x, ingrediente1.y, 'ingrediente1');
    ingrediente1.kill();
    time = time + 1;
    if (ricetta == sug1 && time == 1){
      piùdue();
    } else if (ricetta2 == sug1 && time == 2) {
      piùdue();
    } else if (ricetta3 == sug1 && time == 3) {
      piùdue();
    } else if (ricetta4 == sug1 && time == 4) {
      piùdue();
    } else if (ricetta5 == sug1 && time == 5) {
      piùdue();
    }

}

function  ingrediente2scompare (player, ingrediente2)
{
    ingr2 = game.add.sprite(ingrediente2.x, ingrediente2.y, 'ingrediente2');
    ingrediente2.kill();
    time = time + 1;
    if (ricetta == sug2 && time == 1){
      piùdue();
    } else if (ricetta2 == sug2 && time == 2) {
      piùdue();
    } else if (ricetta3 == sug2 && time == 3) {
      piùdue();
    } else if (ricetta4 == sug2 && time == 4) {
      piùdue();
    } else if (ricetta5 == sug2 && time == 5) {
      piùdue();
    }

}

function  ingrediente3scompare (player, ingrediente3)
{
    ingr3 = game.add.sprite(ingrediente3.x, ingrediente3.y, 'ingrediente3');
    ingrediente3.kill();
    time = time + 1;
    if (ricetta == sug3 && time == 1){
      piùdue();
    } else if (ricetta2 == sug3 && time == 2) {
      piùdue();
    } else if (ricetta3 == sug3 && time == 3) {
      piùdue();
    } else if (ricetta4 == sug3 && time == 4) {
      piùdue();
    } else if (ricetta5 == sug3 && time == 5) {
      piùdue();
    }

}

function  ingrediente4scompare (player, ingrediente4)
{
    ingr4 = game.add.sprite(ingrediente4.x, ingrediente4.y, 'ingrediente4');
    ingrediente4.kill();
    time = time + 1;
    if (ricetta == sug4 && time == 1){
      piùdue();
    } else if (ricetta2 == sug4 && time == 2) {
      piùdue();
    } else if (ricetta3 == sug4 && time == 3) {
      piùdue();
    } else if (ricetta4 == sug4 && time == 4) {
      piùdue();
    } else if (ricetta5 == sug4 && time == 5) {
      piùdue();
    }

}
function  ingrediente5scompare (player, ingrediente5)
{
    ingr5 = game.add.sprite(ingrediente5.x, ingrediente5.y, 'ingrediente5');
    ingrediente5.kill();
    time = time + 1;
}
function  ingrediente6scompare (player, ingrediente6)
{
    ingr6 = game.add.sprite(ingrediente6.x, ingrediente6.y, 'ingrediente6');
    ingrediente6.kill();
    time = time + 1;
}
function  ingrediente7scompare (player, ingrediente7)
{
    ingr7 = game.add.sprite(ingrediente7.x, ingrediente7.y, 'ingrediente7');
    ingrediente7.kill();
    time = time + 1;
}
function  ingrediente8scompare (player, ingrediente8)
{
  ingr5 = game.add.sprite(ingrediente8.x, ingrediente8.y, 'ingrediente8');
  ingrediente8.kill();
  time = time + 1;
  if (ricetta == sug5 && time == 1){
    piùdue();
  } else if (ricetta2 == sug5 && time == 2) {
    piùdue();
  } else if (ricetta3 == sug5 && time == 3) {
    piùdue();
  } else if (ricetta4 == sug5 && time == 4) {
    piùdue();
  } else if (ricetta5 == sug5 && time == 5) {
    piùdue();
  }
  }

function  ingrediente9scompare (player, ingrediente9)
{
    ingr9 = game.add.sprite(ingrediente9.x, ingrediente9.y, 'ingrediente9');
    ingrediente9.kill();
    time = time + 1;
}
function  ingrediente10scompare (player, ingrediente10)
{
    ingr10 = game.add.sprite(ingrediente10.x, ingrediente10.y, 'ingrediente10');
    ingrediente10.kill();
    time = time + 1;
}
function  ingrediente11scompare (player, ingrediente11)
{
    ingr11 = game.add.sprite(ingrediente11.x, ingrediente11.y, 'ingrediente11');
    ingrediente11.kill();
    time = time + 1;
}
function  ingrediente12scompare (player, ingrediente12)
{
    ingr12 = game.add.sprite(ingrediente12.x, ingrediente12.y, 'ingrediente12');
    ingrediente12.kill();
    time = time + 1;
}
function  ingrediente12scompare (player, ingrediente12)
{
    ingr12 = game.add.sprite(ingrediente12.x, ingrediente12.y, 'ingrediente12');
    ingrediente12.kill();
    time = time + 1;
}
function  ingrediente13scompare (player, ingrediente13)
{
    ingr13 = game.add.sprite(ingrediente13.x, ingrediente13.y, 'ingrediente13');
    ingrediente13.kill();
    time = time + 1;
}
function  ingrediente14scompare (player, ingrediente14)
{
    ingr14 = game.add.sprite(ingrediente14.x, ingrediente14.y, 'ingrediente14');
    ingrediente14.kill();
    time = time + 1;
}

function  ingrediente15scompare (player, ingrediente15)
{
    ingr15 = game.add.sprite(ingrediente15.x, ingrediente15.y, 'ingrediente15');
    ingrediente15.kill();
    time = time + 1;
}

function  ingrediente16scompare (player, ingrediente16)
{
    ingr16 = game.add.sprite(ingrediente16.x, ingrediente16.y, 'ingrediente16');
    ingrediente16.kill();
    time = time + 1;
}

function  ingrediente17scompare (player, ingrediente17)
{
    ingr17 = game.add.sprite(ingrediente17.x, ingrediente17.y, 'ingrediente17');
    ingrediente17.kill();
    time = time + 1;
}

function  ingrediente18scompare (player, ingrediente18)
{
    ingr18 = game.add.sprite(ingrediente18.x, ingrediente18.y, 'ingrediente18');
    ingrediente18.kill();
    time = time + 1;
}

function  ingrediente19scompare (player, ingrediente19)
{
    ingr19 = game.add.sprite(ingrediente19.x, ingrediente19.y, 'ingrediente19');
    ingrediente19.kill();
    time = time + 1;
}

function  ingrediente20scompare (player, ingrediente20)
{
    ingr20 = game.add.sprite(ingrediente20.x, ingrediente20.y, 'ingrediente20');
    ingrediente20.kill();
    time = time + 1;
}

function render () {

}
}
dolciDiRiso();
