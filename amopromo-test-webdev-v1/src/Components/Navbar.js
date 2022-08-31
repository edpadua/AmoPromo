import {Link} from  'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../Group.svg'
import user from '../User.svg'
import seta from '../Seta.svg'
import phone_contato from '../phone_contato.svg'
import whats_contato from '../whats_contato.svg'

function Navbar(){
    return(
  <header >
       

       <div className={styles.sup_bar}>
            <div className={styles.sup_bar_contato}>
            <span className={styles.desk_only}>
                <span>CENTRAL DE VENDAS:</span>
            </span>
  <span className={styles.phone_venda}>
   <img src={phone_contato} alt="TELEVENDAS"/>
    <a className={styles.televenda} href="#" target="_blank">(31) 4000-1667</a>
  </span>
  <span className={styles.whatsapp_vendas}>
    {/*<img src={whats_contato} alt="WHATSAPP"/>*/}
    <a className={styles.whatsapp} href="#" target="_blank">(31) 2534-2115</a>
  </span>
            </div>
           
      <div className={styles.comp_header}>
        <div className={styles.component}>
           <div className={styles.logo}>
            <a href="/">
                <img src={logo}/>
            </a>
           </div>
        <div class={styles.dropdown_}>Menu</div>
        <div className={styles.menu_} id="menu_">
        <ul >
             
             <li >
               <Link to="/categorias">Seguro de vida</Link>
             </li>
             <li >
               <Link to="/categorias">Multi-trip</Link>
             </li>
             <li >
               <Link to="/categorias">Atendimento</Link>
             </li>
             <li >
               <Link to="/categorias">FAQ</Link>
             </li>
             <li >
               <Link to="/categorias">Afiliados</Link>
             </li>
             <li >
               <Link to="/categorias">Blog</Link>
             </li>
             <li>
             <a title="Área do cliente" href="https://www.segurospromo.com.br/safearea/">
                <img className={styles.ico_client} src={user} alt="Área do cliente"/>
                Área do cliente
                <img src={seta} alt="Área do cliente"/>
            </a>
             </li>
          </ul>
        </div>
    </div>
</div>
       </div>

</header>
    )
}

export default Navbar