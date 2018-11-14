import React, {Component} from 'react';
import RowData from './data';
import './App.css';
import Row from './components/row/row'
import Logo from './res/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons'

class App extends Component {
    render() {
        let counter = 1;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={Logo} alt="logo"/>
                    <div className="github-button">
                        <a href={'https://github.com/stevezease/same_seiyu'} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubAlt}/>
                        </a>
                    </div>
                </header>
                <div>{
                    RowData.slice(0, 50).map(rowInfo => <Row key={`row${counter}`} rank={counter++} rowInfo={rowInfo}/>)
                }</div>
            </div>
        );
    }
}

export default App;
