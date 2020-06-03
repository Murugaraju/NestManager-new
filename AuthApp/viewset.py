from rest_framework import viewsets
from . import (Serializers, models)


class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = Serializers.UserSerailizers

    def get_queryset(self):
        if self.request.query_params.get('user', None) == 'currentuser':
           return models.User.objects.filter(username=self.request.user.username)
        return super().get_queryset()

