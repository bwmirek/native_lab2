const _ = require('lodash');

console.log(_.mean([1, 2, 3]));

const user = {
	name: 'Imie',
	surname: 'Nazwisko',
	allGrades: [
		{
			subjectName: 'Name1',
			grades: [5, 4, 3, 5, 2],
			weight: 3
		},
		{
			subjectName: 'Name2',
			grades: [3, 3.5, 2],
			weight: 1
		},
		{
			subjectName: 'Name3',
			grades: [4, 3, 3.5],
			weight: 5
		}
	]
}

const extractInfo = () => {
	let grades = 0;
	let wages = 0;

	user.allGrades.forEach(subject => {
		let sum = _.sum(subject.grades);
		grades += sum * subject.weight;
		wages += subject.weight * subject.grades.length;
	});

	console.log(`${user.name} ${user.surname} - ${grades / wages}`);
}
extractInfo();

console.log(_.find(user.allGrades, subject => subject.weight === 1));

const collections = [
	{},
	15,
	'hello@test.pl',
	null,
	['aaa', 'bbb', 5],
	'admin@gmail.com',
	undefined,
	'a34@yahoo.com',
	'321@a',
	'321.pl'
];

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const getMail = (collection) => {
	return _.filter(collection, item => typeof (item) === 'string' && re.test(item)).sort();
}

console.log(getMail(collections));