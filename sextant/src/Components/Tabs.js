import React, {Component} from 'react';
import './Tabs.css';


class Tabs extends Component {
    state ={
        activeTab:0,
    };

    handleTabChange = index => {
        this.setState({
            activeTab:index
        });
    };


    render() {
        
        return (
        <div className="TabsContainer">
            <div className="Tabs">
            {this.props.tabs.map((tab, index) => (
                <div
                key={index}
                className={`tab ${this.state === index ? 'active' : ''}`}
                onClick={() => this.handleTabChange(index)}
                >
                {tab}
                </div>
            ))}
            </div>
            <div className="TabsContent">{this.props.children[this.state.activeTab]}</div>
        </div>
        );
    }
};

export default Tabs;