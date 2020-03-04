const students = [
    {id: 12, name: "Mohon"},
    {id: 152, name: "Nazrul"},
    {id: 22, name: "Mia"},
    {id: 20, name: "Dinislam"},
    {id: 21, name: "Abrar"}
];

const result1 = students.map(rs1 => rs1.id);
console.log(result1);
const result2 = students.map(rs1 => rs1.name);
console.log(result2);

const resultFilter = students.filter(rsF => rsF.id> 20);
console.log(resultFilter);