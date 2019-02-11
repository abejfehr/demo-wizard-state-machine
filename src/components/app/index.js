import React from 'react'

import { WizardRouter } from '../wizard-router'
import { PathIndicator } from '../path-indicator'
import { Header } from '../header'
import { Spinner } from '../spinner'
import { Main } from '../main'

import { stateNames } from '../../machines/wizard/states'

const { IDLE, INITIALIZING, LOADING } = stateNames

export class App extends React.Component {
  render() {
    return (
      <div className="app-Layout">
        <Header />
        <WizardRouter className="app-Layout-main">
          <Spinner path={IDLE} />
          <Spinner path={INITIALIZING} />
          <Spinner path={LOADING} />
          <Main path="/*" />
        </WizardRouter>
        <footer className="app-Footer">
          <div className="app-Footer-container">
            <PathIndicator />
            <p>
              Icons designed by{' '}
              <a href="https://www.flaticon.com/authors/freepik">
                Freepik from Flaticon
              </a>
            </p>
            <p>
              <a
                href="https://github.com/illarionvk/demo-wizard-state-machine"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source code on GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}
