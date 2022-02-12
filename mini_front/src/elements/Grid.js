import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, flex_direction,width, margin, padding, bg, children, center, _onClick, align_items, justify_content  } = props;

  const styles = {
      is_flex: is_flex,
      flex_direction:flex_direction,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      align_items: align_items,
      justify_content: justify_content,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  flex_direction:false,
  width: "700px",
  padding: false,
  margin: "auto",
  bg: false,
  center: false,
  align_items:false,
  justify_content:false,
  _onClick: () => {}
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.is_flex ? `display: flex; `: "")}
  ${(props) => (props.flex_direction ? `flex-direction: ${props.flex_direction}; `: "")}
  ${(props) => (props.center? `text-align: center;`: "")}
  ${(props) => (props.align_items? `align-items: ${props.align_items};`: "")}
  ${(props) => (props.justify_content? `justify-content: ${props.justify_content};`: "")}
`;

export default Grid;
