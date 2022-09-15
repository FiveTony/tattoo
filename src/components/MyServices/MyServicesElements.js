import styled from "styled-components"

export const MyServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const MyServicesWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  // padding: 0 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const MyServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  // max-height: 500px;
  height: 440px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  // &:hover {
  //   transform: scale(1.02);
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  // }
`
export const MyServicesIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const MyServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const MyServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`

export const MyServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
