import { withNewTodo } from './producers/withNewTodo'

test('Adds todo to correct dashboard', () => {

  // given
  const baseState = [
    {
      id: 1,
      title: "first dashboard",
      todos: [
        { id: 1, title: "first title", description: "first desc"}
      ]
    }
  ]

  const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => ({ getTime: () => 2 }))

  // when
  const nextState = withNewTodo(baseState, 1, "second title", "second desc")

  spy.mockRestore()

  // then
  expect(nextState).toEqual([
    {
      id: 1,
      title: "first dashboard",
      todos: [
        { id: 1, title: "first title", description: "first desc"},
        { id: 2, title: "second title", description: "second desc"},
      ]
    }
  ])
  expect(baseState).toEqual([
    {
      id: 1,
      title: "first dashboard",
      todos: [
        { id: 1, title: "first title", description: "first desc"}
      ]
    }
  ])
})
