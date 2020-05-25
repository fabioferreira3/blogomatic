import React, { useState } from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import NumberFormat from "react-number-format"
import _ from "lodash"

import "./SimuladorPoupanca.css"
import { simuladorPoupancaStyles } from "./SimuladorPoupanca.styles"

const selic = 3
const yearYield = selic * 0.7
const monthlyYield = yearYield / 12

const Yields: React.FC<any> = props => {
  const { yieldValue } = props
  const classes = simuladorPoupancaStyles();
  const yieldBlocks = []
  if (yieldValue && yieldValue !== "" && yieldValue !== "0.00") {
    let currentValue = yieldValue
    for (let x = 1; x <= 12; x++) {
      currentValue = currentValue + currentValue * (monthlyYield / 100)
      const block = (
        <Grid container className={classes.monthYield} key={x}>
          <Typography className={classes.month} component={"span"}>{x}º mês:</Typography>
          <Typography className={classes.monthResult} component={"span"}><NumberFormat
            value={currentValue}
            prefix={"R$ "}
            decimalScale={2}
            decimalSeparator={","}
            displayType={"text"}
            thousandSeparator={"."}
          /></Typography>
        </Grid>
      )
      yieldBlocks.push(block)
    }
  }

  const semestersBlocks = _.chunk(yieldBlocks, 6)

  return (
    <>
      {yieldBlocks.length > 0 && (
        <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
          <Typography variant={"h3"} className={classes.yieldSubtitle}>Rendimentos aproximados</Typography>
          <Grid container justify={"center"} className={classes.yieldBlocks}>
            <Box className={classes.firstSemesterBlock}>{semestersBlocks[0]}</Box>
            <Box className={classes.secondSemesterBlock}>{semestersBlocks[1]}</Box>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export const SimuladorPoupanca: React.FC<any> = () => {
  const classes = simuladorPoupancaStyles();
  const [inputYield, setInputYield] = useState<any>(0)
  return (
    <Grid container className={classes.wrapper} direction={"column"} alignItems={"center"} justify={"center"}>
      <Grid container item className={classes.yieldWrapper} alignItems={"center"} justify={"center"}>
        <Typography component={'span'} className={classes.yield}>{yearYield.toFixed(2)}%</Typography>
        <Typography component={'span'} className={classes.yieldComp}>ao ano</Typography>
      </Grid>
      <Grid container className={classes.inputWrapper} alignItems={"center"} justify={"center"}>
        <Box className={classes.inputBox}>
          <label htmlFor="">
            Simular Investimento:{" "}
            <NumberFormat
              name="teste"
              placeholder={"R$ 0,00"}
              decimalSeparator={","}
              prefix={"R$ "}
              thousandSeparator={"."}
              onValueChange={(values: any) => {
                const { floatValue } = values
                setInputYield(floatValue)
              }}
              className={classes.investmentInput}
            />
          </label>
        </Box>
      </Grid>
      <Grid container direction={"column"} alignItems={"center"} className={classes.monthly}>
        <Yields yieldValue={inputYield} />
      </Grid>
    </Grid>
  )
}
