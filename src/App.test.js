import { withNewDashboard } from './producers/withNewDashboard'

test('renders learn react link', () => {
  const base = [
    { id: 1, title: "1d", todos: [ { id: 1, title: "1t", description: "1d"}]}
  ]
  const nextState = withNewDashboard(base)
  expect(next).toBe();
});
