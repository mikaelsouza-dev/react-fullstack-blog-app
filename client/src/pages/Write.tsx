import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react'

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Título" />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Status: </b> Rascunho
          </span>
          <span>
            <b>Visibilidade: </b> Público
          </span>
          <input style={{display: 'none'}} type="file" id='file' />
          <label className='file' htmlFor="file">Upload Imagem</label>
          <div className="buttons">
            <button>Salvar como rascunho</button>
            <button>Atualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input type="radio" name='cat' value='front-end' id='front-end' />
            <label htmlFor="front-end">Front-end</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='back-end' id='back-end' />
            <label htmlFor="back-end">Back-end</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='full-stack' id='full-stack' />
            <label htmlFor="full-stack">Full-stack</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='tec-web' id='tec-web' />
            <label htmlFor="tec-web">Tecnologias Web</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='sec-and-perf' id='sec-and-perf' />
            <label htmlFor="sec-and-perf">Segurança e desempenho</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='trends-and-news' id='trends-and-news' />
            <label htmlFor="trends-and-news">Tendências e novidades</label>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Write