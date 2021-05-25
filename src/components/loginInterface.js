import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '',};
      
    }
    
    handleChangeLogin(event) {
      localStorage.setItem('login',event.target.value);   
    }

    handleChangepwd(event) {
      localStorage.setItem('pwd',event.target.value);   
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let login = localStorage.getItem('login');
        let pwd = localStorage.getItem('pwd');
        let val = (login==='test@gmail.com' && pwd==='1234')?true:false;
        val===true? window.location.reload(false):alert('Identifiant incorrect veuillez reessayer');
      
    }
  
    render() {
      return (
            <div name='connexion' className="connexion panel panel-primary col-xs-3 col-lg-3 col-sm-3 col-md-3">
				<div className="panel-heading">
					<h4><center><span className='langue'>Connexion</span><br/><span  id='error_connect'></span></center></h4>
				</div>
				<div className="panel-body">
					<form action ="#" method="post"  onSubmit={this.handleSubmit} id="form_connexion">
                        <div className="form-group">
                            <label className="login">Login: </label>
                            <input type="text" className="form-control " onChange={this.handleChangeLogin} name="login" placeholder="Ex: test@gmail.com" required></input>
						</div>
                        <div className="form-group">
                            <label className="pwd">Password: </label>
                            <input type="password" className="form-control" onChange={this.handleChangepwd} name="pwd" required></input>
						</div>
                        <button className="btn btn-success">Envoyer</button>
                    </form>
				</div>
			</div>
      );
    }
  }
  export default Login;