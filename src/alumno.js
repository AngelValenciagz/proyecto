import React from 'react';
//import ReactDOM from 'react-dom';
import Estados from '../src/estados'

class Alumno extends React.Component {
    constructor(args){
        super(args)
        this.state = {
            matric: '',
            nombre: '',
            carrera: '',
            about: '',
            message: ''
        }
    }
    
    onChange(e){
    
        if(e.target.name === 'acept'){
            this.setState({
                [e.target.name]: e.target.checked
            }) 
        }else{
            
            this.setState({
                [e.target.name]: e.target.value
                })
             }
        }
    
        save(e){
    
            if(!this.validate()){
                return;
            }
    
            this.setState({
                message: 'Guardado correctamente'
            })
        }
    
        validate(){
            if(this.state.acept != true){
                this.setState({
                    message: 'Acepte los términos y condiciones'
                })
    
                return false
            }
    
            return true
        }
    
    
    render(){
        return(
            <center>
                
                <div>
                    <div className="container">
                    <h1>Captura de datos del alumno</h1>
                </div>
                    <table className="table my-3">
                        <thead>
                            <tr>
                                <th scope="col">    
                                    <label htmlFor="matric">Matricula</label>
                                    <input 
                                    value={this.state.matric} 
                                    onChange={this.onChange.bind(this)} 
                                    name="matric" id="matric" type="text" />
                                </th>
    
                        <th scope="col">
                            <label htmlFor="nombre">Nombre</label>
                                <input 
                                value={this.state.nombre}
                                onChange={this.onChange.bind(this)}
                                name="nombre" id="nombre" type="text" />
                        </th>
                        
                        <th scope="col">
                                <label>Apellido Paterno</label>
                                <input />
                        </th>
    
                        <th scope="col">
                            <label>Apellido Materno</label>
                            <input />
                        </th>           
                    </tr>
        
        <tr>
                                      
            <th>
                <div>
                    <label htmlFor="genero" >Genero</label>
                    <input type="radio" name="genero"value="m" onChange={this.onChange.bind(this)}/>Hombre
                    <input type="radio" name="genero" value="w" onChange={this.onChange.bind(this)}/>Mujer
                </div>
            </th>
    
            <th>
                <label>Edad</label>
                <input />
            </th>
    
            <th>
                <label>Telefono</label>
                <input />
            </th>
    
            <th>
                <label>Correo electronico</label>
                <input />
            </th>
        </tr>
    
        <tr>
            <th>
            
                    <Estados />
                </th>
    
                <th>
                    <label>Colonia</label>
                    <input/>
                </th>
    
                <th>
                    <label>Calle</label>
                    <input/>
                </th>
    
                <th>
                    <label>Telefóno de casa</label>
                    <input/>
                </th>
    
        </tr>
    
        <tr>
    
                <th>
                    <label>Número exterior</label>
                    <input/>
                </th>
    
                <th>
                    <label>Número interior (opcional)</label>
                    <input/>
                </th>
    
                <th>
                    <label>Código Postal
                            <a target="_blank" href="https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx" id="enlaceEnviar">
                            Consulta tu código postal aquí
                            </a>
                    </label>
                    <input/>
                </th>
        </tr>
                    </thead>      
            </table>
            
                <label htmlFor="about">Descripción</label> <br/>
                <textarea id="about" name="about"
                value={this.state.about}
                onChange={this.onChange.bind(this)}/>

    </div>
    </center>

        );
    }
}

export default Alumno;
       