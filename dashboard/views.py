from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import Pg,Floor,Room
from .serializers import PgModelSerializer,FloorModelSerializer,RoomModelSerializer
# Create your views here.
def sample(request):
    return HttpResponse('hurrays')



class PgModelViewSet(ModelViewSet):
    queryset=Pg.objects.all()
    serializer_class=PgModelSerializer

class FloorModelViewSet(ModelViewSet):
    queryset=Floor.objects.all()
    serializer_class=FloorModelSerializer

class RoomModelViewSet(ModelViewSet):
    queryset=Room.objects.all()
    serializer_class=RoomModelSerializer