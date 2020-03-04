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
  makeStyles
} from "@material-ui/core";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.biz.map(biz => (
          <div>
            <p>{biz.name}</p>
          </div>
        ))}
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
