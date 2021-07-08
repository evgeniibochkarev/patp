from django.db.models import fields
from rest_framework import serializers
from static_pages.models import News, Service

class ServiceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

class ServiceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'slug',
            'title',
            'imageAnons',
        ]
class NewsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"

class NewsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = fields = [
            'slug',
            'title',
            'newsDate',
            'imageAnons',
        ]
