  // Your web app's Firebase configuration
  const firebaseConfig = {
        apiKey: "AIzaSyAGD3rbgNj5rA-RSjo7sDbipFYjqAfTo6g",
        authDomain: "devc-eldoret.firebaseapp.com",
        databaseURL: "https://devc-eldoret.firebaseio.com",
        projectId: "devc-eldoret",
        storageBucket: "devc-eldoret.appspot.com",
        messagingSenderId: "718851993393",
        appId: "1:718851993393:web:194ffadeaf7dda5d8f8a10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// get the login button
document.getElementById('login').addEventListener('click',loginUser);

// get the sign up button
document.getElementById('signUp').addEventListener('click',signUpUser);

// logout
document.getElementById('logout').addEventListener('click',logoutUser);

// login user
function loginUser(e) {
    e.preventDefault();
    let email = getInpVal('email')
    let pass = getInpVal('pass');
    const auth = firebase.auth();
    const promise1 = auth.signInWithEmailAndPassword(email,pass)
    let error = promise1.catch(error => console.log(error.message))
    let wrongCredentials = document.querySelector('.wrongCredentials');
    // wrongCredentials.style.display = 'block';
 
}

// sign up
function signUpUser(e) {
    e.preventDefault();
    let email = getInpVal('email')
    let pass = getInpVal('pass');
    const auth = firebase.auth();
    const promise2 = auth.createUserWithEmailAndPassword(email,pass)
    promise2.catch(error => console.log(error.message))
}

// logout user
function logoutUser(){
    firebase.auth().signOut();
    document.querySelector('.loggedOutAlert').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.loggedOutAlert').style.display = 'none';
        },3000)
        document.getElementById('logout').classList.add('logout');
}

const getInpVal = (id) => {
    return document.getElementById(id).value;
}

firebase.auth().onAuthStateChanged(user => {
    if( user) {
        document.querySelector('.loggedInAlert').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.loggedInAlert').style.display = 'none';
        },4000)
        document.getElementById('logout').classList.remove('logout');
    }
    else{
        console.log('not logged in')
    }
})