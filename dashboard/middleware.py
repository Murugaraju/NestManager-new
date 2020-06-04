from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponse
from .models import Pg,Floor
from django.core.exceptions import ObjectDoesNotExist

class Handler404forPgidFlid(MiddlewareMixin):
    """
    This class is to identify the pg id or flid if not
    through 404
    """
    # def __init__(self, get_response=None):
    #     self.get_response=get_response
    def process_view(self,request, view_func, view_args, view_kwargs):
        # print('printing while coming for process view',dir(request.session),request.session)
        
        if view_kwargs.get('pgid'):
            try:
                Pg.objects.get(pk=view_kwargs['pgid'])
            except ObjectDoesNotExist:
                return HttpResponse('Opps No existing pg with id {}'.format(view_kwargs['pgid']),status=404)
        if view_kwargs.get('flid'):
            try:
                Floor.objects.get(pk=view_kwargs['flid'],pg_id=view_kwargs['pgid'])
            except ObjectDoesNotExist:
                return HttpResponse('Opps No existing pg id {} floor with id {}'.format(view_kwargs['pgid'],view_kwargs['flid']),status=404)
    # def process_response(self,request,response):
    #     print("I came in response",dir(response))
    #     response.set_cookie('asdfasdfasdf','asdfasdf', max_age=None)
    #     return response