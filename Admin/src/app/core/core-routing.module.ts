import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'categorie',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/categorie/categorie.module').then(m => m.CategorieModule),
      },
      {
        path: 'article',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/article/article.module').then(m => m.ArticleModule),
      },
      {
        path: 'news',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/news/news.module').then(m => m.NewsModule),
      },
      {
        path: 'roadtoladakh',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/roadtoladakh/roadtoladakh.module').then(m => m.RoadtoladakhModule),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'accounts',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/accounts/accounts.module').then(m => m.AccountsModule),
      },
      {
        path: 'post',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/post/post.module').then(m => m.PostModule),
      },
      {
        path: 'must-to-do',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/must-to-do/must-to-do.module').then(m => m.MustToDoModule),
      },
      {
        path: 'slider',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/slider/slider.module').then(m => m.SliderModule),
      },
      {
        path: 'calendar',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/calendar/calendar.module').then(m => m.CalendarModule),
      },
      {
        path: 'business',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/business/business.module').then(m => m.BusinessModule),
      },
      {
        path: 'business-category',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/business-category/business-category.module').then(m => m.BusinesscategoryModule),
      },
      {
        path: 'videos',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/videos/videos.module').then(m => m.VideosModule),
      },
      {
        path: 'gallery',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/gallery/gallery.module').then(m => m.GalleryModule),
      },
      {
        path: 'faq',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/faq/faq.module').then(m => m.FaqModule),
      }
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/categorie',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
