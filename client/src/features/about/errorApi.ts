import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const errorAPi=createApi({
    reducerPath:'errorApi',
    baseQuery:baseQueryWithErrorHandling,
    endpoints:(builder)=>({
        get400Error:builder.query<void,void>({
            query:()=>({url:'Buggy/bad-request'})
        }),
        get401Error:builder.query<void,void>({
            query:()=>({url:'Buggy/unauthorized'})
        }),
        get404Error:builder.query<void,void>({
            query:()=>({url:'Buggy/not-found'})
        }),
        get500Error:builder.query<void,void>({
            query:()=>({url:'Buggy/server-error'})
        }),
        getValidationError:builder.query<void,void>({
            query:()=>({url:'Buggy/validation-error'})
        }),
    })

});

export const {useLazyGet400ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGet500ErrorQuery,
    useLazyGetValidationErrorQuery
}=errorAPi;