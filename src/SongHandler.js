import firebase from 'firebase';


//we should have access to every unique song id from push

class SongHandler{
    constructor(PushId){
        this.pathing = "Users/" + firebase.auth().currentUser.uid+"/Songs/"+PushId
        this.reference = firebase.database().ref(pathing)

    }
    changeDisplayName( newName){
            let updates = {displayName : newName};
            this.reference.update(updates)
    }
    setBudget(number){
        let updates = {budget: number}
        this.reference.update(updates)
    }
    placeInGlobal(){

    }
    gatherReviews(){
        return this.reference.child("reviews").get()
    
    }
    //will contain the reason for reporting
    // username of the reporter
    //data of the report
    //place in a global scope
    reportReview(ReportData){


    }

}