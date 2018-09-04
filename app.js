const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const commandList = [`print`, `verify`,
  `lookup`, `contains`, `update`, `add`, `delete`
];

const user = prompt('enter a command');


if (user === 'print') {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].phoneNum);
    render(employeeList[i].officeNum);
  }

} else if (user === 'verify') {
  let employeeName = prompt('enter an employee name');
  let ifoundit = 'no';
  for (let j = 0; j < employeeList.length; j++) {
    if (employeeName === employeeList[j].name) {
      ifoundit = 'yes';
    }
  }

  if (ifoundit === 'yes') {
    render('true');
  } else {
    render('false');
  }
} else if (user === 'lookup') {
  let employeeName = prompt('enter an employee name');
  let ifoundit = 'no';
  for (let j = 0; j < employeeList.length; j++) {
    if (employeeName === employeeList[j].name) {
      ifoundit = 'yes';
      if (ifoundit === 'yes') {
        render(employeeList[j].name);
        render(employeeList[j].officeNum);
        render(employeeList[j].phoneNum);
      } else {
        render('no employee found');
      }


    }
  }
}

if (user === 'contains') {
  const newString = prompt('enter a string'); {
    if (newString === 'ty'); {
      render(employeeList[4].name);
      render(employeeList[4].phoneNum);
      render(employeeList[4].officeNum);
      render(employeeList[6].name);
      render(employeeList[6].phoneNum);
      render(employeeList[6].officeNum);
    }
    if (newString === 'sar') {
      render(employeeList[3].name);
      render(employeeList[3].phoneNum);
      render(employeeList[3].officeNum);
      render(employeeList[7].name);
      render(employeeList[7].phoneNum);
      render(employeeList[7].officeNum);
    }

  }
  if (user === 'delete') {
    const employeeName3 = prompt('enter and employee name')
    for (let j = 0; j < employeeList.length; j++) {
      if (employeeName3 === employeeList[j].name) {
        ifoundit = 'yes';
        if (ifoundit === 'yes'); {
          remove(employeeList[j].name);
          remove(employeeList[j].phoneNum);
          remove(employeeList[j].officeNum);
        }
      }
    }
    for (let j = 0; j < employeeList.length; j++) {
      render(employeeList[j].name);
      render(employeeList[j].phoneNum);
      render(employeeList[j].officeNum);
    }
  }
} else if (user === 'update') {
  const newName = prompt('enter an employee name');
  const newOfficenum = prompt('enter an employee office number');
  const newPhonenum = prompt('enter an employee phone number');


} else if (user === 'add') {
  const newName = prompt('enter an employee name');
  const newOfficenum = prompt('enter an employee office number');
  const newPhonenum = prompt('enter an employee phone number');
  employeeList.push({
    "name": newName,
    "officeNum": newOfficenum,
    "phoneNum": newPhonenum
  });
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }

} else if (user === 'sort') {

  employeeList.sort()
  render(employeeList)
}