/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from 'react';
import Icon from '@hackclub/icons';
import { useDropzone } from 'react-dropzone';
import {
  Input, InputBlock, TextArea, ProductLinkAvailability,
  ProductLinkWrapper, RetryButton, ProductImg, ProductImgContainer,
} from '../style';
import Hint from '../../../components/hint';

export default function ProductDetails({ values, handleChange, setFieldValue }) {
  const onDrop = useCallback((acceptedFile) => {
    console.log(acceptedFile);
    setFieldValue('productImage', acceptedFile);
  }, []);
  const {
    getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    maxSize: 2000000,
  });

  return (
    <>
      <div>
        <span className="title"> 1. Product Details </span>
          <InputBlock>
            <label> Product Link </label>
            <ProductLinkWrapper>
              <Input
                type="text"
                placeholder="Enter product link"
                name="productLink"
                onChange={handleChange}
                value={values.productLink}
              />
              <RetryButton>
                <Icon glyph="view-reload" />
              </RetryButton>
            </ProductLinkWrapper>
            <Hint content="if you don't have the product link, just leave it empty and fill the rest manually" />
          </InputBlock>
          <InputBlock>
            <label> Product image </label>
            {/* <ProductImg src="https://n11scdn1.akamaized.net/a1/450/16/86/97/99/79886089.png" alt="" /> */}
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} /> */}
              <ProductImgContainer {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                <p>Select product image</p>
              </ProductImgContainer>
            </div>
            <Hint content="only one image is allowed, and must not pass 1MB" />
          </InputBlock>
          <InputBlock>
            <label> Product title </label>
            <Input
              type="text"
              placeholder="Enter product title"
              name="productTitle"
              onChange={handleChange}
              value={values.productTitle}
            />
          </InputBlock>
          <InputBlock>
            <label> Product description </label>
            <TextArea
              rows="3"
              type="text"
              placeholder="Enter product description"
              name="productDesc"
              onChange={handleChange}
              value={values.productDesc}
            />
          </InputBlock>
          <InputBlock>
            <label> Unit price on www.site.com </label>
            <Input
              type="text"
              placeholder="Product unit price"
              name="productUnitPrice"
              onChange={handleChange}
              value={values.productUnitPrice}
            />
            <Hint content="price must be in Tunisian Dinar" />
          </InputBlock>
          <InputBlock>
            <label> Quantity </label>
            <Input
              type="number"
              defaultValue="1"
              name="productQuantity"
              onChange={handleChange}
              value={values.productQuantity}
            />
          </InputBlock>
      </div>
    </>
  );
}
