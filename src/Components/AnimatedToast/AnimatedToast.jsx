import React, { Component } from 'react'
import styles from './AnimatedToast.module.css'

import success_icon from './imgs/successful.svg'
import failure_icon from './imgs/failure.svg'
import warning_icon from './imgs/warning.svg'
import info_icon from './imgs/info.svg'


export default class AnimatedToast extends Component {

    constructor(props){
        super(props);
        this.durationTimes = {
            short: 3000, // ms
            normal: 4500, // ms
            long: 6000 // ms
        }
    
        this.messageIsShown = false;
    }
    

    static defaultProps = {
        duration: 'normal',
        borderRadius: '25px'
    }

    launch_toast(message) {
        if(this.messageIsShown) {
            return false; // false means error because another toast is shown already
        }
        this.messageIsShown = true;
        var x = document.getElementsByClassName(styles.toast)[0]
        x.classList.add(styles.show);
        document.getElementsByClassName(styles.desc)[0].innerHTML = message
        setTimeout(function () { 
            x.className = x.className.replace(styles.show, ""); 
            this.messageIsShown = false;
        }.bind(this), this.durationTimes[this.props.duration]);

        return true; // true means toast showed successfully
    }

    render() {
        let icon;
        switch (this.props.type) {
            case 'success':
                icon = success_icon;
                break;
            case 'failure':
                icon = failure_icon;
                break;
            case 'warning':
                icon = warning_icon;
                break;
            case 'info':
            default:
                icon = info_icon;
        };
        if (this.props.icon) icon = this.props.icon;

        return (
            <div className={`${styles.toast} ${styles[this.props.type]} ${styles[this.props.duration]}`}
                style={{ backgroundColor: this.props.backgroundColor, borderRadius: this.props.borderRadius, fontSize: this.props.fontSize }}>
                <img alt='Toast message icon' src={icon} className={styles.img} />
                <div className={styles.desc} style={{ color: this.props.textColor }}></div>
            </div>
        )
    }
}