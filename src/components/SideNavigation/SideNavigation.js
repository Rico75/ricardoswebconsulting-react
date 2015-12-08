/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component }  from 'react';
import classNames                       from 'classnames';
import styles                           from './SideNavigation.css';
import withStyles                       from '../../decorators/withStyles';
import Link                             from '../Link';
import { Nav, NavItem }                 from './node_modules/react-bootstrap/dist/react-bootstrap';

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

@withStyles(styles)
class SideNavigation extends Component {

  static propTypes = {
    NavItem: PropTypes.string,
  };

  render() {
    return (
      <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
      </Nav>
    )
  };

}
/*
  render() {
    return (
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href="">Nav item</a></li>
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
            <li><a href="">More navigation</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
          </ul>
        </div>
    );
  }

}
*/
export default SideNavigation;
