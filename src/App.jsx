import random from 'randomstring-ng';
import NeBasTakoGlavni, { Naslov, Naslov2 as MaliNaslovic } from './Naslovi'
import * as bundled from './Naslovi'

function App() {

  return (
    <>
      <h1>{random.generate()}</h1>
      <br />
      <NeBasTakoGlavni />
      <Naslov />
      <MaliNaslovic />
      <br />
      <bundled.default />
      <bundled.Naslov />
      <bundled.Naslov2 />
    </>
  )
}

export default App
