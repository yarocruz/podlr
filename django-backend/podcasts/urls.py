from django.urls import path, include
from . import views

urlpatterns = [
    path('api/podcast/', views.PodcastListCreate.as_view() ),
    path('register', views.RegisterView.as_view() ),
    path('login', views.LoginView.as_view() ),
    path('user', views.UserView.as_view() ),
    path('logout', views.LogoutView.as_view() )
]