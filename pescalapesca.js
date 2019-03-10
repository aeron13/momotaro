function giocoPesca() {/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/JfKhYMZB
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(952, 652, Phaser.AUTO, 'gioco1', { preload: preload, create: create, update: update, render: render });

function preload() {


    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = './assets';
    game.load.crossOrigin = 'anonymous';

    game.load.spritesheet('player', '/pescaanimazione.png', 41, 37, 15);
    game.load.image('platform', '/tronchi_fiume_4.png');
    game.load.spritesheet ('grandma', '/nonna_animata.png' , 29, 64, 10);

    game.load.image('frecciaDx', '/frecciaDx.png');
    game.load.image('frecciaSx', '/frecciaSx.png');
    game.load.image('frecciaAl', '/frecciaAl.png');
    game.load.image('sfondo', '/sfondo_fiume_riva_doppia_2.jpg');
    game.load.image('terrasu', '/sassi.png');
      game.load.image('terrasu1', '/sassi1.png');
    game.load.image('terragiù', '/sfondo_riva_sassi.png');
    game.load.image('vitepesca', '/pescavita.png');

    game.load.spritesheet('ostacolo', '/fishanimazione_blu.png', 45, 18, 15);



}

var player;
var platforms;
var cursors;

var grandma;
var text;
var subtext;
var victoryText;
var platforms1;
var e = 0;

var start = 0;
var starText;

var sfondo;
var goup;
var terrasu;
var terrasu1;
var terragiù;
var vite;
var vitapesca1;
var vitapesca2;
var vitapesca3;
var ostacoli;
var morte;
var conta;
var frecciaAl;
var pesceCompare;
var pulsa;
var ferma;
function create() {

ferma = 0;
  pulsa = 1;
  //sfondo
  sfondo = game.add.sprite(0, 0, 'sfondo');
  //sfondo.alpha = 0.3;
terrasu = game.add.sprite(0,-5, 'terrasu');
  game.physics.arcade.enable(terrasu);
terrasu.body.immovable = true;
terrasu1 = game.add.sprite(698,-5, 'terrasu1');
  game.physics.arcade.enable(terrasu1);
terrasu1.body.immovable = true;

terragiù = game.add.sprite(0,652-30, 'terragiù');
  game.physics.arcade.enable(terragiù);
terragiù.body.immovable = true;

// creo ostacoli

var uniqueRandoms = [100, 270,270, 350, 350, 500, ];
//indica il n di elementi in totale: 4x5=20

function makeUniqueRandom() {

    //prende un numero random compreso nella lunghezza dell'array
    var index = Math.floor(Math.random()*uniqueRandoms.length);
    //prende il valore dell'array sta al posto index
    var val = uniqueRandoms[index];

  // now remove that value from the array
   uniqueRandoms.splice(index, 1);
  //l'intera funzione restituisce val
    return val;
}


ostacoli = game.add.physicsGroup()
ostacoli.create(100,  makeUniqueRandom(), 'ostacolo');
ostacoli.create(650,  makeUniqueRandom(), 'ostacolo');
ostacoli.create(300,  makeUniqueRandom(), 'ostacolo');
ostacoli.create(500,  makeUniqueRandom(), 'ostacolo');
ostacoli.create(900,  makeUniqueRandom(), 'ostacolo');
ostacoli.create(750,  makeUniqueRandom(), 'ostacolo');

ostacoli.setAll('body.immovable', true);


  ostacoli.forEach(function(item) {
    var jump = item.animations.add('jump');
    item.animations.play('jump', 8, true);
    item.body.velocity.x = 150;
  })



//create player
    player = game.add.sprite(80, 600, 'player');

    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.anchor.setTo(0.5, 0.5);

// var che controlla le vite della pesca
morte = 3;
conta = 2;
pesceCompare = 0;

// create peach's lives
vitapesca1 = game.add.sprite(100, 25, 'vitepesca');
  vitapesca2 = game.add.sprite(160, 25, 'vitepesca');
vitapesca3 = game.add.sprite(220, 25, 'vitepesca');
vite = game.add.group();
vite.add(vitapesca1);
vite.add(vitapesca2);
vite.add(vitapesca3);

//set world bounds
     game.world.setBounds(0,0,952,652);

//create platforms di sinisstra
    platforms = game.add.group();

    platforms1 = game.add.sprite(50, 145, 'platform');
    platforms2 = game.add.sprite(400, 225, 'platform');
    platforms3 = game.add.sprite(300, 305, 'platform');
    platforms4 = game.add.sprite(100, 385, 'platform');
    platforms5 = game.add.sprite(200, 465, 'platform');
    platforms6 = game.add.sprite(600, 545, 'platform');
    platforms7 = game.add.sprite(800, 145, 'platform');
    platforms8 = game.add.sprite(900, 225, 'platform');
    platforms9 = game.add.sprite(700, 305, 'platform');
    platforms10 = game.add.sprite(600, 385, 'platform');
    platforms11 = game.add.sprite(600, 545, 'platform');

    platforms.add(platforms1);
    platforms.add(platforms2);
    platforms.add(platforms3);
    platforms.add(platforms4);
    platforms.add(platforms5);
    platforms.add(platforms6);
    platforms.add(platforms7);
    platforms.add(platforms8);
    platforms.add(platforms9);
    platforms.add(platforms10);
    platforms.add(platforms11);

    platforms.forEach(function(item) {
      game.physics.arcade.enable(item);
item.body.velocity.x = Math.random()* 300;
    })

// platforms propreties
platforms.setAll('body.immovable', false);
platforms.setAll('body.bounce.x', 0.5);

//create grandma
grandma = game.add.sprite (620, 20, 'grandma')
    game.physics.arcade.enable(grandma);
    var batti = grandma.animations.add('batti');
    grandma.animations.play('batti', 10, true);


  cursors = game.input.keyboard.createCursorKeys();
  goup = game.input.keyboard.addKey(Phaser.Keyboard.UP);

  } //end create function

    function updateCounter() {
      setTimeout(stop, 500)
        //restart on click function
        game.input.onTap.addOnce(function () {
            game.state.restart();
            game.paused = false;
            ferma = 0;
            e = 0;
            statoPesca = 1;
            //mouseSparisce();
            pescaCompari();
        });
    }

function stop() {
  game.paused = true;
  //mouseSparisce();
  statoPesca = 2;
  pescaCompari();
}
    //victory text and game over

function victory () {
  //mouseSparisce();
  statoPesca = 3;
  pescaCompari();

         //restart on click function
        game.input.onTap.addOnce(function () {
          game.paused = false;
          game.state.restart();
          e = 0;
          //mouseSparisce();
          if(statoPesca==3) {goRight();}
          else {
            statoPesca=1;
            pescaCompari();
            game.paused = false;
            game.state.restart();
            e = 0;
          }
        });
         game.paused = true;


}


function stoppulsa() { var fade = player.animations.stop(null, true);
}

function pescapulsa() { var fade = player.animations.add('fade');
player.animations.play('fade', 30, true);
 setTimeout(stoppulsa, 3000)}



// il player colpisce i pesci e perde le vite

function playerhitfish (player,ostacoli) {



  if (pesceCompare == 1) {

pescapulsa();

if ( morte == 3) { vitapesca3.kill(); setTimeout(updateHit1, 1500);}
if ( morte == 2) { vitapesca2.kill(); setTimeout(updateHit2, 1500);}
if ( morte == 1) { vitapesca1.kill(); desappear();}
}
}

 function updateHit1() {
morte =  2;  }
function updateHit2() {
morte =  1; }



//  quando la pesca muore scompare piano
function desappear() {
    e = 1;
    platforms.setAll('body.immovable', true);

game.add.tween(player).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0);
player.body.gravity.x = 0; player.body.gravity.y = 0;
player.body.collideWorldBounds = false;

platforms.forEach(function(item) {
   item.body.velocity.x = 0; })

if(ferma ==0 ){updateCounter(); ferma = 1}
}

