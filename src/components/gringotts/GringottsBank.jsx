import { useState } from 'react'
import { Link } from "react-router-dom"
import darkredmagic from "./darkredmagic.png"
// import MoneyDisplay from './MoneyDisplay'

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardimage from "./cardimage.svg"
import moneyimage from "./moneyimage.svg"

export default function GringottsBank() {

  const [balance, setBalance] = useState(0)

  return (
    <>
      <div className="main-text-container">
        <h1 className="main-text-header">Gringotts</h1>
      </div>
      <img className="background-image" src={darkredmagic} alt="blurred red background" />
      <div className="card-container">
        <Card className="gringotts-cards" style={{ backgroundColor: "rgb(66, 2, 2)" }} sx={{ width: 345, height: 525 }}>
          <CardContent>
            <Typography variant="h4" color="goldenrod">
              Your Balance
            </Typography>
            <Typography variant="h5" color="goldenrod">
              {balance} Galleons
            </Typography>
            <Typography variant="h2">
              <Button size="large" variant="contained" style={{ backgroundColor: "goldenrod", color: "rgb(66, 2, 2)", width: 200, height: 55 }} onClick={() => setBalance(balance + 50)}>withdraw 50 galleons</Button>
              <Button size="large" variant="contained" style={{ backgroundColor: "goldenrod", color: "rgb(66, 2, 2)", width: 200, height: 55 }} onClick={() => setBalance(0)}>Return all money</Button>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="Stacks of gold coins"
            height="400"
            image={moneyimage}
            title="Stacks of gold coins"
          />
        </Card>

        <Card className="gringotts-cards" style={{ backgroundColor: "rgb(66, 2, 2)" }} sx={{ width: 345, height: 525 }}>
          <CardMedia
            component="img"
            alt="Owl with wand and book"
            height="400"
            image={cardimage}
            title="Owl with wand and book"
          />
          <CardContent>
            <Typography color="goldenrod">
              Now that you have money, it's time to get your new pet, school books, and a wand.
              <Link to="/gringotts-shopping"><Button size="small">Go shopping for school supplies</Button></Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}