import { Link } from "react-router-dom";
import Botao from "../../../componentes/Botao";
import Cartao from "../../../componentes/Cartao";

export default function Inscricao()
{
   return (
      <main>
         <section>
            <div className="vs-conteiner">
               <div className="mt30 mb30">
                  <Cartao titulo="Página de inscrição"/>
               </div>
               <div className="botoes">                  
                  <div className="largura-botao">
                     <Link to="/promocao">
                        <Botao texto="Ver promoção"/>
                     </Link>
                  </div>                  
                  <div className="largura-botao inicio">
                     <Link to="/">
                        <Botao texto="Início"/>
                     </Link>
                  </div>                  
               </div>                                               
            </div>            
         </section>
      </main>      
   );
}