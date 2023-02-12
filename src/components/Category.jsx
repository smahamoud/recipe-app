import {GiNoodles, GiSushis, GiHamburger, GiFireBowl} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";



function Category() {
  return (
    <List>
        <NavLink to={`/cuisine/Indian`}>
            <GiFireBowl />
            <h4>Indian</h4>
        </NavLink>
        <NavLink to={`/cuisine/American`}>
            <GiHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={`/cuisine/Chinese`}>
            <GiNoodles />
            <h4>Chinese</h4>
        </NavLink>
        <NavLink to={`/cuisine/Japanese`}>
            <GiSushis />
            <h4>Japanese</h4>
        </NavLink>
        
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

export default Category