import {GiNoodles, GiSushis, GiHamburger, GiFireBowl} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";



function Category() {
  return (
    <List>
        <SLink to={`/cuisine/Indian`}>
            <GiFireBowl />
            <h4>Indian</h4>
        </SLink>
        <SLink to={`/cuisine/American`}>
            <GiHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={`/cuisine/Chinese`}>
            <GiNoodles />
            <h4>Chinese</h4>
        </SLink>
        <SLink to={`/cuisine/Japanese`}>
            <GiSushis />
            <h4>Japanese</h4>
        </SLink>
        
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9999999px;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 4rem;
    height: 4rem;
    h4 {
      font-size: 0.5rem;
    }
  }
`;
export default Category