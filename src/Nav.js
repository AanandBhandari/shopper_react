import React from 'react';
const Nav = ({activeTab,onTabChange}) => {
    return(
        <nav className='App-nav'>
            <ul>
                <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                    <NavLink index={0} onClick={onTabChange}>Items</NavLink>
                    
                </li>
                <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                    <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
                    {/* <a onClick={() => onTabChange(1)}>Cart</a> */}
                </li>
            </ul>
        </nav>
    )
}
class NavLink extends React.Component {
    handleClick = () => {
        console.log('hello');
        this.props.onClick(this.props.index);
    }
    render() {
        return (
            <a onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
}
export default Nav