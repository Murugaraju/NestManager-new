from django.conf.urls import url
from django.urls import path
from . import (views)
urlpatterns = [
    path('test',views.sample),
    url(r'^api-token-auth/', views.CustomAuthToken.as_view())

]
