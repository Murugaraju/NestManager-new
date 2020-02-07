
from django.urls import path
from .views import sample
urlpatterns = [
    path('test',sample)
]
