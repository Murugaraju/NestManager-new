from rest_framework.serializers import ModelSerializer
from .models import *


class PgModelSerializer(ModelSerializer):
    class Meta:
        model=Pg
        fields='__all__'

class FloorModelSerializer(ModelSerializer):
    class Meta:
        model=Floor
        fields='__all__'


class RoomModelSerializer(ModelSerializer):
    class Meta:
        model=Room
        fields='__all__'

