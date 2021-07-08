from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from pytils.translit import slugify


class Service(models.Model):
    seoDescription =  models.TextField(verbose_name="Тег Description")
    seoKeywords =  models.TextField(verbose_name="Тег Keywords")

    imageAnons = models.FileField(verbose_name="Кортинка анонса", upload_to='services_images/', null=True, blank=True)
    image = models.ImageField(verbose_name="Кортинка", upload_to='services_images/', null=True, blank=True)

    title =  models.TextField(verbose_name="Наименование")
    desc  = RichTextUploadingField(verbose_name="Описание")

    def __str__(self) -> str:
        return self.title
    slug = models.SlugField(unique=True)

    
    class Meta:
        verbose_name = "Услугу"
        verbose_name_plural = "Услуги"

class News(models.Model):
    seoDescription =  models.TextField(verbose_name="Тег Description")
    seoKeywords =  models.TextField(verbose_name="Тег Keywords")

    newsDate = models.DateField(verbose_name="Дата публикации", null=True, blank=True, editable=True,)
    imageAnons = models.FileField(verbose_name="Кортинка анонса", upload_to='news_images/', null=True, blank=True)
    image = models.ImageField(verbose_name="Кортинка", upload_to='news_images/', null=True, blank=True)

    title =  models.TextField(verbose_name="Наименование")
    desc  = RichTextUploadingField(verbose_name="Описание")

    def __str__(self) -> str:
        return self.title
    slug = models.SlugField(unique=True)

    
    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"