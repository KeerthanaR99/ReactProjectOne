import {Fragment} from "react";
import HeaderCartButton from './HeaderCartButton';

import Image from '../../assets/Image.jpg';
import classes from './Header.module.css';

const Header= (props)=> {
    return <Fragment>
        <header className={classes.header}>
            <h3>THE PHYTO BOX</h3>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src= {Image} alt="A basket full of freshness!" />
        
        </div>
    </Fragment>
};
export default Header;