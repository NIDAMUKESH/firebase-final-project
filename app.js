// const app = firebase.initializeApp(firebaseConfig);
console.log(app)

const signup = () => {
    let username = document.getElementById('username').value;
    let contact = document.getElementById('Contant').value;
    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;
    let role = 'User';

    console.log(email, password);
    
    // Initialize Firebase with your config (make sure you've done this in a separate script)
    const app = firebase.initializeApp(firebaseConfig);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            // Store user data in the Realtime Database
            return firebase.database().ref('users/' + user.uid).set({
                uid: user.uid,
                username: username,
                role: role,
                contact: contact,
                email: email,
                password: password
            });
        })
        .then(() => {
            const user = { email: email };
            localStorage.setItem('user', JSON.stringify(user));
            console.log('User created successfully.');
            window.location.href = './User1.html';
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage);
        });
}


const signin = () => {
    let email = document.getElementById('Email').value
    let password = document.getElementById('Password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log(user)
            const dbRef = firebase.database().ref();
            dbRef.child("users").child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val()
                    if (userData.role === 'Admin') {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        console.log('User created successfully.')
                        window.location.href = '../Admin/items/items.html'
                    }
                    else {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location.href = '../Home/home.html'
                    }
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage)
        });

}