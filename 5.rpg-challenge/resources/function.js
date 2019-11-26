 //startbutton
 let btnStart = document.getElementById("start");
        
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

     //aanmaak karakters
     function Person( item, race, name){
         this.item = item;
         this.race = race;
         this.name = name;
         this.currenthealth = 120;
         this.maxHealth = 120;
         
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
 // zorgen dat mijn knoppen verdwijnen als ik op play klik
 
 fname1.style.display = "";
 chooseItems1.style.display = "";
 chooseRaces1.style.display = "";
 fname2.style.display = "";
 chooseItems2.style.display = "";
 chooseRaces2.style.display = "";
 btnStart.addEventListener("click", createCharacter);
     
 function createCharacter(event){
     box3.style.display = "";
     box4.style.display = "";
     fname1.style.display = "none";
     chooseItems1.style.display = "none";
     chooseRaces1.style.display = "none";
     fname2.style.display = "none";
     chooseItems2.style.display = "none";
     chooseRaces2.style.display = "none";

     //aanmaken player 1 met race en item met weergave
     //naam ingeven en verschijnen onder player 1
     let player1 = new Person(selectItem1.value, selectRace1.value, fname1.value);
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
     let player2 = new Person(selectItem2.value, selectRace2.value,fname2.value);
     let nameBoxHolder2 = document.getElementById("speler2");
     nameBoxHolder2.innerHTML = player2.name;
    
     let health2 = document.getElementById("health2");
     health2.innerHTML = player2.currenthealth;

     // let itemChoice2 = document.getElementById("itemChoice2");
     // itemChoice2.innerHTML = player2.item;

     // let rasChoice2 = document.getElementById("rasChoice2");
     // rasChoice2.innerHTML = player2.race;

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


 


