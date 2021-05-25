import React, {useState, useEffect} from 'react';
import SimpleMap from './carte';

function Application() {
  const [initialData, setInitialData] = useState([{}]);
  const [lt, setLt] = useState(48.865983);
  const [lg, setLg] = useState(2.275725);
   
    useEffect(()=>{
        fetch("/api").then(
          response => response.json()
        ).then(data => setInitialData(data))
    },[]);
  function getCoordonate(e){
    e.preventDefault();
    var coordonate = e.target.value.split(","); 
    setLt(coordonate[0]);
    setLg(coordonate[1]);
  }
  return (
    <div className="monappli">
      <h1 className='alert alert-success'>Position velib</h1>
      
      <div className="box">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 bl">
          <center><h2>Options d'affichage</h2></center>

          <form action ="#" method="post" id="form_options">
           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
							<label className='langue pull-left'>Veuillez selectionner une station</label>
							<select onChange={getCoordonate} className="form-control form-group" name="anonymat">
                {
                   initialData.completed ? initialData.data.map((station)=>  <option value={station[1]} key={station[1]}>{station[0]}</option>) : <option>Aucune donnée</option>
                }
							</select>
						</div>
          </form>

        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 bl">
          {'Latitude: '+lt+' | '+'Longitude: '+lg}
          <SimpleMap lat={lt}  lng={lg}/>
        </div>
      </div>
    </div>
  );
}

export default Application;
