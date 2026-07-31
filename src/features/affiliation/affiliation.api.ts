import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IAffiliation } from "./affiliation.interface";

export const affiliationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAffiliations: builder.query<ApiResponse<IAffiliation[]>, void>({
      query: () => "/affiliation",
      providesTags: ["affiliation"],
    }),
    getAffiliationById: builder.query<ApiResponse<IAffiliation>, string>({
      query: (id) => `/affiliation/${id}`,
      providesTags: ["affiliation"],
    }),
    createAffiliation: builder.mutation<IAffiliation, Partial<IAffiliation>>({
      query: (body) => ({ url: "/affiliation", method: "POST", body }),
      invalidatesTags: ["affiliation"],
    }),
    updateAffiliation: builder.mutation<IAffiliation, Partial<IAffiliation> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/affiliation/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["affiliation"],
      }
    ),
    deleteAffiliation: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/affiliation/${id}`, method: "DELETE" }),
      invalidatesTags: ["affiliation"],
    }),
  }),
});

export const {
  useGetAffiliationsQuery,
  useGetAffiliationByIdQuery,
  useCreateAffiliationMutation,
  useUpdateAffiliationMutation,
  useDeleteAffiliationMutation,
} = affiliationApi;
