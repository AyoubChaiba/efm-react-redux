import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { useEffect, useState } from "react";
import axios  from "axios";

const App = () => {
    let [ Livers , setLivers] = useState([])
    let [ Genre , setGenre] = useState('Science Fiction')
    let [ panier , setPanier] = useState([])
    useEffect(()=>{
      const fetshLivers = async ()=> {
        try {
          let res = await axios.get('api.json')
          setLivers(res.data.libers)
        } catch (error) {
          console.log(error)
        }
      }
      fetshLivers()
    },[])

  return (
    <div>
      <Header />
      <Outlet />
      <select name="Genre" onChange={(e)=> setGenre(e.target.value)}>
        <option value={'Science Fiction'}>science Fiction</option>
        <option value={'Romance'}>romance</option>
        <option value={'fantasy'}>fantasy</option>
      </select>
      <div>
        <h1>List Livers : {Genre}</h1>
        <div>
          <table>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>aothur</th>
              <th>prix</th>
              <th>actions</th>
            </tr>
            {
              Livers.filter(e => e.Genre === Genre ).map( (e,i) => {
                return (
                  <tr key={i}>
                    <td>{e.ISBN}</td>
                    <td>{e.Titre}</td>
                    <td>{e.Auteur}</td>
                    <td>{e.Prix}</td>
                    <td><button className="red" onClick={() => setPanier([...panier , e])}>add</button></td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
      <div>
        <h1>panier</h1>
        <ul>
        {
          panier.map((e,i)=> {
            return (
              <li key={i}>{`${e.Titre} - ${e.Prix}`}</li>
            )
          })
        }
        </ul>
      </div>
      <div>
        <h1>total - {panier.reduce((t,e)=> t + e.Prix , 0)}</h1>
      </div>
    </div>
  );
};

export default App;
