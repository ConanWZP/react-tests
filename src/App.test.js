import {render, screen, fireEvent, act} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";



describe('test app.js', () => {

  test('renders learn react link', () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/text.../i)
    expect(helloWorld).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument()
    expect(input).toMatchSnapshot()
    // screen.debug()
  })

  test('extra ', async () => {
    render(<App />);
    /*const helloWorldElem = screen.queryByText(/hello2/i)
    expect(helloWorldElem).toBeNull()*/
    screen.debug()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    screen.debug()

  })

  test('toggle', () => {
    render(<App />)
    const btn = screen.getByTestId('toggle-btn')

    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test('input', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/text.../i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // Искусственное событие
   /* fireEvent.input(input, {
      target: {value: '123456'}
    })*/
    // Близко к взаимодействию пользователя, обрабатываются как keydown, так и keyup, т.е. полные события нажатия на клавиши
    act(() => {
      userEvent.type(input, '123456')
    })
    expect(screen.queryByTestId('value-elem')).toContainHTML('123456')

  })



})

