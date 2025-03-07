import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events-details',
    templateUrl: './events-details.component.html',
    styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.myInterval = setInterval(() => {
            this.commingSoonTime();
        }, 0);
    }
    
    pageTitleContent = [
        {
            title: 'Digital Marketing: Customer Engagement & Social Media',
            backgroundImage: 'assets/img/page-title/page-title2.jpg'
        }
    ]

    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    myInterval: any;
    commingSoonTime = () => {
        const endTimeParse = (Date.parse('March 20, 2024 17:00:00 PDT')) / 1000;
        const now = new Date();
        const nowParse = (Date.parse(now.toString()) / 1000);
        const timeLeft = endTimeParse - nowParse;
        const days = Math.floor(timeLeft / 86400);
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < 10) { hours = 0 + hours; }
        if (minutes < 10) { minutes = 0 + minutes; }
        if (seconds < 10) { seconds = 0 + seconds; }
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

}