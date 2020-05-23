import React, { useState } from "react"
import NumberFormat from "react-number-format"
import _ from "lodash"

import "./SimuladorPoupanca.css"

const selic = 3
const yearYield = selic * 0.7
const monthlyYield = yearYield / 12

const Yields: React.FC<any> = props => {
  const { yieldValue } = props
  const yieldBlocks = []
  if (yieldValue && yieldValue !== "" && yieldValue !== "0.00") {
    let currentValue = yieldValue
    for (let x = 1; x <= 12; x++) {
      currentValue = currentValue + currentValue * (monthlyYield / 100)
      const block = (
        <div className={"monthYield"} key={x}>
          <span className={"month"}>{x}º mês:</span>
          <span className={"monthResult"}>
            <NumberFormat
              value={currentValue}
              prefix={"R$ "}
              decimalScale={2}
              decimalSeparator={","}
              displayType={"text"}
              thousandSeparator={"."}
            />
          </span>
        </div>
      )
      yieldBlocks.push(block)
    }
  }

  const semestersBlocks = _.chunk(yieldBlocks, 6)

  return (
    <>
      {yieldBlocks.length > 0 && (
        <>
          <h3>Rendimentos aproximados</h3>
          <div className="yieldBlocks">
            <div className="firstSemesterBlock">{semestersBlocks[0]}</div>
            <div className="secondSemesterBlock">{semestersBlocks[1]}</div>
          </div>
        </>
      )}
    </>
  )
}

export const SimuladorPoupanca: React.FC<any> = () => {
  const [inputYield, setInputYield] = useState<any>(0)
  return (
    <div className={"mainStuffWrapper"}>
      <div className={"yieldWrapper"}>
        <span className={"yield"}>{yearYield.toFixed(2)}%</span>
        <span className={"yieldComp"}>{` ao ano`}</span>
      </div>
      <div className={"inputWrapper"}>
        <div className={"input"}>
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
            />
          </label>
        </div>
      </div>
      <div className={"monthly"}>
        <Yields yieldValue={inputYield} />
      </div>
    </div>
  )
}
