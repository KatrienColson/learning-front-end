 //startbutton
 let races = {
    "human" : "human.jpg",
    "orc" : "orc.jpg",
    "elf" : "elf.jpg",
    "vampire" : "vampire.jpg"
 }
 let healthmax=120;
 let btnStart = document.getElementById("start");
function player(number, nameid,itemid,raceid,progress,box,chooseItems,chooseRaces,nameBoxHolder,portret)
{
    this.number=number;
    this.name=document.getElementById(nameid);
    this.item=document.getElementById(itemid);
    this.raceid=document.getElementById(raceid);
    this.progress=document.getElementById(progress);
    this.progress.max=120;
    this.progress.value=120;
    this.box=document.querySelector(box);
    
    this.chooseItems=document.querySelector(chooseItems);
    this.chooseRaces=document.querySelector(chooseRaces);
    this.nameBoxHolder=document.getElementById(nameBoxHolder);
    this.portret=document.getElementById(portret);
    this.health=healthmax;
    this.updateCharacter = function()
    {
        this.box.style.display= "none";
        this.progress.style.display="none";
        //this.fname.style.display = "none";
        this.chooseItems.style.display = "none";
        this.chooseRaces.style.display = "none";
        this.nameBoxHolder.innerHTML=this.name.value;
        this.portret.src = "resources/img/"+ races[this.raceid.value];
    }
    this.isattacked = function(size)
    {
        this.health-=size;
        this.progress.value=this.health;
        if(this.health <= 0){
            this.health = 0
            gameOver(this.name.value + " lost");
        }
        logadd(this.name.value + " lost " + size + " health points and now has " + this.health);
        
    }
    this.heals = function(size){
        this.health += size;
        this.health = Math.min(this.health, healthmax);
        this.progress.value = this.health;
        logadd(this.name.value + " added " + size + " health points and now has " + this.health);
    }
}

let players=[new player(1,"name1","itemsPlayer1","racePlayer1","progress1",".box-3",".chooseItems1",".chooseRaces1","speler1","portret1"),
             new player(2,"name2","itemsPlayer2","racePlayer2","progress2",".box-4",".chooseItems2",".chooseRaces2","speler2","portret2")];
