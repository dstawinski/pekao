from django.contrib import admin

from .models import OperationType, Profile, YearlyMaxRevenue, BusinessType

admin.site.register(OperationType)
admin.site.register(Profile)
admin.site.register(YearlyMaxRevenue)
admin.site.register(BusinessType)
