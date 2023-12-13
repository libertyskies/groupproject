import styled from "styled-components/macro";
export const Container = styled.div`
  border-bottom: 9px solid;
  display: flex;
`;
export const Entity = styled.div`
  color: powderblue;
  border: 1px solid lightgrey;
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 0;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 26px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: cornflowerblue;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
​
  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: whitesmoke;
  line-height: 2;
  margin-top: 10px !important;
  padding: 0;
  font-size: 55px;
  margin-bottom: 2px;
  text-align: center;
​
  @media (max-width: 600px) {
    font-size: 33px;
  }
​
  color: powderblue;
`;