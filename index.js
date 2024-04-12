// function CoffeMachine(power) {
//     this.waterAmount = 0;

//     console.log(`Created coffe machine with ${power}`);
//     function getBoiTime() {
//         return 1000;
//     }

//     function onReady() {
//         alert('Coffee is ready!');

//     }

//     this.run = function () {
//         setTimeout(onReady, getBoiTime());
//     };

// };

// const CoffeMachine = new  CoffeMachine(1000);
// CoffeMachine.waterAmount  = 200;

// const CoffeMachine = new CoffeMachine(500);
// CoffeMachine.waterAmount = 200;

// CoffeMachine.run();


// const makeDrinkForPerson = function (drinkMachine, person) {
//     drinkMachine.waterAmount = 200;

//     const drink = drinkMachine.run();

//     person.give(drink);
// };

// const cocktailMaker = new CoktailMaker('rum', 'cola');
// const person = finPersonByName('john');

// makeDrinkForPerson(cocktailMaker, person);


function Machine() {
    let enabled = false;
    this.azem = true;

    this.enabled = function () {
        enabled = true;
        console.log('enabled1', enabled);
    };


    this.disabled = function () {
        enabled = false;
        console.log('enabled2', enabled);
    };
}
function CoffeMachine(power) {
    Machine.call(this);
    console.log('power', power);
    console.log('this azem', this.azem);

    let waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
        console.log('waterAmount', waterAmount);
    };
}

const coffeMachine = new CoffeMachine(10000);
console.log('coffeMachine', coffeMachine);
coffeMachine.enabled();
coffeMachine.disabled();
coffeMachine.setWaterAmount(500);

