from django.urls import path, include
from . import views

urlpatterns = [
    path('api/podcast/', views.PodcastListCreate.as_view() )
]