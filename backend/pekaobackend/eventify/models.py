from django.db import models


class OperationType(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class Profile(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class YearlyMaxRevenue(models.Model):
    revenue = models.IntegerField()

    def __str__(self):
        return self.revenue


class BusinessType(models.Model):
    operation_type = models.ForeignKey(OperationType, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    yearly_max_revenue = models.ForeignKey(YearlyMaxRevenue, on_delete=models.CASCADE)

    def __str__(self):
        return f"Operation type: {self.operation_type},\
        profile: {self.profile}, max revenue: {self.yearly_max_revenue}"
