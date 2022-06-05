import React from 'react';
import { Navbar } from '../landing/Navbar';
import Collapse from 'rc-collapse';
require('rc-collapse/assets/index.css');

export const AccordionFaq = ({title,description}) => {
  const Panel = Collapse.Panel;
  return (
    <>
    <Collapse>
      <Panel
      header={title}
      headerClass='my-header-class'
      >
        {description}
      </Panel>
    </Collapse>
    </>
  )
}
