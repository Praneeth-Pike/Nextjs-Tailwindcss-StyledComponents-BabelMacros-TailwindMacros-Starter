import React from 'react'
import '../styles/index.css';
import preval from 'preval.macro';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';

const whoami = preval`
  const userInfo = require('os').userInfo()
  module.exports = userInfo.username
`

const Pre = styled.pre`
  font-size: 48px;
  ${tw`bg-pink-400`};
`

const Bazinga = styled.h1`
  ${tw`text-6xl text-red-400 font-bold`};
`

// const Paragraph = tw.p`
//   text-4xl text-pink-400;
// `

export default WhoAmI

function WhoAmI () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="p-4 shadow rounded bg-green-100">
      <h1>
        <Pre>whoami: {whoami}</Pre>
      </h1>

      <Bazinga>
        Bazinga!!
      </Bazinga>
      {/* <Paragraph>Lorem Ipsum dolor set amet</Paragraph> */}
    </div>
  )
}
