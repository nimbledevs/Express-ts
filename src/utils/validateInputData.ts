import validator from 'validator';
import isEmpty from 'is-empty';

const userDataProps={
userInfo: {
    username: {
        type: String,
        required: true,
        validate: (username:string) => validator.isAlphanumeric(username) && validator.isLength(username, {min: 3, max: 20})
    },
    email: {
        type: String,
        required: true,
        validate: (email:string) => validator.isEmail(email)
    },
    password: {
        type: String,
        required: true,
        validate: (password:string) => validator.isLength(password, {min: 6, max: 30})
    }
}

}


const validateLoginInput=async(userData)=>{
userData.username = !isEmpty(userData.username) ? userData.username :"";
userData.email = !isEmpty(userData.email) ? userData.email :"";
userData.password = !isEmpty(userData.password) ? userData.password :"";

if()
}