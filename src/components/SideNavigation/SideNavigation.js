/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/
  SideNavigation
* */

import React, { PropTypes, Component }  from 'react';
import classNames                       from 'classnames';
import styles                           from './SideNavigation.css';
import withStyles                       from '../../decorators/withStyles';
import Link                             from '../Link';
import { Nav, NavItem }                 from 'react-bootstrap';

@withStyles(styles)
class SideNavigation extends Component {

  static propTypes = {
    NavItem: PropTypes.string
  };

  handleSelect = function(selectedKey) {
    console.log('selected ' + selectedKey);
  };

  render() {
    return (
      <Nav bsStyle="pills" stacked activeKey={NavItem.eventKey} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} >NavItem 3 content</NavItem>
      </Nav>
    )
  };

}
export default SideNavigation;
