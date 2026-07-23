import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IExploreMap } from "./explore-map.interface";

export const exploreMapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExploreMaps: builder.query<ApiResponse<IExploreMap[]>, void>({
      query: () => "/explore-map",
      providesTags: ["explore-map"],
    }),
    getExploreMapById: builder.query<ApiResponse<IExploreMap>, string>({
      query: (id) => `/explore-map/${id}`,
      providesTags: ["explore-map"],
    }),
    createExploreMap: builder.mutation<IExploreMap, Partial<IExploreMap>>({
      query: (body) => ({ url: "/explore-map", method: "POST", body }),
      invalidatesTags: ["explore-map"],
    }),
    updateExploreMap: builder.mutation<IExploreMap, Partial<IExploreMap> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/explore-map/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["explore-map"],
      }
    ),
    deleteExploreMap: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/explore-map/${id}`, method: "DELETE" }),
      invalidatesTags: ["explore-map"],
    }),
  }),
});

export const {
  useGetExploreMapsQuery,
  useGetExploreMapByIdQuery,
  useCreateExploreMapMutation,
  useUpdateExploreMapMutation,
  useDeleteExploreMapMutation,
} = exploreMapApi;
