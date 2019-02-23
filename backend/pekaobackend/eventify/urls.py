from django.urls import path

from . import views

urlpatterns = [
    path('api/', views.businesstypes_list),
    path('', views.index, name='index'),
]
