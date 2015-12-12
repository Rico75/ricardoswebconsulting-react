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
    event.preventDefault();
    console.log('selected ' + selectedKey);
  };

  render() {
    return (
      <Nav bsStyle="pills" stacked activeKey={NavItem.eventKey} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home" title="Item">Site Sample 1</NavItem>
        <NavItem eventKey={2} href="/home" title="Item">Site Sample 2</NavItem>
        <NavItem eventKey={3} href="/home" title="Item">Site Sample 3</NavItem>
        <NavItem eventKey={3} href="/home" title="Item">Site Sample 4</NavItem>
        <NavItem eventKey={3} href="/home" title="Item">Site Sample 5</NavItem>
      </Nav>
    )
  };

}
export default SideNavigation;
