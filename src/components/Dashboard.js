import React, { Component } from "react";
import {
  Grid,
  Switch,
  Slider,
  MenuItem,
  Select,
  InputLabel,
  Typography,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Hours</TableCell>
                <TableCell align="left">Address</TableCell>
              </TableRow>
            </TableHead>
            {this.props.biz.map(biz => (
              <TableBody>
                <TableRow key={biz.id}>
                  <TableCell align="left">{biz.name}</TableCell>
                  <TableCell align="left">{biz.description}</TableCell>
                  <TableCell align="left">{biz.hours}</TableCell>
                  <TableCell align="left">{biz.address}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>

          {/* <p>{biz.name}</p> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;

// <TableBody>
//       {/* Change cars to props.cars and remove the cars.json import above */}
//       {props.cars.map(car => (
//         <TableRow key={car.id}>
//           <TableCell component="th" scope="row">
//             {car.id}
//           </TableCell>
//           <TableCell>{car["Name"]}</TableCell>
//           <TableCell>{car["Miles_per_Gallon"]}</TableCell>
//           <TableCell>{car["Cylinders"]}</TableCell>
//           <TableCell>{car["Displacement"]}</TableCell>
//           <TableCell>{car["Horsepower"]}</TableCell>
//           <TableCell>{car["Weight_in_lbs"]}</TableCell>
//           <TableCell>{car["Acceleration"]}</TableCell>
//           <TableCell>{car["Year"]}</TableCell>
//           <TableCell>{car["Origin"]}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>

//REFER TO LAST THREE HOMEWORK ASSIGNMENTS FOR GUIDANCE
