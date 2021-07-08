from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from static_pages.serializers import NewsDetailSerializer, NewsListSerializer, ServiceDetailSerializer, ServiceListSerializer
from static_pages.models import Service, News
from rest_framework.permissions import IsAdminUser
from time import sleep

class ServiceCreateView(generics.CreateAPIView):
    serializer_class = ServiceDetailSerializer 
    permission_classes = (IsAdminUser, )


class ServiceUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = ServiceDetailSerializer
    permission_classes = (IsAdminUser, )

class ServiceDestroyView(generics.DestroyAPIView):
    serializer_class = ServiceDetailSerializer
    permission_classes = (IsAdminUser, )

class ServiceDetailView(generics.RetrieveAPIView):
    serializer_class = ServiceDetailSerializer
    queryset = Service.objects.all()
    lookup_field = 'slug'

class ServiceListView(generics.ListAPIView):
    serializer_class = ServiceListSerializer
    queryset = Service.objects.all()

class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsListSerializer
    

class NewsDetailView(generics.RetrieveAPIView):
    serializer_class = NewsDetailSerializer
    queryset = News.objects.all()
    lookup_field = 'slug'
