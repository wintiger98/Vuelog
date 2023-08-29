import { createWebHistory, createRouter } from "vue-router";
import PostList from "./components/PostList.vue";
import HomePage from "./components/HomePage.vue";
import PostDetail from "./components/PostDetail.vue";
import PostAuthor from "./components/PostAuthor.vue";
import PostComment from "./components/PostComment.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/list",
    component: PostList,
  },
  {
    path: "/detail/:id",
    component: PostDetail,
    children: [
      {
        path: "author",
        component: PostAuthor,
      },
      {
        path: "comment",
        component: PostComment,
      },
    ],
  },
  //   {
  //     // 아무문자가 입력되면 그냥 홈페이지
  //     // 순서에 따라 우선순위가 되있기 때문에 위에꺼가 실행됨
  //     path: "/:anything(.*)",
  //     component: HomePage,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
