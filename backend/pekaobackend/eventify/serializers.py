from rest_framework import serializers
from eventify.models import OperationType, Profile, YearlyMaxRevenue, BusinessType

class OperationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperationType
        fields = ('name',)

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name',)

class YearlyMaxRevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = YearlyMaxRevenue
        fields = ('revenue',)

class BusinessTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessType
        fields = ('operation_type', 'profile', 'yearly_max_revenue',)
