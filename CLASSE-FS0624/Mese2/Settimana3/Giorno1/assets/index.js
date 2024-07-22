

class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName =_firstName,
        this.lastName =_lastName,
        this.age = _age,
        this.location = _location
    }
    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${otherUser.firstName} è più vecchio di ${this.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }

}

const p1= new User('Giulio', 'Oliveri', 25, 'Verona')
console.log(p1);

const p2= new User('Andrea', 'Bastoni', 33, 'Rovereto')
console.log(p2);

console.log (p1.compareAge(p2));
