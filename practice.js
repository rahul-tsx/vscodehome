//create a function taht takes an array of objects as input and returns the users whose age >18 and are male.

const user = [
	{
		name: 'rahul',
		age: 21,
		gender: 'male',
	},
	{
		name: 'Priti',
		age: 24,
		gender: 'female',
	},
	{
		name: 'Vishal',
		age: 12,
		gender: 'male',
	},
];

const filterUser = (userArray) => {
	const fillteredUser = userArray.filter(
		(user) => user.age > 18 && user.gender === 'male'
	);
	return fillteredUser;
};

console.log(filterUser(user));
