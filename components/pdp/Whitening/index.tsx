import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TransformedProduct } from '../../PDPComponent/_types';
import { TestInterface } from './_types';
import HeroBanner from '../../sections/HeroBanner';

type Props = {
  product: TransformedProduct;
};

const Whitening: FunctionComponent<Props> = ({ product }: Props) => (
  <Styled.Container>
    <HeroBanner
      title="The Future Looks Bright"
      subtitle="No mess, no stress. Dramatically whiter teeth in just 10 days!"
      bgColor="#d4d7df"
      bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/190918_COLGATE_MFIX_22_169.jpg?v=1579097587"
      fontColor="#ff0000"
      textAlign="left"
    />
  </Styled.Container>
);

export default Whitening;
