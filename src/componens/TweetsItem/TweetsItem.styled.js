import styled from "styled-components";

export const Item = styled.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
/* background-image: 
url("logo.png"), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%); */
 background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background-image: url('../../images/ellipse.png'),
    url('../../images/logo.png'), url('../../images/rectangle.png'),
    url('../../images/tweets.png'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
  background-position: left 150px top 178px, left 20px top 20px,
    left 0 top 214px, left 36px top 28px, top 0 left 0; */
`

export const Avatar = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;

  position: absolute;
  left: 163.5px;
  top: 186.5px;
`

export const Tweets = styled.p`
position: absolute;
width: 132px;
height: 24px;
left: 124px;
top: 284px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`

export const Followers = styled.p`
position: absolute;
width: 214px;
height: 24px;
left: 83px;
top: 324px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;

color: #EBD8FF;
`
export const ButtonFollow = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;

position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
cursor: pointer;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
&&.active {
  /* composes: btn; */
  background-color: #5cd3a8;
}
`

export const ButtonText = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`