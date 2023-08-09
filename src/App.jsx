import './App.css'

function App() {
  return (
    <div className='app__fullscreen'>
        <div className='wrapper'>
            <p className='text__one'>Раньше здесь был сайт интернет-магазина Hobby-t, 
однако <span>теперь мы называемся Мыловарня мадам Котовской, </span>
а ассортимент и цены остались те же:)</p>
          <p className='text__two'>
          Как попасть на наш новый сайт?
          </p>
          <p className='text__three'>Нажмите на кнопку ниже или наберите в поисковой строке “Мыловарня мадам Котовской” </p>
          <div className='button'><a href="http://www.mkotovskaya.ru/">
                Перейти на наш новый сайт
                </a></div>
        </div>
    </div>
  )
}

export default App
