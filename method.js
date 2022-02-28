const student = {
    name: 'mustafiz',
    age: 34,
    money: 5000,
    major: 'math',
    subjects: ['math-101', 'stat', 'physics'],
    bestFriends: {
        name: 'ahsan',
        occupation: 'student'
    },
    takingExam: function () {
        console.log(this.name, "taking exam");
    },
    takingBalance: function (balance, cost) {
        this.money = this.money - balance - cost;
        return this.money;
    }

}
student.takingExam();
const remaining = student.takingBalance(4000, 500);
console.log(remaining);
