import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IMember } from "./member.interface";

export const memberApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMembers: builder.query<ApiResponse<IMember[]>, void>({
      query: () => "/member",
      providesTags: ["member"],
    }),
    getMemberById: builder.query<ApiResponse<IMember>, string>({
      query: (id) => `/member/${id}`,
      providesTags: ["member"],
    }),
    createMember: builder.mutation<IMember, Partial<IMember>>({
      query: (body) => ({ url: "/member", method: "POST", body }),
      invalidatesTags: ["member"],
    }),
    updateMember: builder.mutation<IMember, Partial<IMember> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/member/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["member"],
      }
    ),
    deleteMember: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/member/${id}`, method: "DELETE" }),
      invalidatesTags: ["member"],
    }),
  }),
});

export const {
  useGetMembersQuery,
  useGetMemberByIdQuery,
  useCreateMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
} = memberApi;
