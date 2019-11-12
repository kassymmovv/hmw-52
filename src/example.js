class  Human{
   age = 0;
    increaseAge = () => {
        this.age ++;
        console.log('Human is now', this.age)
    };
    startLife = () => {
        setInterval(this.increaseAge, 1000)
    }
}
const  h = new Human();
h.startLife();