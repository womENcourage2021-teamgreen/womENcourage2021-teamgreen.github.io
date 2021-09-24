
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCC5DqxsKtbOFM3Wk6BMfZ1f8ppyFNbowk",
    authDomain: "womencourage2021.firebaseapp.com",
    projectId: "womencourage2021",
    storageBucket: "womencourage2021.appspot.com",
    messagingSenderId: "593126197612",
    appId: "1:593126197612:web:5047a6a74dea1136284b49",
    databaseURL: "https://womencourage2021-default-rtdb.europe-west1.firebasedatabase.app/",
    measurementId: "G-57ZY6C9K8Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var database = firebase.database();


  export function getcomments() {
    const dbRef = database.ref();
    dbRef.child("comments").child(0).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    
    //firebase request get first ten comments
    /*
    for (var i = 0; i < elements.length; i ++) {
        var iDiv = document.createElement('div');

    }

    var iDiv = document.createElement('div');

    iDiv.id = 'block';
    iDiv.className = 'block';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    var div2 = document.createElement('div');

    div2.className = 'block-2';
    iDiv.appendChild(div2);
    */
   console.log("HEY");

}


export function showcomment(idnumber) {
    var elements = document.getElementsByClassName("comment-id-"+idnumber)
    for (var i = 0; i < elements.length; i ++) {
        elements[i].style.display = 'block';
    }
    document.getElementsByClassName("comment-id-alert-"+idnumber)[0].style.display = "none";
}

export function hidecomment(idnumber) {
    var elements = document.getElementsByClassName("comment-id-"+idnumber)
    for (var i = 0; i < elements.length; i ++) {
        elements[i].style.display = 'none';
    }
    document.getElementsByClassName("comment-id-alert-"+idnumber)[0].style.display = "block";
}


