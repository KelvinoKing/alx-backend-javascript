interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Kelvin',
	lastName: 'Njoroge',
	age: 22,
	location: 'Nairobi',
};

const student2: Student = {
	firstName: 'Steve',
	lastName: 'Irungu',
	age: 23,
	location: 'Nakuru',
};

const studentsList: Student[] = [student1, student2];

const table = document.getElementById('student-table') as HTMLTableElement;
studentsList.forEach((student) => {
	const row = table.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);

	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});
