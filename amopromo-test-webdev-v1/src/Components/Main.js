import styles from './Main.module.css'
import banner from '../banner.png'
import anjo from '../anjo.svg'
import phone from '../phone.svg'
import whats from '../whats.svg'

function Main(){
    return(
      <div>
         <div className={styles.banner}>
             {/*<img src={banner}/>*/}
             <div className={styles.titulo_banner}>
                <h1>Tranquilidade para viver mais</h1>
                <h5>Viva mais e melor com os beneficio que um seguro de vida te oferece</h5>
                <button>Faça sua cotação</button>
             </div>
            
         </div>
         <div className={styles.planos}>

         </div>
         <div className={styles.planos_content}>
            
         </div>
         <div className={styles.planos_descricao}>
            <h2>Planos personalizados e sem burocracia</h2>
            <h5 className={styles.desc1}>Informe seus dados</h5>
            <h5 className={styles.desc2}>Descubra o plano ideal para seu perfil</h5>
            <h5 className={styles.desc3}>Informe sua forma de pagamento e contrate 100% online</h5>
            <h4 className={styles.desc_promo}>Pronto! Agora você e sua família têm todos os benefícios de viver com segurança total</h4>
            <button>Faça sua cotação</button>
         </div>

         <div className={styles.coberturas}>
            <h2 className={styles.coberturas_titulo}>Nossas Coberturas</h2>
            <h4>Veja mais detalhes de cada proteção!</h4>
            <div id={styles.cob1} className={styles.coberturas_box}>
                 <img src={anjo}/>
                 <h6>Morte</h6>
                 <h7>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</h7>
                 <button><p>Saiba Mais</p></button>
            </div>
            <div id={styles.cob2} className={styles.coberturas_box}>
                 <img src={anjo}/>
                 <h6>Morte</h6>
                 <h7>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</h7>
                 <button><p>Saiba Mais</p></button>
            </div>
            <div id={styles.cob3} className={styles.coberturas_box}>
                 <img src={anjo}/>
                 <h6>Morte</h6>
                 <h7>Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.</h7>
                 <button><p>Saiba Mais</p></button>
            </div>
            <button id={styles.button_cobertura}>Faça sua cotação</button>
         </div>
         <div className={styles.detalhes}>
             <h2>Mas por que ter um seguro de vida?</h2>
             <div className={styles.imagem_detalhes}>

             </div>
             <button id={styles.button_detalhes}>Faça sua cotação</button>
         </div>
         <div className={styles.contato}>
             <h2>Ainda não sabe qual seguro contratar?</h2>
             <h4>Ligue pra gente e receba uma consultoria personalizada gratuitamente!</h4>
             <img className={styles.phone_icon} src={phone}/><h3>(99) 99999.9999</h3>
             <button className={styles.button_whats}><img className={styles.whats_icon} src={whats}/>Se preferir, entre em contato pelo Whatsapp</button>
             <p className={styles.horario}>Atendemos pelo telefone de seg. a sex., das 9h às 17h</p>
         </div>
      </div>
    )
}

export default Main