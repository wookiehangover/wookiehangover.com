import React from 'react'
import cx from 'classnames'

const classes = {
  p: `lh-copy`,
  h2: `red f2`,
  li: `mv1 lh-copy`,
  blockquote: `f3 mv3 i mh0 pl3 bl lh-title b--rainbows`,
  pre: `f7 ba br1 b--black-90 pre-code overflow-x-scroll`,
  code: `f7 `
}

const components = {
  p: props =>
    <p className={cx(classes.p, props.className)}>{props.children}</p>,

  h2: props =>
    <h2 className={cx(classes.h2, props.className)} id={props.id}>{props.children}</h2>,

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

  code: props =>
    <code className={cx(classes.code, props.className)}>{props.children}</code>,

  cite: props =>
    <div className="tr"><span className="measure dib">{props.children}</span></div>

}

export default components
