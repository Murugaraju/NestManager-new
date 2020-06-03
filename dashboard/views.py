from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import Pg,Floor,Room
from .serializers import PgModelSerializer,FloorModelSerializer,RoomModelSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
import time
# Create your views here.
def sample(request):
    return HttpResponse('hurrays')



class PgModelViewSet(ModelViewSet):
    queryset=Pg.objects.all()
    serializer_class=PgModelSerializer

    def list(self,request,*args,**kwargs):
        time.sleep(1)
        return super().list(request,*args,**kwargs)

class FloorModelViewSet(ModelViewSet):
    queryset=Floor.objects.all()
    serializer_class=FloorModelSerializer
    


    def get_queryset(self):
        print('printing the values',self.kwargs)
       
        pgid= self.kwargs.get('pgid')
        queryset=self.queryset.filter(pg_id=pgid)
        return queryset
    
    
class RoomModelViewSet(ModelViewSet):
    queryset=Room.objects.all()
    serializer_class=RoomModelSerializer
    def get_queryset(self):
        print('printing the values',self.kwargs)
       
        flid= self.kwargs.get('flid')
        queryset=self.queryset.filter(floor_id=flid)
        return queryset
    
       