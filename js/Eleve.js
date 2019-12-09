class Eleve {
    constructor(name, last, sexe){
        this.name = name
        this.last = last
        this.sexe = sexe
    }
    hello(){
        let presence
        if (this.sexe === 'H'){
            presence = " Présent"
        }else if (this.sexe === 'F'){
            presence = " Présente"
        }
        return this.name + " " + this.last + presence
    }
}
