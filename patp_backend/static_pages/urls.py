from django.contrib import admin
from django.urls import path, include 
from static_pages.views import *


urlpatterns = [
    #path('services/create/', ServiceCreateView.as_view()),
    path('services/list/', ServiceListView.as_view()),
    #path('services/update/<int:pk>/', ServiceUpdateView.as_view()),
    #path('services/destroy/<int:pk>/', ServiceDestroyView.as_view()),
    path('services/detail/<str:slug>/', ServiceDetailView.as_view()),
    path('news/list/', NewsListView.as_view()),
    path('news/detail/<str:slug>/', NewsDetailView.as_view()),
]
