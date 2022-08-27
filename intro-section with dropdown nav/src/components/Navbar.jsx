import React from "react";
import logo from '../images/logo.svg';
import OpenIcon from '../images/icon-arrow-down.svg'
import TodoList from '../images/icon-todo.svg';
import Calender from '../images/icon-calendar.svg';
import Reminder from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';



function Navbar() {
    const features = [
        {
            title: "Todo List",
            url: "/",
            icons: TodoList
        },
        {
            title: "Calender",
            url: "/",
            icons: Calender
        },
        {
            title: "Reminders",
            url: "/",
            icons: Reminder
        },
        {
            title: "Planning",
            url: "/",
            icons: Planning
        },
    ]
    const company = [
        {
            title: "History",
            url: "/",
        },
        {
            title: "Our Team",
            url: "/",
        },
        {
            title: "Blog",
            url: "/",
        },
    ];

    
    return (
        <nav className="navbar">
            <img className="logo" src={logo}></img>
            <div className="nav--links">
                <ul className="nav--links--left">
                    <li className="listItem flex">
                        <a>Features</a>
                        <object data={OpenIcon} type=""></object>
                        
                        <ul className="dropdown--menu">
                            {features.map((listItem, index) => {
                                return (
                                    <li className="list-item--dropdown listItem" key={index}>
                                        <object data={listItem.icons}></object>
                                        <a href={listItem.url}>{listItem.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        
                    </li>
                    <li className="listItem flex">
                        <a>Company</a>
                        <object data={OpenIcon} type=""></object>
                        <ul className="dropdown--menu">
                            {company.map((listItem, index) => {
                                return (
                                    <li className="list-item--dropdown listItem" key={index}>
                                        <a href={listItem.url}>{listItem.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li className="listItem"><a>Careers</a></li>
                    <li className="listItem"><a>About</a></li>
                </ul>
                
                <ul className="nav--links--right">
                    <li className="listItem"><a>Login</a></li>
                    <li className="listItem"><a>Register</a></li>
                </ul>
            </div>
        </nav>
    )
}







export default Navbar;


