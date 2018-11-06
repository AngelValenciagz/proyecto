import React from 'react';

class Materias extends React.Component {
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
            <div>
                <center>
                <div class="container">
                <h1>Captura de materia</h1>
            </div>


    <table>
        <thead>
            <tr>
                     <th>
                           <label htmlFor="carrera">Carrera</label>
                            <select id="carrera" name="carrera" 
                            value={this.state.carrera}
                            onChange={this.onChange.bind(this)}>
                                <option value="">Seleccione carrera</option>
                                <option value="Sis">Ing. En Sistemas</option>
                                <option value="Ind">Ing. Industrial</option>
                                <option value="Pet">Ing. Petrolera</option>
                                <option value="Meca">Ing. Mecatrónica</option>
                                <option value="Elec">Ing. Electrónica</option>
                                <option value="Gest">Ing. En Gestión Empresarial</option>
                                <option value="ElecM">Ing. Electromecánica</option>
                                <option value="Cont">Lic. Contador Público</option>
                                <option value="EnerRe">Ing. Energías Renovables</option>
                                <option value="Geo">Ing. En Geociencias</option>
                            </select>
                        </th>

                <th>
                    <label>
                        Semestre
                        <select>
                            <option>1°</option>
                            <option>2°</option>
                            <option>3°</option>
                            <option>4°</option>
                            <option>5°</option>
                            <option>6°</option>
                            <option>7°</option>
                            <option>8°</option>
                            <option>9°</option>
                            <option>10°</option>
                            <option>11°</option>
                            <option>12°</option>
                        </select>
                    </label>
                </th>

                <th>
                    <label>Estatus <br/>
                        <input type="radio" onChange={this.onChange.bind(this)}/> Cursando actualmente
                        <input type="radio" onChange={this.onChange.bind(this)}/> Baja temporal
                        <input type="radio" onChange={this.onChange.bind(this)}/> Egresado
                    </label>
                </th>
            </tr>
        </thead>
    </table>

            <div>
                <input id="acept" name="acept" type="checkbox" 
                value={this.state.acept} 
                onChange={this.onChange.bind(this)}/> Aceptar terminos y condiciones
            </div>

            <div>
                <button onClick={this.save.bind(this)}>Guardar</button>
                <span style={{color: 'green'}}>{this.state.message}</span>
            </div>

           <div>
                 <span>{JSON.stringify(this.state)}</span>
           </div>
        
                </center>

            </div>
            

        );
    }
}

export default Materias;