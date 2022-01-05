const firebaseConfig = {
  apiKey: "AIzaSyBVpDfGp6MGFAJ1uNILRn6aowjaeFatGvo",
  authDomain: "chefserendib-32a86.firebaseapp.com",
  databaseURL: "https://chefserendib-32a86-default-rtdb.firebaseio.com",
  projectId: "chefserendib-32a86",
  storageBucket: "chefserendib-32a86.appspot.com",
  messagingSenderId: "1072885979192",
  appId: "1:1072885979192:web:f03f5c507bef40e4faaecd",
  measurementId: "G-X1GX7V9J7X",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

const db = firestore.collection("fomData");

document.getElementById("submit-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById("name-input");
  let email = document.getElementById("email-input");
  let address = document.getElementById("address-input");
  let number = document.getElementById("contact-Number");
  let age = document.getElementById("age-input");
  let userphoto = document.getElementById("photo-input");
  let vyes = document.getElementById("vaccination-yes");
  let vno = document.getElementById("vaccination-no");
  let vcardphoto = document.getElementById("vphoto-input");
  let chefyes = document.getElementById("chef-yes");
  let chefno = document.getElementById("chef-no");
  let chefschool = document.getElementById("chef-school");
  let chefsyes = document.getElementById("chefs-yes");
  let chefsno = document.getElementById("chefs-no");
  let reschef = document.getElementById("chef-res");
  let resname = document.getElementById("chef-state");

  db.doc()
    .set({
      fullname: name,
      Email: email,
      Address: address,
      Number: number,
      Age: age,
      UserPhoto: userphoto,
      vaccinationYes: vyes,
      vaccinationNo: vno,
      vaccinationCard: vcardphoto,
      chefYes: chefyes,
      chefNo: chefno,
      chefSchool: chefschool,
      chefsYes: chefsyes,
      chefsNo: chefsno,
      resChef: reschef,
      resName: resname,
    })
    .then(() => {
      console.log("Data saved");
    })
    .catch((error) => {
      console.log(error);
    });
}
