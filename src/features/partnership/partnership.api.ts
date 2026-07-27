import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IPartnership } from "./partnership.interface";

export const partnershipApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPartnerships: builder.query<ApiResponse<IPartnership[]>, void>({
      query: () => "/partnership",
      providesTags: ["partnership"],
    }),
    getPartnershipById: builder.query<ApiResponse<IPartnership>, string>({
      query: (id) => `/partnership/${id}`,
      providesTags: ["partnership"],
    }),
    createPartnership: builder.mutation<IPartnership, Partial<IPartnership>>({
      query: (body) => ({ url: "/partnership", method: "POST", body }),
      invalidatesTags: ["partnership"],
    }),
    updatePartnership: builder.mutation<IPartnership, Partial<IPartnership> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/partnership/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["partnership"],
      }
    ),
    deletePartnership: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/partnership/${id}`, method: "DELETE" }),
      invalidatesTags: ["partnership"],
    }),
  }),
});

export const {
  useGetPartnershipsQuery,
  useGetPartnershipByIdQuery,
  useCreatePartnershipMutation,
  useUpdatePartnershipMutation,
  useDeletePartnershipMutation,
} = partnershipApi;
