import React from "react";
import "./student.css";
const Student=({data}) => {
    return (
        <div className="icard">
            <table border={1}>
                <tbody>
                <tr><td style={{color: "green"}} colspan={2}>{data.college}</td></tr>
                <tr><td colspan={2}><img src={data.pic} /></td></tr>
        <tr><th>Name</th><td>{data.name}</td></tr>
        <tr><th>RollNo:</th><td>{data.roll}</td></tr>
        <tr><th>Branch:</th><td>{data.branch}</td></tr>
        <tr><th>Section:</th><td>{data.section}</td></tr>
                </tbody>
            </table>
           {/* {JSON.stringify(data)} */}
        </div>
    )
}

Student.defaultProps={
    college:"AKG Engineering College",
}
export default Student;