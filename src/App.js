import React, { Component } from 'react';
import RowData from './data';
import './App.css';
import Row from './components/row/row';
import Logo from './res/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

class App extends Component {
    render() {
        let counter = 1;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={Logo} alt="logo" />
                    <div
                        data-tip
                        data-for="disclaimer"
                        className="disclaimer-button"
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <ReactTooltip
                        id="disclaimer"
                        place="bottom"
                        arrow={false}
                        type="light"
                        effect="solid"
                    >
                        <p>
                            All photos are sourced from MyAnimeList <br />
                            nand belong to their respective creators.
                            <br />
                            Same Seiyu is not endorsed by MyAnimeList <br />
                            and does not reflect their opinions or views
                        </p>
                    </ReactTooltip>
                    <div className="github-button">
                        <a
                            href={'https://github.com/stevezease/same_seiyu'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithubAlt} />
                        </a>
                    </div>
                </header>
                <div>
                    {RowData.slice(0, 100).map(rowInfo => (
                        <Row
                            key={`row${counter}`}
                            rank={counter++}
                            rowInfo={rowInfo}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
