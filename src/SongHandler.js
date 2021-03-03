import firebase from 'firebase';


//we should have access to every unique song id from push

export default class SongHandler{
    constructor(PushId,uid){
        this.pathing = "Users/" + uid+"/Songs/"+PushId
        console.log(PushId,uid)
        this.reference = firebase.database().ref(this.pathing)

    }
    changeDisplayName( newName , func){
            let updates = {displayName : newName};
            this.reference.update(updates, func)
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
    reportReview(reportData){
        let reportRef = firebase.database().ref("Reported")
        reportRef.push(reportData , error=>{
            if(error){

            }
            else{
                
            }

        })

    }

}