import React from "react";

import classNames from '../../helpers/classNames'
import './style.css'

const SIZE_RE = /^\d+(em|rem|px)$/

function sizeValue(value) {
  if (SIZE_RE.test(value)) return value
  return value + 'px'
}

const Avatar = (props) => {
  const {
    // src(required): The image url of the avatar
    src,
    // size(required): chiều rộng và chiều dài của ảnh
    size: sizeProp = 48,
    // variant(required): Description circle | rounded | square
    variant = "circle",
    // alt(optional): mô tả ngắn gọn hình ảnh circle/rounded/square
    alt,
    // key(required): Description
  } = props;

	let child
	if (src) {
		child = <img src={src} alt={alt || "avatar"} />
	} else {
    child = <img src="http://via.placeholder.com/80" alt="default avatar"/>
  }
  const size = sizeValue(sizeProp)

  const classNameRoot = classNames("wrapper", `wrapper-variant--${variant}`)
  return (
		<div className={classNameRoot} style={{
      width: size,
      height: size
    }}>
			{child}
		</div>
	)
};
export default Avatar;

