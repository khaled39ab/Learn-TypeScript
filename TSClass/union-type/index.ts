let user: string | number | boolean;

user = 'Aaa';
user = 102;
user = true;

function userRef (userCode: string | number) {
    console.log(userCode)
}

userRef(123)
userRef('Ami')