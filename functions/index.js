const functions = require('firebase-functions');
const admin= require('firebase-admin');
/*initialize admin*/
admin.initializeApp(functions.config().firebase);

/*grab the fire store node */
const firestore = admin.firestore();


exports.updateReferalName = functions.firestore
  .document('registeredUsers/{userId}')
  .onCreate( event => {
    /*get an object which is added by the users*/
      const userData = event.data.data();
      /*get an referalId for the user*/
      const referedBy = userData['referedBy'] || '';

      /*get the specific referal name on the basis referal id*/
      firestore
        .collection("registeredUsers")
        .doc(referedBy)
        .get()
        .then(referal => {
          if (!referal.exists) {
            console.log('No such referal exists!');
          } else {
            /*get the referal name add push it the respective created users*/
            let referalName = referal.data()['firstName'] + " "+ referal.data()['lastName'];
            return event.data.ref.set({referalName},{merge : true})
          }
        })
        .catch(err => {
          console.log('Error getting referal', err);
        });

  });


exports.updateAdsCollection = functions.firestore
  .document('adsCollection/{adsId}')
  .onCreate( event => {
    let adsData = {};
    adsData.node_id = event.params.adsId;
    return event.data.ref.set(adsData,{merge : true});
  });
