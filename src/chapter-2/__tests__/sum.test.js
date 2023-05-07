function sum(a, b) {
  return a + b
}

test('sum adds numbers correctly', () => {
  expect(sum(1, 2)).toBe(3)
})