let turn = players[0];
             //player 1
     let fname1 = document.getElementById("name1");
     //dropdown player 1
     let selectItem1 = document.getElementById("itemsPlayer1");
     let selectRace1 = document.getElementById("racePlayer1");
     //playfield player 1
     let box1 = document.getElementById("boxField1");
     //buttons player 1
     let playHit1 = document.getElementById("hit1");
     let playHeal1 = document.getElementById("heal1");
     let playYield1 = document.getElementById("yield1");
     //foto in het veld player 1
     let portret1 = document.getElementById("portret1");
     let portret1A = document.getElementById("portret1A");
     //classes knoppen van hit, hiel en yield
     let box3 = document.querySelector(".box-3");
     //classes van textefield, items en races
     let chooseItems1 = document.querySelector(".chooseItems1");
     let chooseRaces1 = document.querySelector(".chooseRaces1");
     //progresbar health1
     let progress1 = document.getElementById("progress1");
     var player1;   

 //player 2
     let fname2 = document.getElementById("name2");
     //dropdown player 2
     let selectItem2 = document.getElementById("itemsPlayer2");
     let selectRace2 = document.getElementById("racePlayer2");
     //playfield player 2
     let box2 = document.getElementById("boxField2");
     //buttons player 2
     let playHit2 = document.getElementById("hit2");
     let playHeal2 = document.getElementById("heal2");
     let playYield2 = document.getElementById("yield2"); 
     //logfield - textveld - move's
     let logfield = document.getElementById("log");
     //foto in het veld player 1
     let portret2 = document.getElementById("portret2");
     //classes knoppen van hit, hiel en yield
     let box4 = document.querySelector(".box-4");
     //classes van textefield, items en races
     let chooseItems2 = document.querySelector(".chooseItems2");
     let chooseRaces2 = document.querySelector(".chooseRaces2");
     //progresbar health2
     let progress2 = document.getElementById("progress2");
    
     let player2;

     //aanmaak karakters
     function Person( item, race, name){
         this.item = item;
         this.race = race;
         this.name = name;
         this.currenthealth = 100;
         this.maxHealth = 100;
         
         this.min = 3;
         this.maxDamage = 20;
         this.maxHealing = 30;
        
         this.heal = function(){};

         this.damage = function(){};

         this.totalDamage = this.damage();

         this.displayChar = function(){
             return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
         };
     }

 // zorgen dat mijn knoppen verschijnen als ik op play klik
 box3.style.display = "none";
 box4.style.display = 'none';
 progress1.style.display = "none";
 progress2.style.display = "none";

 // zorgen dat mijn knoppen verdwijnen als ik op play klik
 fname1.style.display = "";
 chooseItems1.style.display = "";
 chooseRaces1.style.display = "";
 fname2.style.display = "";
 chooseItems2.style.display = "";
 chooseRaces2.style.display = "";
 btnStart.addEventListener("click", createCharacter);
     
 function createCharacterCarlos(event)
    {
        players.forEach(p =>p.updateCharacter());
        //players[0].updateCharacter();
    }
 function createCharacter(event){
     {
     box3.style.display = "";
     box4.style.display = "";
     progress1.style.display = "block";
     progress2.style.display = "block";
     fname1.style.display = "none";
     chooseItems1.style.display = "none";
     chooseRaces1.style.display = "none";
     fname2.style.display = "none";
     chooseItems2.style.display = "none";
     chooseRaces2.style.display = "none";

     //aanmaken player 1 met race en item met weergave
     //naam ingeven en verschijnen onder player 1
      player1 = new Person(selectItem1.value, selectRace1.value, fname1.value);
     let nameBoxHolder1 = document.getElementById("speler1");
     nameBoxHolder1.innerHTML = player1.name;
    
     let health1 = document.getElementById("health1");
     health1.innerHTML = player1.currenthealth;

     // let itemChoice1 = document.getElementById("itemChoice1");
     // itemChoice1.innerHTML = player1.item;

     // let rasChoice1 = document.getElementById("rasChoice1");
     // rasChoice1.innerHTML = player1.race;

     //aanmaken player 2 met race en item met weergave
     //naam ingeven en verschijnen onder player 2
     player2 = new Person(selectItem2.value, selectRace2.value,fname2.value);
     let nameBoxHolder2 = document.getElementById("speler2");
     nameBoxHolder2.innerHTML = player2.name;
    
     let health2 = document.getElementById("health2");
     health2.innerHTML = player2.currenthealth;

     // let itemChoice2 = document.getElementById("itemChoice2");
     // itemChoice2.innerHTML = player2.item;

     // let rasChoice2 = document.getElementById("rasChoice2");
     // rasChoice2.innerHTML = player2.race;
     
    }
     //foto race1 in kader
      switch(selectRace1.value) {
          case "human":
          portret1.src = "resources/img/humans.jpg"
          break;
          case "orc":
          portret1.src = "resources/img/orc.jpg"
          break;
          case "elf":
          portret1.src = "resources/img/elf.jpg"
          break;
          case "vampire":
          portret1.src = "resources/img/vampier.jpg"
          break;
      }
      // foto race2 in kader
      switch(selectRace2.value){
          case "human":
          portret2.src = "resources/img/humans.jpg"
          break;
          case "orc":
          portret2.src = "resources/img/orc.jpg"
          break;
          case "elf":
          portret2.src = "resources/img/elf.jpg"
          break;
          case "vampire":
          portret2.src = "resources/img/vampier.jpg"
          break;
      }
      //foto item1 in kader
      switch(selectItem1.value) {
          case "boots":
          portret1A.src = "resources/img/laarzen.png"
          break;
          case "staff":
          portret1A.src = "resources/img/wc-borstel.png"
          break;
          case "sword":
          portret1A.src = "resources/img/zakmes.png"
          break;
          case "bow":
          portret1A.src = "resources/img/kattapult.png"
          break;
      }
      //foto item2 in kader
      switch(selectItem2.value) {
          case "boots":
          portret2A.src = "resources/img/laarzen.png"
          break;
          case "staff":
          portret2A.src = "resources/img/wc-borstel.png"
          break;
          case "sword":
          portret2A.src = "resources/img/zakmes.png"
          break;
          case "bow":
          portret2A.src = "resources/img/kattapult.png"
          break;
      }
 }
playYield1.addEventListener('click', didGamEnd1); 
    function didGamEnd1(){
        if (turn == players[0]){
            gameOver(players[0].name.value + " yielded");
            changeTurn();
        }
    }
playYield2.addEventListener('click', didGamEnd); 
    function didGamEnd(){
        if (turn == players[1]){
            gameOver(players[1].name.value + " yielded");
            changeTurn();
        }
    }
playHit1.addEventListener("click",attack1);
    function attack1()
    {
        if (turn == players[0]){
            players[1].isattacked(10);
            changeTurn();
        }
    }   
playHit2.addEventListener("click",attack2);
    function attack2()
    {
        if (turn == players[1]){
            players[0].isattacked(10);
            changeTurn();
        }
    }
playHeal1.addEventListener("click", heal1);
    function heal1(){
        if (turn == players[0]){
            players[0].heals(5);
            changeTurn();
        }
    }
playHeal2.addEventListener("click",heal2);
    function heal2(){
        if (turn == players[1]){
            players[1].heals(5);
            changeTurn();
        }
    }
function logadd(message){
    logfield.innerHTML += message + "<br>";
}
function gameOver(loserMessage){
    alert("GAME OVER !!! " + loserMessage);
    logadd("GAME OVER !!! " + loserMessage);
    location.reload(true);
}
function changeTurn(){
    if (turn == players[0])turn = players[1];
    else turn = players[0];
}

 


