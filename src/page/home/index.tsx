import { GridTemplate, DivContainerLeft } from './styles'

// DEFAULT THEME //
import logo from '../../assets/logo.svg'
import logIn from '../../assets/logIn.svg'
import mail from '../../assets/mail.svg'
import lock from '../../assets/lock.svg'
// ---------------------------------------------------------------- //
// BEGE THEME //
import logoBege from '../../assets/bege/logo.svg'
import logInBege from '../../assets/bege/logIn.svg'
import mailBege from '../../assets/bege/mail.svg'
import lockBege from '../../assets/bege/lock.svg'
// ---------------------------------------------------------------- //
// DARKGREEN THEME //
import logoDarkGreen from '../../assets/darkGreen/logo.svg'
import logInDarkGreen from '../../assets/darkGreen/logIn.svg'
import mailDarkGreen from '../../assets/darkGreen/mail.svg'
import lockDarkGreen from '../../assets/darkGreen/lock.svg'
// ---------------------------------------------------------------- //
// GREEN THEME //
import logoGreen from '../../assets/green/logo.svg'
import logInGreen from '../../assets/green/logIn.svg'
import mailGreen from '../../assets/green/mail.svg'
import lockGreen from '../../assets/green/lock.svg'
// ---------------------------------------------------------------- //

import sideImage from '../../assets/sideImage.png'
import { TypeTheme } from '../../App'

interface HomeProps {
  theme: TypeTheme
  setTheme: React.Dispatch<React.SetStateAction<TypeTheme>>
}

export function Home({ theme, setTheme }: HomeProps) {
  function getLogo() {
    switch (theme) {
      case 'default':
        return logo
      case 'bege':
        return logoBege
      case 'darkGreen':
        return logoDarkGreen
      case 'green':
        return logoGreen

      default:
        return logo
    }
  }

  function getLogIn() {
    switch (theme) {
      case 'default':
        return logIn
      case 'bege':
        return logInBege
      case 'darkGreen':
        return logInDarkGreen
      case 'green':
        return logInGreen

      default:
        return logIn
    }
  }
  function getMail() {
    switch (theme) {
      case 'default':
        return mail
      case 'bege':
        return mailBege
      case 'darkGreen':
        return mailDarkGreen
      case 'green':
        return mailGreen

      default:
        return mail
    }
  }
  function getLock() {
    switch (theme) {
      case 'default':
        return lock
      case 'bege':
        return lockBege
      case 'darkGreen':
        return lockDarkGreen
      case 'green':
        return lockGreen

      default:
        return lock
    }
  }

  return (
    <GridTemplate>
      <DivContainerLeft>
        <div className="logo">
          <img src={getLogo()} />
          <select
            className="select"
            name=""
            id=""
            onChange={(e: { target: { value: TypeTheme } }) =>
              setTheme(e.target.value)
            }
          >
            <option value="default">default</option>
            <option value="darkGreen">darkGreen</option>
            <option value="bege">bege</option>
            <option value="green">green</option>
          </select>
        </div>

        <div className="divGeral">
          <div className="formBackground">
            <div className="divGeral2">
              <div className="contentForm">
                <div className="titleLogin">
                  <div className="titleLogin2">
                    <img src={getLogIn()} />
                    <h1>Faça seu login</h1>
                  </div>
                  <span>Entre com suas informações de cadastro.</span>
                </div>

                <div className="formLogin">
                  <form className="formLogin1">
                    <div className="inputs">
                      <label>E-mail</label>
                      <input
                        type="email"
                        placeholder="Digite seu e-mail"
                      ></input>
                      <img src={getMail()} />
                    </div>

                    <div className="inputs">
                      <label>Senha</label>
                      <input
                        type="password"
                        placeholder="Digite sua senha"
                      ></input>
                      <img src={getLock()} className="lock" />
                    </div>

                    <div className="footer">
                      <div className="footer1">
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="checkbox"
                          id="checkbox"
                        ></input>
                        <footer>Lembre-me</footer>
                      </div>
                      <footer className="footer2">
                        <a href="#"> Esqueci minha senha</a>
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
          </div>
        </div>
      </DivContainerLeft>

      <img className="side-img" src={sideImage} />
    </GridTemplate>
  )
}
