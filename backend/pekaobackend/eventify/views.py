from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from eventify.models import OperationType, Profile, YearlyMaxRevenue, BusinessType
from eventify.serializers import OperationTypeSerializer, ProfileSerializer, YearlyMaxRevenueSerializer, BusinessTypeSerializer


def index(request):
    return HttpResponse(
        "What up dog glad somebody dug the commit history to actually see this message"
    )

@csrf_exempt
def businesstypes_list(request):
    """
    List all business types, or create a new business type
    """
    if request.method == 'GET':
        operation_types = OperationType.objects.all()
        operation_types_serializer = OperationTypeSerializer(operation_types, many=True)
        profiles = Profile.objects.all()
        profiles_serializer = ProfileSerializer(profiles, many=True)
        revenues = YearlyMaxRevenue.objects.all()
        revenues_serializer = YearlyMaxRevenueSerializer(revenues, many=True)

        return JsonResponse({'operation_types': operation_types_serializer.data,
                             'profiles': profiles_serializer.data,
                             'yearly_max_revenues': revenues_serializer.data}, safe=False)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        
        json_result = {
            'recommended_area': 'Warszawa (Ochota)',
            'current_predicted_revenue': 143000,
            'proposed_recommended_revenue': 211000,
        }

        return JsonResponse(json_result, status=201)
