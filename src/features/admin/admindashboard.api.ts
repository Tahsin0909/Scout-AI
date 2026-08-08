import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IAdmindashboard } from "./admindashboard.interface";

export const admindashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmindashboards: builder.query<ApiResponse<IAdmindashboard[]>, void>({
      query: () => "/admindashboard",
      providesTags: ["admindashboard"],
    }),
    getAdmindashboardById: builder.query<ApiResponse<IAdmindashboard>, string>({
      query: (id) => `/admindashboard/${id}`,
      providesTags: ["admindashboard"],
    }),
    createAdmindashboard: builder.mutation<IAdmindashboard, Partial<IAdmindashboard>>({
      query: (body) => ({ url: "/admindashboard", method: "POST", body }),
      invalidatesTags: ["admindashboard"],
    }),
    updateAdmindashboard: builder.mutation<IAdmindashboard, Partial<IAdmindashboard> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/admindashboard/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["admindashboard"],
      }
    ),
    deleteAdmindashboard: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/admindashboard/${id}`, method: "DELETE" }),
      invalidatesTags: ["admindashboard"],
    }),
  }),
});

export const {
  useGetAdmindashboardsQuery,
  useGetAdmindashboardByIdQuery,
  useCreateAdmindashboardMutation,
  useUpdateAdmindashboardMutation,
  useDeleteAdmindashboardMutation,
} = admindashboardApi;
