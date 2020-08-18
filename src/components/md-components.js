import React from 'react'
import cx from 'classnames'

const classes = {
  p: `lh-copy mv3`,
  h: `sans-serif lh-solid`,
  list: `pl3-ns pl4`,
  li: `pl1`,
  blockquote: `f3 mv3 i mh0 pl3 bl lh-title b--rainbows`,
  pre: `f7 ba br1 pre-code overflow-x-scroll pa3`,
  code: `f7 `,
  anchor: 'dark-gray link bb hover-red',
}

const components = {
  a: props =>
    <a className={classes.anchor} {...props} />,

  p: props =>
    <p className={cx(classes.p, props.className)}>{props.children}</p>,

  h1: props =>
    <h1 className={cx(classes.h, props.className, 'f1')} id={props.id}>{props.children}</h1>,

  h2: props =>
    <h2 className={cx(classes.h, props.className, 'f2')} id={props.id}>{props.children}</h2>,

  h3: props =>
    <h3 className={cx(classes.h, props.className, 'f3')} id={props.id}>{props.children}</h3>,

  ul: props => <ul className={classes.list}>{props.children}</ul>,
  ol: props => <ol className={classes.list}>{props.children}</ol>,

  li: props =>
    <li className={cx(classes.li, props.className)}>{props.children}</li>,

  blockquote: props =>
    <blockquote className={cx(classes.blockquote, props.className)}>
      {props.children}
    </blockquote>,

  pre: props =>
    <pre className={cx(classes.pre, props.className)}>
      {props.children}
    </pre>,

  details: props =>
    <details>{props.children}</details>,

  code: props =>
    <code className={cx(classes.code, props.className)}>{props.children}</code>,

  cite: props =>
    <div className="tr"><span className="measure dib">{props.children}</span></div>,

  table: props =>
    <table className="collapse">{props.children}</table>

}

export default components
