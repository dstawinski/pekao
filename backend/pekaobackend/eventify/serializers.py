from rest_framework import serializers
from eventify.models import BusinessType

class BusinessTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessType
        fields = ('operation_type', 'profile', 'yearly_max_revenue')