// definiamo animazione pesce
function compari() {
pesceCompare = 1;
  ostacoli.forEach(function(item) {
  var jump = item.animations.add('jump');
  item.animations.play('jump', 10, false)});
;};

function scompari() {
  pesceCompare = 0;
  ostacoli.forEach(function(item) {
    var jump = item.animations.stop(null, true)});
    setTimeout(compari, 2000);
  };

function update () {
conta = conta + 1;
if(conta % 200 == 0) {scompari();}

  if(volte == 0 || statoPesca == 0) {
    game.paused = true;
    volte = 1;
  }

game.input.onTap.addOnce(function () {
  if (volte == 1) {
    statoPesca = 1;
    pescaCompari();
    //mouseSparisce();
    game.paused = false;
    //tutorial
    frecciaDx = game.add.sprite(30, -25, 'frecciaDx');
    game.physics.arcade.enable(frecciaDx);
    player.addChild(frecciaDx);
    frecciaDx.alpha = 0.5;
    game.add.tween(frecciaDx).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 0, 1000, true);

    frecciaSx = game.add.sprite(-60-35, -25, 'frecciaSx');
    game.physics.arcade.enable(frecciaSx);
    player.addChild(frecciaSx);
    frecciaSx.alpha = 0;

    frecciaAl = game.add.sprite(-22, - 95, 'frecciaAl');
    game.physics.arcade.enable(frecciaAl);
    player.addChild(frecciaAl);
    frecciaAl.alpha = 0;
    volte = 2;
}

})

