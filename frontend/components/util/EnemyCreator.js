import faker from "@faker-js/faker"

const shuffle = (type, ownArray) => {

    const phraseArray = [
        faker.git.commitMessage(),
        faker.git.branch()
    ]

    const adjectiveArray = [
        faker.hacker.adjective(),
        faker.commerce.productAdjective(),
        faker.company.catchPhraseAdjective()
    ]

    let num = 0;

    switch (type) {
        case 'tagLine':
            num = Math.floor(Math.random() * (phraseArray.length - 1))
            return phraseArray[num]
        case 'adjective':
            num = Math.floor(Math.random() * (adjectiveArray.length - 1))
            return adjectiveArray[num]
        case 'speak':
            num = Math.floor(Math.random() * (ownArray.length - 1))
            return ownArray[num]

    }

}

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

class Enemy {
    constructor(playerLevel, type, level){
        this.name = faker.name.firstName()
        this.type = capitalize(shuffle('adjective')) + " " + type;
        this.tagLine = capitalize(shuffle('tagLine')) + "!"
        this.hitPoints = Math.floor(playerLevel) ;
        this.attack = Math.floor(playerLevel)
        this.defense = Math.floor(playerLevel)
        this.level = level;
        this.idleImage = 'hash_gargoyle_idle.png'
    }

    attacks(playerHitPoints){
        let responseObject = {}
        let chance = Math.floor(Math.random() * 100)

        if(chance > 25){
            responseObject['hitPoints'] = playerHitPoints - Math.floor(this.attack * 1.25);
            responseObject['text'] = `The ${this.type} punched you! Ouch!`
        } else {
            responseObject['hitPoints'] = playerHitPoints
            responseObject['text'] = `The ${this.type}'s punch missed!`
        }

        return responseObject
    }

    speak(){
        const spoken = [
            `The ${this.type} screamed "${this.tagline}"`,
            `The ${this.type} screamed "My name is ${this.name}"`
        ]
        return shuffle('speak', spoken)
    }

    idle(){
        return `The ${this.type} is sleepy`
    }
}

export default Enemy;