import React from 'react'

let gameText = null;

class Battle {
    contructor(enemies){
        this.enemies = enemies;
    }

    gameStart(){
        switch (this.enemies.length) {
            case 1:
                gameText = `The ${this.enemies[0].type} materialized in front of you!`
            case 2:
                gameText = `The ${this.enemies[0].type} & ${this.enemies[1].type} materialized in front of you!`
            case 3:
                gameText = `The ${this.enemies[0].type}, ${this.enemies[1].type}, & ${this.enemies[2].type} materialized in front of you!`
            default:
                break;
        }
    }

};

const DungeonBattle = ({ enemies }) => {

    const battle = new Battle(enemies);

    battle.gameStart();

    return gameText ? (
        <div>
            <h1>{gameText}</h1>
        </div>

    ) : null
}

export default DungeonBattle