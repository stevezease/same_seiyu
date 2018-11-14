import React, {Component} from 'react';
import './row.css';
import ImagePanel from '../imagepanel/imagepanel'

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onHover = this.onHover.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    onHover(id) {
        const element = document.getElementById(id);
        const midpoint = this.state.width / 2;
        setTimeout(() => {
            document.getElementById(`seiyu-roles-${this.props.rank}`).scroll({
                    top: 0,
                    left: element.offsetLeft - midpoint,
                    behavior: 'smooth'
                }
            );
        }, 250)
    }

    render() {
        let counter = 0;
        return (
            <div className="row">
                <div className="seiyu-ranking">{this.props.rank}</div>
                <div className="seiyu-image-panel">
                    <ImagePanel seiyu={true} url={this.props.rowInfo.pictureURL} label={this.props.rowInfo.nameEng}
                                labelURL={this.props.rowInfo.URL}/>
                </div>
                <div className="seiyu-roles" id={`seiyu-roles-${this.props.rank}`}>
                    {
                        this.props.rowInfo.roles.map(role => <ImagePanel seiyu={false} url={role.pictureURL}
                                                                         key={role.nameEng + counter++} id={role.nameEng}
                                                                         onHover={this.onHover} role={role}/>)
                    }
                </div>
            </div>
        );
    }
}

export default Row;
