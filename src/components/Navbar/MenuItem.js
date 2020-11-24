import Link from 'next/link'

import React from 'react'

function MenuItem({onClick,title,url,cName}) {
    return (
        <li>
          <Link  href={url}>
          <a onClick={onClick}  className={cName} >  {title}</a>
          </Link>
        </li>
    )
}

export default MenuItem
