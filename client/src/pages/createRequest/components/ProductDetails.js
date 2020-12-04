/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import { useDropzone } from 'react-dropzone';
import {
  Input, InputBlock, TextArea,
  ProductLinkWrapper, RetryButton,
  ProductImgPreview, SelectProductImgContainer, ProductImgPreviewWrapper, RemoveImgButton,
} from '../style';
import Hint from '../../../components/hint';

export default function ProductDetails({ values, handleChange, setFieldValue }) {
  const [selectedImgPreview, setSelectedImgPreview] = useState('');

  const onDrop = useCallback((acceptedFile) => {
    const img = Array.isArray(acceptedFile) && acceptedFile.length > 0 ? acceptedFile[0] : null;
    if (Array.isArray(acceptedFile) && acceptedFile.length > 0) {
      setSelectedImgPreview(URL.createObjectURL(img));
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

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    URL.revokeObjectURL(selectedImgPreview);
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
              />
              <RetryButton>
                <Icon glyph="view-reload" />
              </RetryButton>
            </ProductLinkWrapper>
            <Hint content="if you don't have the product link, just leave it empty and fill the rest manually" />
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
                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
              >
                <input {...getInputProps()} />
                <p>Select product image</p>
              </SelectProductImgContainer>
            </div>
            <Hint content="only one image is allowed, and must not pass 2MB" />
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
