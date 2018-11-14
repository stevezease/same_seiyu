import React, {Component} from 'react';
import './imagepanel.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons'
import LazyLoad from 'react-lazyload';

class ImagePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            descriptionHover: false,
            imageHover: false,
            width: 0,
            height: 0
        };
        this.imageHover = this.imageHover.bind(this);
        this.imageLeave = this.imageLeave.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

    imageHover() {
        this.setState({hover: true, imageHover: true});
        if (!this.props.seiyu) {
            this.props.onHover(this.props.id);
        }
    }

    imageLeave() {
        this.setState({hover: false, imageHover: false});
    }

    descriptionGen() {
        if (this.props.seiyu) {
            return '';
        }
        const element = document.getElementById(this.props.id);
        const midpoint = this.state.width / 2;
        const offset = element.offsetLeft - midpoint;
        return <div
            className={`image-panel-description ${offset > 0 ? 'image-panel-description-left' : 'image-panel-description-right'}`}>
            <div className="image-panel-description-content">
                <div className="image-panel-description-name">{this.props.role.nameEng}</div>
                <div>{this.props.role.anime}</div>
                <div className="image-panel-external-link"><a href={this.props.role.URL} target="_blank" rel="noopener noreferrer">Full Character
                    Page <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a></div>
            </div>
        </div>
    }

    render() {
        return (
            <div className={this.props.seiyu ? '' : `image-panel ${this.state.hover ? 'image-panel-hover' : ''}`}
                 onMouseEnter={this.imageHover}
                 onMouseLeave={this.imageLeave} id={this.props.id}>
                <LazyLoad height={200}>
                    <img
                        className={`${this.props.seiyu ? '' : `character-panel ${this.state.hover ? 'character-panel-hover' : ''}`} panel-image`}
                        src={this.props.url}
                        alt="panel"/>
                </LazyLoad>
                {this.props.label ?
                    <div className="image-panel-label">{this.props.label}
                    <a href={this.props.labelURL} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkSquareAlt}/></a></div> : ''}
                {this.state.hover ? this.descriptionGen() : ''}

            </div>
        );
    }
}

export default ImagePanel;
