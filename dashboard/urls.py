
from django.urls import path,include
from .views import sample,PgModelViewSet,FloorModelViewSet, RoomModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'pg',PgModelViewSet)
router.register(r'(?P<pgid>\d+)/floor',FloorModelViewSet)
router.register(r'(?P<pgid>\d+)/floor/(?P<flid>\d+)/room',RoomModelViewSet)



urlpatterns = [
    path('test',sample),
    path('',include(router.urls))
]