import React from 'react'
import '../styles/index.css';
import preval from 'preval.macro';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';

const whoami = preval`
  const userInfo = require('os').userInfo()
  module.exports = userInfo.username
`

const H1 = styled.h1`
  ${tw`text-4xl font-bold tracking-tight`};
`

// const Paragraph = tw.p`
//   text-4xl text-pink-400;
// `

export default WhoAmI

function WhoAmI () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="p-4 shadow rounded bg-green-100">
      <H1>
        <pre>whoami: {whoami}</pre>
      </H1>
      {/* <Paragraph>Lorem Ipsum dolor set amet</Paragraph> */}
    </div>
  )
}
