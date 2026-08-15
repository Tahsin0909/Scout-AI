import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { INotification } from "./notification.interface";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<ApiResponse<INotification[]>, void>({
      query: () => "/notification",
      providesTags: ["notification"],
    }),
    getNotificationById: builder.query<ApiResponse<INotification>, string>({
      query: (id) => `/notification/${id}`,
      providesTags: ["notification"],
    }),
    createNotification: builder.mutation<INotification, Partial<INotification>>({
      query: (body) => ({ url: "/notification", method: "POST", body }),
      invalidatesTags: ["notification"],
    }),
    updateNotification: builder.mutation<INotification, Partial<INotification> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/notification/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["notification"],
      }
    ),
    deleteNotification: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/notification/${id}`, method: "DELETE" }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetNotificationByIdQuery,
  useCreateNotificationMutation,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
} = notificationApi;
