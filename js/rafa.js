!function() {
  //constructor for the weapons
  var weapon = function(name, cost, fa, type, dodge, critic, range, speed, weight){
    this.name =  name;
    this.cost = cost;
    this.fa = fa;
    this.type = type;
    this.dodge = dodge;
    this.critic = critic;
    this.range = range;
    this.speed = speed;
    this.weight = weight;
  };
  //armor constructor
  var armor = function(name, cost, fd, critic, penFocus, penAbi, weight){
    this.name =  name;
    this.cost = cost;
    this.fd = fd;
    this.critic = critic;
    this.penFocus = penFocus;
    this.penAbi = penAbi;
    this.weight = weight;
  };
  //item constructor
  var item = function(name, weight, cost){
    this.name =  name;
    this.weight = weight;
    this.cost = cost;
    
  };

  //List of weapons
  var weaponList = [];
  weaponList.push(new weapon("Unarmed","0","S+A+1d","Contusion","0","0","0","0",0));
  weaponList.push(new weapon("Acid","10","H+1d+2","Chemical","-2","0","3m","0",0.5));
  weaponList.push(new weapon("Dagger","2","F+H+1d+1","Puncture","-1","1","3m","1",0.5));
  weaponList.push(new weapon("Holy Water","25","H+2d-1","Chemical","-2","0","3m","",0.5));
  weaponList.push(new weapon("Stick","2","F+H+1d+2","Contusion","1","0","0","-1",1.5));
  weaponList.push(new weapon("Crosbow","35","PdF+H+2d-2","Puncture","0","1","12m","-1",2.5));
  weaponList.push(new weapon("Crosbow Arrow (10)","1","0","Puncture","0","0","0","0",0.5));
  weaponList.push(new weapon("Club","0","F+H+1d+2","Contusion","0","0","3m","0",1.5));
  weaponList.push(new weapon("Alchemist Fire","20","H+1d+2","Fire/Heat","-2","0","3m","0",0.5));
  weaponList.push(new weapon("Sling","0","PdF+H+1d+1","Contusion","-2","0","10m","1",0));
  weaponList.push(new weapon("Sling Rocks(10)","1","0","Contusion","0","0","0","0",2));
  weaponList.push(new weapon("Spear","2","F+H+1d+2","Puncture","1","2","5m","0",2));
  weaponList.push(new weapon("Light Mace","5","F+H+1d+2","Contusion","0","0","0","1",2.5));
  weaponList.push(new weapon("Halberd","10","F+H+2d","Cut/Punct.","1","2","0","-1",6.5));
  weaponList.push(new weapon("Short Bow","30","PdF+H+1d+2","Puncture","0","2","10m","-1",1));
  weaponList.push(new weapon("Long Bow","75","PdF+H+2d-2","Puncture","0","2","15m","-1",1));
  weaponList.push(new weapon("Arrows(10)","1","0","Puncture","0","0","0","0",1));
  weaponList.push(new weapon("Scimitar","15","F+H+1d+2","Cut","0","1","0","0",1.5));
  weaponList.push(new weapon("Short Sword","10","F+H+1d+2","Cut","0","0","0","1",1));
  weaponList.push(new weapon("Large Sword","50","F+H+2d+2","Cut","1","1","0","-1",6.5));
  weaponList.push(new weapon("Long Sword","15","F+H+2d-2","Cut","1","1","0","0",1.5));
  weaponList.push(new weapon("Sickle","18","F+H+2d-1","Cut","1","3","0","-1",5.5));
  weaponList.push(new weapon("Battle Axe","10","F+H+2d-2","Cut","0","0","0","0",3));
  weaponList.push(new weapon("War Hammer","12","F+H+2d-2","Contusion","0","0","0","0",3.5));
  weaponList.push(new weapon("Trident","15","F+H+2d-2","Puncture","1","0","3m","0",2));
  weaponList.push(new weapon("Whip","1","F+H+1d","Cut","0","0","0","0",1));
  weaponList.push(new weapon("Bastard Sword","35","F+H+2d","Cut","1","1","0","0",4));

  //List of Armors
  var armorList = [];
  armorList.push(new armor("Padded Armor", "5", "A+H+1d+1", "0","0","0",4.5));
  armorList.push(new armor("Leather Armor", "10", "A+H+1d+2", "1","-1","0",6.5));
  armorList.push(new armor("Buckler", "15", "FD+1", "0","-1","0",2));
  armorList.push(new armor("Scale Mail", "50", "A+H+2d-1", "2","-2","-1",13.5));
  armorList.push(new armor("Chain Mail", "50", "A+H+2d", "2","-3","-2",18));
  armorList.push(new armor("Medium Wooden Shield", "7", "FD+2", "0","-1","-1",2.5));
  armorList.push(new armor("Splint Mail", "200", "A+H+2d+1", "2","-4","-3",20.5));
  armorList.push(new armor("Full Plate", "1500", "A+H+3d+3", "3","-3","-2",22.5));
  armorList.push(new armor("Large Wooden Shield", "30", "FD+3", "0","-2","-3",4.5));

  //List of items
  var itemList = [];
  itemList.push(new item("Aconite handfull","1⁄2","1GP"));
  itemList.push(new item("Handcuffs","1","15GP"));
  itemList.push(new item("Pouch","0","2GP"));
  itemList.push(new item("Fish Hook","0","1SP"));
  itemList.push(new item("Portable Battering ram","9","10GP"));
  itemList.push(new item("Animal Armor","0","0"));
  itemList.push(new item("Bucket","1","5SP"));
  itemList.push(new item("Chest","11","4GP"));
  itemList.push(new item("Padlock","1⁄2","40GP"));
  itemList.push(new item("Ceramic Mug","1⁄2","2CP"));
  itemList.push(new item("Pen","0","1SP"));
  itemList.push(new item("Canteen-1⁄2-Liters","1⁄2","3CP"));
  itemList.push(new item("Blanket","1.5","2GP"));
  itemList.push(new item("Common Rope-15m","4.5","1SP"));
  itemList.push(new item("Silk Rope-15m","2","1GP"));
  itemList.push(new item("Rope Ladder-3m","1","3GP"));
  itemList.push(new item("Mirror","1⁄2","10GP"));
  itemList.push(new item("Paper Sheet","0","2GP",""));
  itemList.push(new item("Parchment Sheet","0","1GP"));
  itemList.push(new item("Glass Bottle","0","1GP"));
  itemList.push(new item("Glass Carboy-5-Liters","0","2GP"));
  itemList.push(new item("Grimoire","1.5","15GP"));
  itemList.push(new item("Musical Instrument-(String)","1.5","5GP"));
  itemList.push(new item("Musical Instrument-(Percusion)","1.5","5GP"));
  itemList.push(new item("Musical Instrument-(Breath)","1.5","5GP"));
  itemList.push(new item("Montaineering-Kit","2.5","80GP"));
  itemList.push(new item("Alchemy-Kit","20","500GP"));
  itemList.push(new item("Healer-Kit","1⁄2","50GP"));
  itemList.push(new item("KIT-DE-DISFARCE","4","50GP"));
  itemList.push(new item("KIT-DE-FERREIRO","10","10GP"));
  itemList.push(new item("KIT-DE-LADINO","1","30GP"));
  itemList.push(new item("LÂMPADA","1⁄2","1SP"));
  itemList.push(new item("LANTERNA","1","7GP"));
  itemList.push(new item("LENHA-SECA-POR-DIA","9","1CP"));
  itemList.push(new item("LENTE-DE-AUMENTO","0","100","GP"));
  itemList.push(new item("LIVRO-DE-ORAÇÕES","1.5","10GP"));
  itemList.push(new item("LONA-m2","1⁄2","1SP"));
  itemList.push(new item("LUNETA-PEQUENA","1⁄2","1.000GP"));
  itemList.push(new item("MARTELO-COMUM","1","5SP"));
  itemList.push(new item("MINI-ORATÓRIO","20","40GP"));
  itemList.push(new item("MOCHILA-GRANDE","2","4GP"));
  itemList.push(new item("MOCHILA-MÉDIA","1","2GP"));
  itemList.push(new item("MOCHILA-PEQUENA","1⁄2","1GP"));
  itemList.push(new item("ÓLEO-1⁄2-Litro","1⁄2","1SP"));
  itemList.push(new item("PÁ","3.5","5GP"));
  itemList.push(new item("PANELA-DE-FERRO","4","5SP"));
  itemList.push(new item("PEDERNEIRA","0","1GP"));
  itemList.push(new item("PEDRA-PARA-AMOLAR","1⁄2","2CP"));
  itemList.push(new item("PÓLVORA","1⁄2","200GP"));
  itemList.push(new item("RAÇÃO-POR-DIA","1⁄2","5SP"));
  itemList.push(new item("REDE-DE-PESCA-7m2","2","4GP"));
  itemList.push(new item("ROUPA-COMUM","4","10GP"));
  itemList.push(new item("ROUPA-LUXUOSA","5","75GP"));
  itemList.push(new item("ROUPA-SIMPLES","1","1SP"));
  itemList.push(new item("SABÃO-1⁄2-","1/2","5","P",""));
  itemList.push(new item("SACO-DE-DORMIR","2","1SP"));
  itemList.push(new item("SELA","15","30GP"));
  itemList.push(new item("SELA-COM-BOLSOS","10","15GP"));
  itemList.push(new item("SÍMBOLO-SAGRADO","1⁄2","25GP"));
  itemList.push(new item("TENDA","9","10GP"));
  itemList.push(new item("TINTA-FRASCO","0","8GP"));
  itemList.push(new item("TOCHA","1⁄2","1CP"));
  itemList.push(new item("VELA","0","1CP"));

  var Player = function(name,gender){
    this.name = name;
    this.gender = gender;
    this.inventory = [];
    this.gold = 0;
    this.characteristics = {
      strenght: 0,
      ability: 0,
      armor: 0,
      resistance: 0,
      distanceAtack:0,
    };
    this.hp = 5;
    this.mp = 4;
  };

  var dice = {
    d4:4,
    d6:6,
    d8:8,
    d10:10,
    d12:12,
    d20:20,
    d100:100,
    roll: function(sizes,qtt) {
      var totalRoll = 0;
      var thisRoll = 0;
      if (qtt === undefined) qtt=1;
      //console.log(qtt);
      var i = 1;
      do {
        thisRoll = Math.floor((Math.random()*sizes+1));
        console.log("You Roll "+ i + " value: "+ thisRoll);
        totalRoll += thisRoll;
        i++;

      }while (i <= qtt);
      return totalRoll;
    }
  };



  var rafa = new Player("Rafael", "male");
  //console.log(rafa);

  console.log(dice.roll(dice.d20));
}();

