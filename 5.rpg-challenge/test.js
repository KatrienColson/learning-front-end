var john = {
    fullName: 'John Smidt',
    bills: [124, 48, 258, 190, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.lenght; i++)
        {
          var percetage; 
          var bill = this.bills[i];
            if (bill  < 50) {
                percentage = 0.2;
            }else if (bill >= 50 && bill < 200) {
                percentage = 0.15;
            }else {
                percentage = 0.1;
            }
            this.tips[i]= bill * percentage;
            this.finalValues[i] = bill * bill * percentage;

        }
    }
}
// john.calcTips();
// console.log(john);

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.lenght; i++)
        {
          var percetage; 
          var bill = this.bills[i];
            if (bill  < 100) {
                percentage = 0.2;
            }else if (bill >= 100 && bill < 300) {
                percentage = 0.1;
            }else {
                percentage = 0.25;
            }
            this.tips[i]= bill * percentage;
            this.finalValues[i] = bill * bill * percentage;

        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.lenght; i++){
        sum = sum +tips[i];
    }
    return sum / tips.length;
}
//[2,4,6]==>2/2/8/12

// do the calculations
john.calcTips();
mark.calcTips();
//sconsole.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);