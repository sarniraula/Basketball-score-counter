import React, {useState} from 'react'
import styled from 'styled-components'

const Board = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 4px solid black;
    margin: 2rem;
    padding: 2rem;
`

const Team = styled.div`
    text-align: center;
`
const Title = styled.h1`
    
`
const Score = styled.span`
    font-size: 7rem;
`

const Control = styled.div`
    
`

const Button = styled.button`
    margin: 10px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 15px;
    padding: 10px 25px;
    font-family: 'Patrick Hand';
    font-size: 15px;
`

const Counter = () => {
    const [ pointTeamA, setPointTeamA] = useState(0)
    const [ pointTeamB, setPointTeamB] = useState(0)

    const teamATwoHandler = () => {
        setPointTeamA(pointTeamA + 2);
    }

    const teamBTwoHandler = () => {
        setPointTeamB(pointTeamB + 2);
    }

    const teamAThreeHandler = () => {
        setPointTeamA(pointTeamA + 3);
    }

    const teamBThreeHandler = () => {
        setPointTeamB(pointTeamB + 3);
    }

    const resetA = () => {
        setPointTeamA(0)
    }

    const resetB = () => {
        setPointTeamB(0)
    }

  return (
    <Board>
        <Team>
            <Title>PUL</Title>
            <Score>{pointTeamA}</Score>
            <Control>
                <Button onClick={teamATwoHandler}>2 ptr</Button>
                <Button onClick={teamAThreeHandler}>3 ptr</Button>
            </Control>
            <Button onClick={resetA}>Reset A</Button>
        </Team>
        <Team>
            <Title>TEC</Title>
            <Score>{pointTeamB}</Score>
            <Control>
                <Button onClick={teamBTwoHandler}>2 ptr</Button>
                <Button onClick={teamBThreeHandler}>3 ptr</Button>
            </Control>
            <Button onClick={resetB}>Reset B</Button>
        </Team>
    </Board>
  )
}

export default Counter