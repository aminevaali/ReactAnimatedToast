import React, { Component } from 'react'
import styles from './AnimatedToast.module.css'

import success_icon from './imgs/successful.svg'
import failure_icon from './imgs/failure.svg'
import warning_icon from './imgs/warning.svg'
import info_icon from './imgs/info.svg'


export default class AnimatedToast extends Component {

    durationTimes = {
        short: 3000, // ms
        normal: 4500, // ms
        long: 6000 // ms
    }

    static defaultProps = {
        duration: 'normal'
    }

    launch_toast(message) {
        var x = document.getElementsByClassName(styles.toast)[0]
        x.classList.add(styles.show);
        document.getElementsByClassName(styles.desc)[0].innerHTML = message
        setTimeout(function () { x.className = x.className.replace(styles.show, ""); }, this.durationTimes[this.props.duration]);
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