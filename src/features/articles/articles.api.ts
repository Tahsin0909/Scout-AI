import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IArticles } from "./articles.interface";

export const articlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticless: builder.query<ApiResponse<IArticles[]>, void>({
      query: () => "/articles",
      providesTags: ["articles"],
    }),
    getArticlesById: builder.query<ApiResponse<IArticles>, string>({
      query: (id) => `/articles/${id}`,
      providesTags: ["articles"],
    }),
    createArticles: builder.mutation<IArticles, Partial<IArticles>>({
      query: (body) => ({ url: "/articles", method: "POST", body }),
      invalidatesTags: ["articles"],
    }),
    updateArticles: builder.mutation<IArticles, Partial<IArticles> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/articles/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["articles"],
      }
    ),
    deleteArticles: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/articles/${id}`, method: "DELETE" }),
      invalidatesTags: ["articles"],
    }),
  }),
});

export const {
  useGetArticlessQuery,
  useGetArticlesByIdQuery,
  useCreateArticlesMutation,
  useUpdateArticlesMutation,
  useDeleteArticlesMutation,
} = articlesApi;
