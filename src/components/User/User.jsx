import React from "react";


function User(){
    return(
        <div className="user">
            <ul className="user__list flex justify-content-spaceBtw">
                <li className="user__list-user user__list-item"></li>
                <li className="user__list-search user__list-item "></li>
                <li className="user__list-purchases user__list-item">
                    <span className="purchases-count">0</span>
                </li>
            </ul>
        </div>
    );
}


export default User;