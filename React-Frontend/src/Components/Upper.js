import React from 'react';
import review from '../Components/Images/review-vector.png';
import upload  from '../Components/Images/upload-vector.png';
import wallet from '../Components/Images/wallet-vector.png';
import TopBarButton from './TopBarButton';
export default class Upper extends React.Component{

    render(){
        return(
            <div className="top-bar">
       
            <TopBarButton  id = "upload-topbar"  image = {upload}/>
            <TopBarButton id = "review-topbar"  image = {review}/>
            <TopBarButton  id = "wallet-topbar"  image = {wallet}/>
            
           
 

      
            
            </div>
        );
    }

}