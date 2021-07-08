from django.contrib import admin
from .models import News, Service
from ckeditor.widgets import CKEditorWidget

class ServiceAdmin(admin.ModelAdmin):  
    prepopulated_fields = {'slug':('title',)}

admin.site.register(Service, ServiceAdmin)

class NewsAdmin(admin.ModelAdmin):  
    prepopulated_fields = {'slug':('title',)}
    
admin.site.register(News, NewsAdmin)