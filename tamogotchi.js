const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 3,
    mood: 4, 
    getStatus () { 
        if(this.meal === 0 || this.energy === 0 || this.mood === 0) {
            return `${this.name} умер :(\n Game over!!!`
        }
               
    const eatMood = this.meal < 3 ? "Еда: Я голоден" : " Еда: Я не голоден";
    const energy = this.energy < 3 ? 'Энергия: Я хочу спать' : 'Энергия: Я не хочу спать';
    const mood = this.mood < 3 ? 'Настроение: Мне скучно' : 'Настроение: Мне весело'
    return `Имя: ${this.name}, ${eatMood} (${this.meal}), ${energy} (${this.energy}), ${mood} (${this.mood})`
      },
    setName (NewName) {
        this.name = NewName
    },
    eat () {
        if (this.meal < 5) {
            this.meal += 1
            this.mood -= 1
        } else if (this.meal === 5 && this.mood !== 0) {
            this.mood -=1
        }
    },
    sleep () {
        if (this.energy < 5) {
            this.energy += 1
            this.meal -= 1
        } else if (this.energy === 5 && this.meal !== 0) {
            this.meal -=1
        }
    },
    play () {
          if (this.mood < 5) {
              this.mood += 1
              this.energy -= 1
          } else if (this.modd === 5 && this.energy !== 0) {
            this.energy -=1
        }
    }
  }
  tamogotchi.setName('Sharpuddi')
 
 

  console.log(tamogotchi.getStatus())