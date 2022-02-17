import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin, width,
    padding,
    circle,
    _value,
    bg,
    study,
    color,
    border,
    float,
    fonstSize,
    cursor,
    fix,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg:bg,
    color:color,
    border:border,
    float:float,
    fonstSize:fonstSize,
    cursor:cursor,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  } else if (circle) {
    return(
    <React.Fragment>
      <CircleButton onClick={_onClick} value={_value}>{text? text: children} </CircleButton>
    </React.Fragment>
    );
  } else if (study) {
    return(
      <React.Fragment>
        <CreatButton onClick={_onClick} >{text? text: children} </CreatButton>
      </React.Fragment>
      );
  } else if (fix) {
    return(
      <React.Fragment>
        <FixedButton onClick={_onClick} >{text? text: children} </FixedButton>
      </React.Fragment>
      );
  }
    return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: "auto",
  width: "100%",
  padding: "0px",
  _value: () => {},
  bg:false,
};

const ElButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.width};
  background-color: #C4C4C4;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const CircleButton = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
border: 0px solid black;
margin: auto;
${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : "")};
${(props) => (props.color ? `color: ${props.color};` : "")};
${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")};
`;

const CreatButton = styled.button`
color: black;
${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
border:0px solid #c1deae;
border-radius:30px;
background-color:#C1DEAE;
float: right;
width: 130px;
height: 40px;
margin: auto;
font-size: 20px;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

const FixedButton = styled.button`
position: fixed;
width: 50px;
height: 50px;
bottom: 10px;
right: 10px;
z-index: 10;
border-radius: 50%;
`;

export default Button;
