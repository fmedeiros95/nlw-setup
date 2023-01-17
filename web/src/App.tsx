import './styles/global.css';

import Habit from './components/Habit';

export default function App() {
  return (
    <div className="flex items-center justify-center">
      <Habit completed={0} total={10} />
      <Habit completed={2} total={10} />
      <Habit completed={5} total={10} />
      <Habit completed={7} total={10} />
      <Habit completed={6} total={10} />
      <Habit completed={10} total={10} />
    </div>
  )
}