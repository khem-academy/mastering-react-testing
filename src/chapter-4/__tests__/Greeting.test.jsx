import React from 'react'
import renderer from 'react-test-renderer'
import Greeting from '../Greeting'

test('Greeting component renders correctly', () => {
  const tree = renderer.create(<Greeting name="John Doe" />).toJSON()
  expect(tree).toMatchSnapshot()
})
