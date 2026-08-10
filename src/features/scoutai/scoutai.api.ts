import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IScoutai } from "./scoutai.interface";

export const scoutaiApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScoutais: builder.query<ApiResponse<IScoutai[]>, void>({
      query: () => "/scoutai",
      providesTags: ["scoutai"],
    }),
    getScoutaiById: builder.query<ApiResponse<IScoutai>, string>({
      query: (id) => `/scoutai/${id}`,
      providesTags: ["scoutai"],
    }),
    createScoutai: builder.mutation<IScoutai, Partial<IScoutai>>({
      query: (body) => ({ url: "/scoutai", method: "POST", body }),
      invalidatesTags: ["scoutai"],
    }),
    updateScoutai: builder.mutation<IScoutai, Partial<IScoutai> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/scoutai/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["scoutai"],
      }
    ),
    deleteScoutai: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/scoutai/${id}`, method: "DELETE" }),
      invalidatesTags: ["scoutai"],
    }),
  }),
});

export const {
  useGetScoutaisQuery,
  useGetScoutaiByIdQuery,
  useCreateScoutaiMutation,
  useUpdateScoutaiMutation,
  useDeleteScoutaiMutation,
} = scoutaiApi;
