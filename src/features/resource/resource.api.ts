import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IResource } from "./resource.interface";

export const resourceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getResources: builder.query<ApiResponse<IResource[]>, void>({
      query: () => "/resource",
      providesTags: ["resource"],
    }),
    getResourceById: builder.query<ApiResponse<IResource>, string>({
      query: (id) => `/resource/${id}`,
      providesTags: ["resource"],
    }),
    createResource: builder.mutation<IResource, Partial<IResource>>({
      query: (body) => ({ url: "/resource", method: "POST", body }),
      invalidatesTags: ["resource"],
    }),
    updateResource: builder.mutation<IResource, Partial<IResource> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/resource/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["resource"],
      }
    ),
    deleteResource: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/resource/${id}`, method: "DELETE" }),
      invalidatesTags: ["resource"],
    }),
  }),
});

export const {
  useGetResourcesQuery,
  useGetResourceByIdQuery,
  useCreateResourceMutation,
  useUpdateResourceMutation,
  useDeleteResourceMutation,
} = resourceApi;
