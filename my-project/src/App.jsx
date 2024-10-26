import { useState } from "react"
import Banner from "./components/Banner"
import Cricket from "./components/cricket"
import CricketLife from "./components/cricket-life"
import Header from "./components/Header"
import Click from "./assets/click"
const App = () => {
  const [addMoney, setaAddMoney] = useState(0);
    
    const handleTheBtn = () => {
        setaAddMoney(addMoney + 100000);
    };
  return (
   <div className="student">
    {/*header */}

    <Header addMoney={addMoney} />
    {/* Banner section */}
   <Banner handleTheBtn={handleTheBtn} />
   
    {/*cricket life */}
    <CricketLife />
    {/* recipe cards section */}
    
    <section>
      {/*cards section */}
    <Cricket />

    <Click />
    <fake />
    </section>
   
  </div>
  )
}



export default App