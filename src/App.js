import Header from "./components/Header"
import Cards from "./components/Cards"
import cardsData from "./cardsData"

export default function App() {
  const map = cardsData.map (
    item => {
        return <Cards 
                    key={item.id}
                    {...item}
                />
    })

  return (
  <div className="my-app">
    <div className="container">
      <Header/>
      {map}
    </div>
  </div>
  
  );
}


