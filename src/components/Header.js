import React from 'react';

const Header = ({tagline}) => {
    //de-structuring props into ({tagline}) direct variable so, we don't have to use props.tagline below.
    return (
        <header className="top">
            <h1>
                Catch
                    <span className="ofThe">
                    <span className="of">of</span>
                    <span className="the">the</span>
                </span>
                day</h1>
            <h3 className="tagline">
                <span>{tagline}</span>

            </h3>
        </header>
    )
}















/* 
class Header extends React.Component{
    render(){
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                     <span className="of">of</span> 
                     <span className="the">the</span>
                    </span> 
                     day</h1>
            <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                
            </h3>
            </header>
        )
    }
}; */
export default Header;