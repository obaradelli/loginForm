import { GridTemplate, DivContainerLeft } from './styles'

import logo from '../../assets/logo.svg'
import logIn from '../../assets/logIn.svg'
import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'

import sideImage from '../../assets/sideImage.png'

export function Home() {
  return (
    <GridTemplate>
      <DivContainerLeft>
        <div>
          <img src={logo} />
        </div>

        <div className="formBackground">
          <div className="contentForm">
            <div className="titleLogin">
              <div className="titleLogin2">
                <img src={logIn} />
                <h1>Faça seu login</h1>
              </div>
              <span>Entre com suas informações de cadastro.</span>
            </div>

            <div className="formLogin">
              <form className="formLogin1">
                <div className="inputs">
                  <label>E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail"></input>
                  <img src={mail} />
                </div>

                <div className="inputs">
                  <label>Senha</label>
                  <input type="text" placeholder="Digite sua senha"></input>
                  <img src={lock} />
                </div>

                <div className="footer">
                  <div className="footer1">
                    <button></button>
                    <footer>Lembre-se</footer>
                  </div>
                  <footer className="footer2">
                    <a href="https://github.com/"> Esqueci minha senha</a>
                  </footer>
                </div>

                <div className="gapLastFooter">
                  <footer className="gapLastFooter2">
                    <button>ENTRAR</button>
                  </footer>

                  <footer className="lastFooter">
                    Não tem uma conta? <a href="#">Registre-se</a>
                  </footer>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DivContainerLeft>

      <img className="side-img" src={sideImage} />
    </GridTemplate>
  )
}
