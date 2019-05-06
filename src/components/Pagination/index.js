import * as React from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import Link from 'next/link'

import * as routes from '../../routes'

import { List, ListItem, BaseLink } from './styled'

const renderPaginationItem = number => (
  <ListItem key={number}>
    <Link href={`${routes.PRODUCT_LIST}?page=${number}`} passHref>
      <BaseLink>{number}</BaseLink>
    </Link>
  </ListItem>
)

const Pagination = ({ pages }) => (
  <List>{map(renderPaginationItem, range(1, pages + 1))}</List>
)

export { Pagination }
