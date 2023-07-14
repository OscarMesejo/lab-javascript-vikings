// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }  
    attack(){
        return this.strength;
    }
    receiveDamage(thedamage){

    }
}


// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength);
    }
}

// Saxon
class Saxon {}

// War
class War {}
