import './index.scss';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {title: 'const change_directory = () => {...}. Это...', variants: ['константа', 'стрелочная функция', 'функция'], correct: 1,},
  {title : 'Какой метод используется для получения данных из API', variants: ['map', 'addbind', 'fetch'], correct: 2},
  {title : 'Какой хук отвечает за состояние объекта в React?', variants: ['useState()', 'useEffect()', 'useContext()'], correct: 0},
  {title : 'const main = [{true}, {false}, {question}, {red}]', variants: ['Ничего из нижеперечисленного' ,'Это массив', 'Это константа', 'Это функция', 'Объект'], correct: 0},
  {title : 'Будет ли выполняться js код? код: <div> `blocks.map((block) => <p key={block}>`block`</p>)` </div> ?', variants: ['Да', 'Нет', 'Что это'], correct: 1},
  {title : 'Почему ты так думаешь?', variants: ['Это jsx, где js код внутри html должен быть внутри {}', 'Потому что в key надо было передать index', 'Потому что в map нельзя передавать стрелочную функцию'], correct: 0},
  {title : 'За что отвечает react-dom ?', variants: ['За создание пользовательских интерфейсов', 'За визуализацию, рендеринг и отрисовку компонентов в браузер', 'хз ваще'], correct: 1}
];
function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
        <button >Попробовать снова</button>
      </a>
    </div>
  );
}
function Game({question, step, onClickVariant}) {
    const percent = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variants, index) => <li onClick={() => onClickVariant(index)} key={variants}>{variants}</li>)}

      </ul>
    </>
  );
}
function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [questionValue, setQuestionValue] = useState(0)
  const question = questions[step]
  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index == question.correct) {
      setCorrect(correct + 1)


    }
  }

  return (
    <div className="App">
      {step !== questions.length ? (<Game question={question} onClickVariant={onClickVariant} step={step}/>) : <Result correct={correct}/>}

    </div>
  )
}


export default App;