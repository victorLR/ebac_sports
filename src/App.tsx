import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { store } from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { adicionar, remover } from './store/reducers/favoritos'
import { RootReducer } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  // Função para favoritar ou remover do favoritos
  const favoritar = (produto: Produto) => {
    if (favoritos.find((f) => f.id === produto.id)) {
      dispatch(remover(produto))
    } else {
      dispatch(adicionar(produto))
    }
  }

  return (
    <Provider store={store}>
      {' '}
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
