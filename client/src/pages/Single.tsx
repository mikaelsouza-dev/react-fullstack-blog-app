import { Link } from "react-router-dom"
import Menu from "../components/Menu"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>Mikael</span>
            <p>Potado a 2 dias atrás</p>
          </div>
          <div className="edit">
            <Link to='`/write?edit=2`'>
              <AiFillEdit/>
            </Link>
            <AiFillDelete/>
          </div>
        </div>
        <h1>Como a IA pode modificar sua vida.</h1>
        <p>ASJId iajsdji asijd ijasijd iajsjid asjijd isajidjajis djiajd aijsjid jaisjidajis djias jidajid jiasjidaji dijas jid asdjilas ikda dasuiod uiasiud asuiod uioasuiodao iudoiausuioda suiod aiousdui</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single