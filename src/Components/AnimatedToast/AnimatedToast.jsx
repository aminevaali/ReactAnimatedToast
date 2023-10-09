import React, { Component } from 'react'
import styles from './AnimatedToast.module.css'

import success_icon from './imgs/successful.svg'
import failure_icon from './imgs/failure.svg'
import warning_icon from './imgs/warning.svg'
import info_icon from './imgs/info.svg'


export default class AnimatedToast extends Component {

    launch_toast(message) {
        var x = document.getElementsByClassName(styles.toast)[0]
        x.classList.add(styles.show);
        document.getElementsByClassName(styles.desc)[0].innerHTML = message
        setTimeout(function () { x.className = x.className.replace(styles.show, ""); }, 5000);
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
        if(this.props.icon) icon = this.props.icon;

        return (
            <div className={`${styles.toast} ${styles[this.props.type]}`} style={{backgroundColor: `${this.props.backgroundColor}`}}>
                <img alt={this.props.imgAlt ? this.props.imgAlt : "toast img"} src={icon} className={styles.img} />
                <div className={styles.desc}></div>
            </div>
        )
    }
}