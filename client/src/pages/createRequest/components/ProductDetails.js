/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import { useDropzone } from 'react-dropzone';
import {
  Input, InputBlock, TextArea,
  ProductLinkWrapper, RetryButton,
  ProductImgPreview, SelectProductImgContainer,
  ProductImgPreviewWrapper, RemoveImgButton, PriceCurrency,
  ErrorMsg,
} from '../style';
import Hint from '../../../components/hint';
import Tip from '../../../components/tip';

export default function ProductDetails({
  values, handleChange, setFieldValue, errors,
}) {
  const [selectedImgPreview, setSelectedImgPreview] = useState('');
  const onDrop = useCallback((acceptedFile) => {
    const img = Array.isArray(acceptedFile) && acceptedFile.length > 0 ? acceptedFile[0] : null;
    if (Array.isArray(acceptedFile) && acceptedFile.length > 0) {
      // setSelectedImgPreview(URL.createObjectURL(img));
      setFieldValue('productImage', acceptedFile);
    }
  }, []);
  const {
    getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject,
  } = useDropzone({
    // onDrop,
    onDropAccepted: onDrop,
    maxFiles: 1,
    multiple: false,
    maxSize: 2000000,
    accept: 'image/png, image/jpg, image/jpeg',
    noKeyboard: true,
  });

  useEffect(() => {
    if (values.productImage && Array.isArray(values.productImage)) {
      setSelectedImgPreview(URL.createObjectURL(values.productImage[0]));
      // console.log('Set', selectedImgPreview);
    }
  }, [values.productImage]);

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    if (selectedImgPreview) {
      URL.revokeObjectURL(selectedImgPreview);
      // console.log('Revoke', selectedImgPreview);
    }
  }, [selectedImgPreview]);

  const handleProductImgDelete = () => {
    setSelectedImgPreview('');
    setFieldValue('productImage', '');
  };

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
                autoComplete="off"
                customStyles={errors.productLink ? 'border-color: #ff5858' : ''}
              />
              <Tip content="Get product details">
                <RetryButton>
                  <Icon glyph="view-reload" />
                </RetryButton>
              </Tip>
            </ProductLinkWrapper>
            <Hint content="if you don't have the product link, just leave it empty and fill the rest manually" />
            <ErrorMsg>{errors.productLink}</ErrorMsg>
          </InputBlock>
          <InputBlock>
            <label> Product image </label>
            {
              selectedImgPreview
              ? (
                <ProductImgPreviewWrapper>
                  <RemoveImgButton onClick={handleProductImgDelete}><Icon glyph="delete" size={24} /></RemoveImgButton>
                  <ProductImgPreview src={`${selectedImgPreview}`} alt="" />
                </ProductImgPreviewWrapper>
              )
              : null
            }
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} /> */}
              <SelectProductImgContainer
                isError={!!errors.productImage}
                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
              >
                <input {...getInputProps()} />
                <p>Select product image</p>
              </SelectProductImgContainer>
            </div>
            <Hint content="only one image is allowed, and must not pass 2MB" />
            <ErrorMsg>{errors.productImage}</ErrorMsg>
          </InputBlock>
          <InputBlock>
            <label> Product title </label>
            <Input
              type="text"
              placeholder="Enter product title"
              name="productTitle"
              onChange={handleChange}
              value={values.productTitle}
              customStyles={errors.productTitle ? 'border-color: #ff5858' : ''}
            />
            <ErrorMsg>{errors.productTitle}</ErrorMsg>
          </InputBlock>
          <InputBlock>
            <label> Product description </label>
            <TextArea
              rows="3"
              type="text"
              placeholder="Describe the product you want, like the size, or the color. e.g: i want the color to be black please..."
              name="productDesc"
              onChange={handleChange}
              value={values.productDesc}
              customStyles={errors.productDesc ? 'border-color: #ff5858' : ''}
            />
            <ErrorMsg>{errors.productDesc}</ErrorMsg>
          </InputBlock>
          <InputBlock>
            <label> Unit price </label>
            <Input
              type="number"
              placeholder="Product unit price"
              name="productUnitPrice"
              onChange={handleChange}
              value={values.productUnitPrice}
              customStyles={`padding-right: 4rem; ${errors.productUnitPrice ? 'border-color: #ff5858' : ''}`}
            />
            <PriceCurrency>TND</PriceCurrency>
            <ErrorMsg>{errors.productUnitPrice}</ErrorMsg>
          </InputBlock>
          <InputBlock>
            <label> Quantity </label>
            <Input
              type="number"
              defaultValue="1"
              min="1"
              name="productQuantity"
              onChange={handleChange}
              value={values.productQuantity}
              placeholder="How many ?"
              customStyles={errors.productQuantity ? 'border-color: #ff5858' : ''}
            />
            <ErrorMsg>{errors.productQuantity}</ErrorMsg>
          </InputBlock>
      </div>
    </>
  );
}
