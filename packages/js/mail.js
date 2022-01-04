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

// reference your database
var chefSerendibDB = firebase.database().ref("ChefSerendib");

document.getElementById("submit-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementValue("name-input");
  var email = getElementValue("email-input");
  var address = getElementValue("address-input");
  var number = getElementValue("contact-Number");
  var age = getElementValue("age-input");
  var userphoto = getElementValue("photo-input");
  var vyes = getElementValue("vaccination-yes");
  var vno = getElementValue("vaccination-no");
  var vcardphoto = getElementValue("vphoto-input");
  var chefyes = getElementValue("chef-yes");
  var chefno = getElementValue("chef-no");
  var chefschool = getElementValue("chef-school");
  var chefsyes = getElementValue("chefs-yes");
  var chefsno = getElementValue("chefs-no");
  var reschef = getElementValue("chef-res");
  var resname = getElementValue("chef-state");

  saveMessages(
    name,
    email,
    address,
    number,
    age,
    userphoto,
    vyes,
    vno,
    vcardphoto,
    chefyes,
    chefno,
    chefschool,
    chefsyes,
    chefsno,
    reschef,
    resname
  );
}

const saveMessages = (
  name,
  email,
  address,
  number,
  age,
  userphoto,
  vyes,
  vno,
  vcardphoto,
  chefyes,
  chefno,
  chefschool,
  chefsyes,
  chefsno,
  reschef,
  resname
) => {
  var newChefSerendib = chefSerendibDB.push();
  newChefSerendib.set({
    name: name,
    email: email,
    address: address,
    number: number,
    age: age,
    userphoto: userphoto,
    vyes: vyes,
    vno: vno,
    vcardphoto: vcardphoto,
    chefyes: chefyes,
    chefno: chefno,
    chefschool: chefschool,
    chefsyes: chefsyes,
    chefsno: chefsno,
    reschef: reschef,
    resname: resname,
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).nodeValue;
};
