import React from "react";
import { Container, Paper, Chip } from "@material-ui/core";
//import cars from '../cars.json' // remove this

const Biz = props => {
  const id = props.match.params.id;
  {
    /* Change cars to props.cars and remove the cars.json import above */
  }
  const biz = props.biz.find(c => c.id == id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{biz.Name}</h2>
        {Object.keys(biz).map((key, idx) => {
          return <Chip label={`${key}: ${biz[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Biz;
