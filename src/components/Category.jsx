import {GiNoodles, GiSushis, GiHamburger, GiTacos} from "react-icons/gi";
import styled from "styled-components";




function Category() {
  return (
    <List>
        <div>
            <GiTacos />
            <h4>Mexican</h4>
        </div>
        <div>
            <GiHamburger />
            <h4>American</h4>
        </div>
        <div>
            <GiNoodles />
            <h4>Chinese</h4>
        </div>
        <div>
            <GiSushis />
            <h4>Japanese</h4>
        </div>
        
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

export default Category