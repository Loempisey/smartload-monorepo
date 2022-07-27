import { Avatar, Typography } from '@mui/material';
import styles from './../../../styles/presentations/cards/ProductCard.module.css';
export default function ProductCard({src,name,desc,react}){
    return(
    <div className={styles.container}>
        <div className="card">
            
            <div className={styles.card_info}>
                <img src={src} alt="img"/>
                <h3>{name}</h3>
                <p className="card-text">
                    {desc}
                    <Typography style={{marginTop:"10px",marginLeft:"0px"}}>{react}</Typography>
                </p>  
                
            </div>
        </div>
    </div>
    )
}