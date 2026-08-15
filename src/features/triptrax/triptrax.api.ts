import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { ITriptrax } from "./triptrax.interface";

export const triptraxApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTriptraxs: builder.query<ApiResponse<ITriptrax[]>, void>({
      query: () => "/triptrax",
      providesTags: ["triptrax"],
    }),
    getTriptraxById: builder.query<ApiResponse<ITriptrax>, string>({
      query: (id) => `/triptrax/${id}`,
      providesTags: ["triptrax"],
    }),
    createTriptrax: builder.mutation<ITriptrax, Partial<ITriptrax>>({
      query: (body) => ({ url: "/triptrax", method: "POST", body }),
      invalidatesTags: ["triptrax"],
    }),
    updateTriptrax: builder.mutation<ITriptrax, Partial<ITriptrax> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/triptrax/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["triptrax"],
      }
    ),
    deleteTriptrax: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/triptrax/${id}`, method: "DELETE" }),
      invalidatesTags: ["triptrax"],
    }),
  }),
});

export const {
  useGetTriptraxsQuery,
  useGetTriptraxByIdQuery,
  useCreateTriptraxMutation,
  useUpdateTriptraxMutation,
  useDeleteTriptraxMutation,
} = triptraxApi;
