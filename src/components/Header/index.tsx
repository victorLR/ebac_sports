import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Produto } from '../../App'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const items = useSelector((state: RootReducer) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{items.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