if(cursors.right.isDown) {
  frecciaDx.kill();
  frecciaSx.alpha = 0.5;
  game.add.tween(frecciaSx).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

if(cursors.left.isDown) {
  frecciaSx.kill();
  frecciaAl.alpha = 0.5;
    game.add.tween(frecciaAl).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

if(goup.isDown) {
  frecciaAl.kill();
 player.body.gravity.x= 5000;
  player.body.gravity.y=-3000;
}

        game.physics.arcade.overlap(player, grandma, hitgrandma, null, this);
        game.physics.arcade.overlap(player, platforms, hitplatforms, null, this);
        game.physics.arcade.overlap(player, terrasu, hitterragiù, null, this);
        game.physics.arcade.overlap(player, terragiù, hitterrasu, null, this);
          game.physics.arcade.overlap(player, terragiù, hitterrasu1, null, this);
        game.physics.arcade.overlap(player, ostacoli, playerhitfish, null, this);


    game.physics.arcade.collide(player, grandma);
    game.physics.arcade.collide(player, platforms);

    game.physics.arcade.collide(platforms, platforms);
    game.physics.arcade.collide(player, terrasu);
      game.physics.arcade.collide(player, terrasu1);
    game.physics.arcade.collide(player, terragiù);

  if(pesceCompare == 1) { game.physics.arcade.collide(player, ostacoli)};



    player.body.velocity.x = 0;
    player.body.velocity.y = 0;




    if (cursors.left.isDown && e == 0)
    {
        player.body.velocity.x = -200;
    }
    else if (cursors.right.isDown && e == 0)
    {
        player.body.velocity.x = 200;
    }
    else if (goup.isDown && e == 0)
    {
        player.body.velocity.y= -200;
    }



// platforms ripartono quando escono dal quadro
platforms.forEach(function(item){
if(item.x > 952) {item.x = -128;}
})

// pesci ripartono quando escono dal quadro
ostacoli.forEach(function(item){
if(item.x > 952) {item.x = -128;}
})





// player scompare se tocca le platform di sinistra
  function hitplatforms (player, platforms,) { if (player.body.touching)
      {desappear(); vitapesca1.kill(); vitapesca2.kill(); vitapesca3.kill();}
  }

// player muore, il gioco si ferma
  if( player.alpha == 0) {player.kill();}




 // player muore, il gioco si ferma
    if( player.alpha == 0) {player.kill();}

    function hitterrasu (player, terrasu,) { if (player.body.touching)
        {desappear(); vitapesca1.kill(); vitapesca2.kill(); vitapesca3.kill();}
    }

    function hitterragiù (player, terragiù,) { if (player.body.touching)
        {desappear(); vitapesca1.kill(); vitapesca2.kill(); vitapesca3.kill();}
    }
    function hitterrasu1 (player, terrasu1,) { if (player.body.touching)
        {desappear(); vitapesca1.kill(); vitapesca2.kill(); vitapesca3.kill();}
    }

// player vince se tocca la nonna
      function hitgrandma (player,grandma) { if (player.body.touching)
    { victory(); } }

    } // update ends

function render () {

}
}
giocoPesca();
