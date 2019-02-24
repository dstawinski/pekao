from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from eventify.models import OperationType, Profile, YearlyMaxRevenue, BusinessType, Area
from eventify.serializers import OperationTypeSerializer, ProfileSerializer, YearlyMaxRevenueSerializer, BusinessTypeSerializer

import pandas as pd
import pickle
from sklearn import svm
import requests

file = open("eventify/svnmodel.pkl", "rb")
regr_model = pickle.load(file)

def transform_input(category, area):
    model_input = {
        'Building Materials & Services':0,
        'Business & Personal Services':0,
        'Clothing':0,
        'Entertainment':0,
        'Financial Services':0,
        'Food & Drink':0,
        'General Retail & High Street':0,
        'Health':0,
        'Motoring':0,
        'Petrol':0,
        'Restaurants':0,
        'Services':0,
        'Supermarket':0,
        'Training & Education':0,
        'Travel':0,
        'Wholesale':0,
        'WARSZAWA':0,
        'Warszawa (Bemowo)':0,
        'Warszawa (Białołęka)':0,
        'Warszawa (Bielany)':0,
        'Warszawa (Mokotów)':0,
        'Warszawa (Ochota)':0,
        'Warszawa (Praga-Południe)':0,
        'Warszawa (Praga-Północ)':0,
        'Warszawa (Rembertów)':0,
        'Warszawa (Targówek)':0,
        'Warszawa (Ursus)':0,
        'Warszawa (Ursynów)':0,
        'Warszawa (Wawer)':0,
        'Warszawa (Wesoła)':0,
        'Warszawa (Wilanów)':0,
        'Warszawa (Wola)':0,
        'Warszawa (Włochy)':0,
        'Warszawa (Śródmieście)':0,
        'Warszawa (Żoliborz)':0,
    }
    model_input[category] = 1
    model_input[area] = 1

    return pd.DataFrame(pd.Series(model_input)).transpose()

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
        op_type = request.POST.get('operation_type', '')
        scores = [(regr_model.predict(transform_input(op_type, str(area)))[0], str(area)) for area in list(Area.objects.all())]
        minimal_revenue = min(scores, key=lambda x: x[0])
        maximal_revenue = max(scores, key=lambda x: x[0])

        difference = maximal_revenue[0]/minimal_revenue[0]

        json_result = {
            'recommended_area': maximal_revenue[1],
            'potential_gain': difference,
        }

        return JsonResponse(json_result, status=201)
