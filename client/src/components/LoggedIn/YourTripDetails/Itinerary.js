import React from 'react';
// import { useTable } from 'react-table';

export default function () { 
    
    // const data = React.useMemo(() => fakeData, []);
//     const columns = React.useMemo(() => [])

    // {
    //     Header: "Date",
    //     accessor: ""
    // }

    return (
        <div id="itinerary-container">
            <div className="itinerary-cards card border-primary shadow mx-auto mb-4 col-4">
                <h3>Day 1</h3>
                <table className="table">
                    <div className="table-contents">
                        <tr>
                            <th>Time</th>
                            <th>Activity</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>9:00am</td>
                            <td>Breakfast</td>
                            <td>Meet at the lobby and head to restaurant for breakfast!</td>
                        </tr>
                        <tr>
                            <td>11:00am</td>
                            <td>Site 1</td>
                            <td>Meet at the lobby and take the shuttle bus to site 1</td>
                        </tr>
                        <tr>
                            <td>1:00pm</td>
                            <td>Lunch</td>
                            <td>Lunch at restaurant</td>
                        </tr>
                    </div>
                </table>
                <button className="btn btn-primary btn-sm add-activity-btn">
                    Add an Activity
                </button>
            </div>

            <div className="itinerary-cards card border-primary shadow mx-auto mb-4 col-4">
                <h3>Day 2</h3>
                <table className="table">
                    <div className="table-contents">
                        <tr>
                            <th>Time</th>
                            <th>Activity</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>9:00am</td>
                            <td>Breakfast</td>
                            <td>Meet at the lobby and head to restaurant for breakfast!</td>
                        </tr>
                    </div>
                </table>
                <button className="btn btn-primary btn-sm add-activity-btn">
                    Add an Activity
                </button>
            </div>
        </div>
    )
}