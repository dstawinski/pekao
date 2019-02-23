from django.db import models

class BusinessType(models.Model):
    operation_type = models.CharField(max_length=50)
    profile = models.CharField(max_length=50)
    yearly_max_revenue = models.IntegerField()
