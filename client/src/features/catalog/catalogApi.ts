import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[],void>({
      query: () => 'products',
    }),
    fetchProductDetails:builder.query<Product,number>({
        query:(profuctId)=>`products/${profuctId}`
    })
  }),
});

export const {useFetchProductDetailsQuery,useFetchProductsQuery } =catalogApi;