from rest_framework.exceptions import ValidationError
from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)
    error_type = dict(
        [('validation', 'Validation Error')]
    )
    front_end_mapping = dict(
        [
            ('description', 'Dependency Description'),
            ('date_identified', 'Date identified'),
            ('target_eta', 'Target ETA'),
            ('type', 'Type'),
            ('responsible', 'Responsible'),
            ('status', 'Status'),
            ('impact_description', 'Impact Description'),
            ('owner ', 'Owner'),
            ('impacted_milestone', 'Impacted Milestone '),
        ]
    )
    if isinstance(exc, ValidationError):
        # Now add the HTTP status code to the response.
        response.status_code = 203
        custom_response = {}
        if response is not None:
            custom_response['Error_Type'] = error_type.get('validation')
            custom_response['Error'] = { front_end_mapping.get(i, i):j[0] for i, j in response.data.items()}

            response.data = None
            response.data = custom_response
            # response.data['errors'] = response.data
    try:
        response.status_code = 203
    except:
        pass
    return response