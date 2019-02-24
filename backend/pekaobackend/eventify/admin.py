from django.contrib import admin

from .models import OperationType, Profile, YearlyMaxRevenue, BusinessType, Area

admin.site.register(OperationType)
admin.site.register(Profile)
admin.site.register(YearlyMaxRevenue)
admin.site.register(BusinessType)
admin.site.register(Area)
