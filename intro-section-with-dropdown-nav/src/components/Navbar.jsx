import React from "react";
import logo from '../images/logo.svg';
import TodoList from '../images/icon-todo.svg';
import Calender from '../images/icon-calendar.svg';
import Reminder from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';




function Navbar() {
    const FeaturesDropdown= [
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

    const CompanyDropdown= [
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
    ]
    return(
        <nav className="navbar">
                <div className="navbar-desktop">
                    {/* row--one */}

                    <div className="navbar__item row1">
                        <img className="navbar__item--logo" src={logo} alt="logo" />

                        <ul className="menus">
                            <li className="list-items">
                                <a href="/">Features</a>

                                <ul className="dropdown-list features">
                                {FeaturesDropdown.map((menu, index) => {
                                    return(
                                        <li className="list-item" key={index}>
                                            <object aria-labelledby="list-items" data={menu.icons}></object>
                                            <a href={menu.url}>{menu.title}</a>
                                        </li>
                                    )
                                }

                                )}
                                </ul>
                            </li>
                            <li className="list-items">
                                <a href="/">Company</a>

                                <ul className="dropdown-list company">
                                {CompanyDropdown.map((menu, index) => {
                                    return(
                                        <li className="list-item" key={index}>
                                            <a href={menu.url}>{menu.title}</a>
                                        </li>
                                    )
                                }

                                )}
                                </ul>
                            </li>

                            <li className="list-items"><a href="/">Careers</a></li>
                            <li className="list-items"><a href="/">About</a></li>
                        </ul>
                    </div>


                    {/* row--two*/}


                    <div className="navbar__item row2">
                            <ul className="navbar__list-item">
                                <li><a href="/">Login</a></li>
                                <li><a href="/" className="nav-links__list--button">Register</a></li>
                            </ul>
                    </div>
                </div>



                <div className="navbar-mobile">
                    <div className="navbar__item row1">
                            <img className="navbar__item--logo" src={logo} alt="logo" />
                        </div>


                        {/* row--two*/}


                        <div className="navbar__item row2">
                            <ul className="menus">
                                <li className="list-items">
                                    <a href="/">Features</a>

                                    <ul className="dropdown-list features">
                                    {FeaturesDropdown.map((menu, index) => {
                                        return(
                                            <li className="list-item" key={index}>
                                                <object aria-labelledby="list-items" data={menu.icons}></object>
                                                <a href={menu.url}>{menu.title}</a>
                                            </li>
                                        )
                                    }

                                    )}
                                    </ul>
                                </li>
                                <li className="list-items">
                                    <a href="/">Company</a>

                                    <ul className="dropdown-list company">
                                    {CompanyDropdown.map((menu, index) => {
                                        return(
                                            <li className="list-item" key={index}>
                                                <a href={menu.url}>{menu.title}</a>
                                            </li>
                                        )
                                    }

                                    )}
                                    </ul>
                                </li>

                                <li className="list-items"><a href="/">Careers</a></li>
                                <li className="list-items"><a href="/">About</a></li>
                            </ul>
                            <ul className="navbar__list-item">
                                <li><a href="/">Login</a></li>
                                <li><a href="/" className="nav-links__list--button">Register</a></li>
                            </ul>
                        </div>
                </div>
        </nav>
    )
}







export default Navbar;


