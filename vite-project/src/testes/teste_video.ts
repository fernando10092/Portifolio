import styled from "styled-components";

export const ContVideo = styled.div`
background-color: black;
height: 100vh;
width: 100%;
`

export const Videos = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`