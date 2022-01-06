const firebaseConfig = {
  apiKey: "AIzaSyCgNPUBQjYOgFpnf7iiv0F2q31CXD3iVI4",
  authDomain: "chefserendib-2da48.firebaseapp.com",
  databaseURL: "https://chefserendib-2da48-default-rtdb.firebaseio.com",
  projectId: "chefserendib-2da48",
  storageBucket: "chefserendib-2da48.appspot.com",
  messagingSenderId: "162955003828",
  appId: "1:162955003828:web:44f981a00c2604fe7a94e1",
  measurementId: "G-QDPCH4KL2R",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

var responseDB = firebase.database().ref("responses");

var fileButton1 = document.getElementById("photo-input");
var fileButton2 = document.getElementById("vphoto-input");
fileButton1.addEventListener("change", function (e) {
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref("img/" + file.name);
  var task = storageRef.put(file);
  task.on(
    "state_changed",
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {},
    function complete() {}
  );
});

document.getElementById("submit-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = document.querySelector("#name-input").value;
  var email = document.querySelector("#email-input").value;
  var address = document.querySelector("#address-input").value;
  var number = document.querySelector("#contact-Number").value;
  var age = document.querySelector("#age-input").value;
  var userphoto = document.querySelector("#photo-input").value;
  var vyes = document.querySelector("#vaccination-yes").value;
  var vno = document.querySelector("#vaccination-no").value;
  var vcardphoto = document.querySelector("#vphoto-input").value;
  var chefyes = document.querySelector("#chef-yes").value;
  var chefno = document.querySelector("#chef-no").value;
  var chefschool = document.querySelector("#chef-school").value;
  var chefsyes = document.querySelector("#chefs-yes").value;
  var chefsno = document.querySelector("#chefs-no").value;
  var resname = document.querySelector("#chef-res").value;
  var respos = document.querySelector("#chef-pos").value;

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
    resname,
    respos
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
  resname,
  respos
) => {
  var newResponseDB = responseDB.push();

  newResponseDB.set({
    Name: name,
    Email: email,
    Address: address,
    Number: number,
    Age: age,
    UserPhoto: userphoto,
    ISvaccinatedYes: vyes,
    ISvaccinatedNo: vno,
    vaccinationCard: vcardphoto,
    ISSchooledYes: chefyes,
    ISSchooledNo: chefno,
    School: chefschool,
    IsChefYes: chefsyes,
    IsChefNo: chefsno,
    ResName: resname,
    ResPostions: respos,
  });
};
