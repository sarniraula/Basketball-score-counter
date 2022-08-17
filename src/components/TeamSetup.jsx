// import React from 'react'

// const Board = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     border: 4px solid black;
//     margin: 2rem;
//     padding: 2rem;
// `

// const Team = styled.div`
//     text-align: center;
// `
// const inputTeamA = styled.input`
    
// `

// const inputTeamB = styled.input`
    
// `

// const Score = styled.span`
//     font-size: 7rem;
// `

// const Control = styled.div`
    
// `

// const Button = styled.button`
//     margin: 10px;
//     border: none;
//     color: white;
//     background-color: black;
//     border-radius: 15px;
//     padding: 10px 25px;
//     font-family: 'Patrick Hand';
//     font-size: 15px;
// `

// const TeamSetup = () => {
//   return (
//     <Board>
//         <Team>
//             <InputTeamA type="text" onChange={changeHandlerA} value="Team A Name">
//             <Score>{pointTeamA}</Score>
//             <Control>
//                 <Button onClick={teamATwoHandler}>2 ptr</Button>
//                 <Button onClick={teamAThreeHandler}>3 ptr</Button>
//             </Control>
//             <Button onClick={resetA}>Reset A</Button>
//         </Team>
//         <Team>
//             <InputTeamA type="text" onChange={changeHandlerB} value="Team B Name">
//             <Score>{pointTeamB}</Score>
//             <Control>
//                 <Button onClick={teamBTwoHandler}>2 ptr</Button>
//                 <Button onClick={teamBThreeHandler}>3 ptr</Button>
//             </Control>
//             <Button onClick={resetB}>Reset B</Button>
//         </Team>
//     </Board>
//   )
// }

// export default TeamSetup