import {useParams} from 'react-router-dom'
import React, {useState, useReducer, useEffect} from 'react'
import myaxios from './Myaxios'
import '../layout/CadasProd.css'

const formReducer = (state, action) => {
  switch(action.type){
    case 'ATUALIZA':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'INICIALIZA_CAMPOS':
      return { ...action.state }
    default:
      return state;
  }
}
const CadastroProd = () => {
    const initialState = { nome: "", categoria: "",  descricao: "",  imagem: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [file, setfile] = useState(initialState)
    const handleChange = (e) => {
        dispatch({
          type: 'ATUALIZA',
          name: e.target.name,
          value: e.target.value
        })
        
    }
    const { id } = useParams();

    const handleImageChange = (e) => {
      setfile(e.target.files[0])
    }

    
    useEffect(() => {
      if(id != null){
        myaxios.put("http://mais-arvores-api.herokuapp.com/products/" + id)
        
        .then(res => {
          dispatch({
            type: 'INICIALIZA_CAMPOS',
            state: res.data
          })
        })
      }
    }, [])

    const submitForm = (e) => {
      let url = "http://mais-arvores-api.herokuapp.com"
      e.preventDefault();
      console.log(formState)

      if(id!= null){
        url += "/" + id;
        myaxios.put(url, formState)
        .then(res => alert("Dados enviados com sucesso"));

      } else {
        const formData = new FormData();
        formData.append("products", JSON.stringify(formState));
        formData.append("image", file)
        .then(res => alert("Dados enviados com sucesso"));
      }
    }

//     let photo = document.getElementById('imgPhoto');
// let fileimg = document.getElementById('image');

// photo.addEventListener('click', () => {
//     image.click();
// });
    return (
        <div className="container">
            <form>
            <div className="form-group">
                  <label for="nome">Nome do produto</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="nome" id="nome" aria-describedby="helpId" placeholder="" 
                    value={formState.nome} />
                </div>
                <div className="form-group">
                  <label for="categoria">Categoria</label>
                  <input type="number" onChange={handleChange}
                    className="form-control" name="categoria" id="categoria" aria-describedby="helpId" placeholder=""
                     value={formState.categoria} />
                </div>
                <div className="form-group">
                  <label for="descricao">Adicione uma descrição</label>
                  <input type="text" onChange={handleChange}
                    className="form-control" name="descricao" id="descricao" aria-describedby="helpId" placeholder="" 
                    value={formState.descricao} />
                </div>
                <div className="form-group">
                  <label for="imagem">Imagem</label>
                  <div class="imageContainer">
                <img src="img_upload.jpg" id="imgPhoto"/>
                </div>
                  <input type="file" onChange={handleImageChange}
                    className="form-control" name="imagem" id="imagem" aria-describedby="helpId" placeholder=""
                     />
                  {/* {file ? "": <img src='./img_upload.jpg' width={200} height={200} /> } */}
                  <small id="helpId" className="form-text text-muted">Coloque a Imagem do seu produto</small>
                </div>
               <button type="submit" onClick={submitForm} className="btn btn-primary">Enviar</button> 
            </form>
        </div>
    )
}

export default CadastroProd