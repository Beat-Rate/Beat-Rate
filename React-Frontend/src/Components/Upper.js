import React from 'react';
import review from '../Components/Images/review-vector.png';
import upload  from '../Components/Images/upload-vector.png';
import wallet from '../Components/Images/wallet-vector.png';
import TopBarButton from './TopBarButton';
export default class Upper extends React.Component{

    render(){
        return(
            <div className="top-bar">
                
            <TopBarButton  id = "upload-topbar"  label = "Upload Song!" image = {upload}/>
            <TopBarButton id = "review-topbar" label = "View Reviews!" image = {review}/>
            <TopBarButton  id = "wallet-topbar" label = "Add Funds!" image = {wallet}/>
            
     
            <br/>
            <h2>{this.props.pageTitle}</h2>
            <h4>.</h4>
            <h3>{this.props.size}</h3>
      
            
            </div>
        );
    }

}