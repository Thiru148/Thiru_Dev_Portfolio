import React from 'react'
import { certification } from '../../portfolio'
import kubernetesLogo from "../../assets/images/kubernetes.png"
import azureAdLogo from "../../assets/images/AZ-104.jpeg"
import azureFunLogo from "../../assets/images/AZ-900.png"
import "./CertificationStyles.css"
const CertificationCard = () => {
    const {certifications} = certification
    const [kubernetes, azureAd,azureFun] =certifications
    //const mendixEntries = Object.entries(mendix)
    
  return (
    <div>
        <div className='certifications-div'>
        <a className='certificate-link'href={kubernetes.link} target='_blank'>
        <ul style={{width:"300px",height:"150px",background:"rgb(135,206,235,0.9)",textAlign:"center"}}>
        <img style={{width:"100px",height:"100px"}}src={kubernetesLogo} alt='kubernetes-logo'/>
        <li>{kubernetes.title}</li>
        <li>{kubernetes.subtitle}</li>  
        </ul> </a>
        <a href={azureAd.link} target='_blank'>
        <ul style={{width:"300px",height:"150px",background:"#ffffff",textAlign:"center"}}>
        <img style={{width:"150px",height:"100px"}} src={azureAdLogo} alt='azureAd-logo'/>
        <li style={{color:"#000080"}}>{azureAd.title}</li>
        <li style={{color:"#000080"}}>{azureAd.subtitle}</li>
        </ul> </a>
        <a href={azureFun.link} target='_blank'>
        <ul style={{width:"300px",height:"150px",background:"rgb(135,206,235,0.9)",textAlign:"center"}}>
        <img style={{width:"150px",height:"100px"}} src={azureFunLogo} alt='azureFun-logo'/>
        <li>{azureFun.title}</li>
        <li>{azureFun.subtitle}</li>
        </ul>
        </a>
         </div>
    </div>
  )
}

export default CertificationCard