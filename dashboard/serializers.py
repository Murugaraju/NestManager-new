
from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GetTokenSerializers(serializers.Serializer):
    user = serializers.CharField(max_length=200)


