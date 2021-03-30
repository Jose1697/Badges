import React from 'react';



class  Prueba extends React.Component{
    state = {
        form: {nombre: '', descripcion: '', imagen: '', precio:''}
    }

    inputChanged = event => {
        const formulario = this.state.form;
        formulario[event.target.name] = event.target.value;
        this.setState({form: formulario});
    }

    

    registro = async e => {
        e.preventDefault()
        fetch('https://travelsublimes.herokuapp.com/destino', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.form)
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data);
          }
        )
        .catch( error => console.error(error))
    }
    

    render(){
        return(

            <div>
                <label>
                Nombre:
                    <input type="text" name="nombre"
                    value={this.state.form.nombre}
                    onChange={this.inputChanged}/>
                </label>

                <label>
                Descripcion:
                    <input type="text" name="descripcion" 
                    value={this.state.form.descripcion}
                    onChange={this.inputChanged} />
                </label>

                <label>
                Imagen:
                    <input type="text" name="imagen" 
                    value={this.state.form.imagen}
                    onChange={this.inputChanged} />
                </label>

                <label>
                Precio:
                    <input type="number" name="precio" 
                    value={this.state.form.precio}
                    onChange={this.inputChanged} />
                </label>

                <button onClick={this.registro}>Save</button>
                <button onClick={this.registro}>Register</button>

            </div>
            


          
        )
    }




}


export default Prueba;