
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Header from './components/NavBar/Header'

function App() {

  return (
    <>
      <Header />
      <h2>Representantes de Artistas</h2>
      <div className="container">
          <ItemListContainer name= 'Lorenzo'
            comentario = 'Lorenzo se ha presentado en mas de 16 diferentes países como Estados Unidos, Dubai, Arabia Saudita, Ecuador, Panamá, Guatemala, Perú, El Salvador, República Dominicana, Costa Rica, Aruba, Honduras, Nicaragua, México, Israel, Francia y muchos otros, haciendo también de apoyo, compa' />
          <ItemListContainer name = 'Maria'
            comentario = 'Maria se ha presentado en mas de 16 diferentes países como Estados Unidos, Dubai, Arabia Saudita, Ecuador, Panamá, Guatemala, Perú, El Salvador, República Dominicana, Costa Rica, Aruba, Honduras, Nicaragua, México, Israel, Francia y muchos otros, haciendo también de apoyo, compartiendo el mismo escenario, con artistas de la talla de ' />
          {/* <ItemListContainer name = 'Carla'
            comentario ='Carla se ha presentado en mas de 16 diferentes países como Estados Unidos, Dubai, Arabia Saudita, Ecuador, Panamá, Guatemala, Perú, El Salvador, República Dominica. ' /> */}

      </div>
    </>
  )
}

export default App
