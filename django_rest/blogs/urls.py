from django.urls import path
from .views import BlogDetailView, BlogListView
from . import views

urlpatterns = [
    path('blogs/', BlogListView.as_view()),
    path('blogs/<int:pk>/', BlogDetailView.as_view())
]