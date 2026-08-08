import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IMetricksandcharts } from "./metricksandcharts.interface";

export const metricksandchartsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetricksandchartss: builder.query<ApiResponse<IMetricksandcharts[]>, void>({
      query: () => "/metricksandcharts",
      providesTags: ["metricksandcharts"],
    }),
    getMetricksandchartsById: builder.query<ApiResponse<IMetricksandcharts>, string>({
      query: (id) => `/metricksandcharts/${id}`,
      providesTags: ["metricksandcharts"],
    }),
    createMetricksandcharts: builder.mutation<IMetricksandcharts, Partial<IMetricksandcharts>>({
      query: (body) => ({ url: "/metricksandcharts", method: "POST", body }),
      invalidatesTags: ["metricksandcharts"],
    }),
    updateMetricksandcharts: builder.mutation<IMetricksandcharts, Partial<IMetricksandcharts> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/metricksandcharts/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["metricksandcharts"],
      }
    ),
    deleteMetricksandcharts: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/metricksandcharts/${id}`, method: "DELETE" }),
      invalidatesTags: ["metricksandcharts"],
    }),
  }),
});

export const {
  useGetMetricksandchartssQuery,
  useGetMetricksandchartsByIdQuery,
  useCreateMetricksandchartsMutation,
  useUpdateMetricksandchartsMutation,
  useDeleteMetricksandchartsMutation,
} = metricksandchartsApi;
