# Generated by Django 2.1.5 on 2019-02-23 14:21

from django.db import migrations, models
import django.db.models.deletion

def load_options(apps, schema_editor):
    OperationType = apps.get_model("eventify", "OperationType")
    operation_type = OperationType(name='Restaurant')
    operation_type.save()
    operation_type = OperationType(name='Grocery')
    operation_type.save()
    operation_type = OperationType(name='Hairdresser')
    operation_type.save()
    operation_type = OperationType(name='Dentist')
    operation_type.save()

    Profile = apps.get_model("eventify", "Profile")
    profile = Profile(name='Prestige')
    profile.save()
    profile = Profile(name='Medium')
    profile.save()
    profile = Profile(name='Budget')
    profile.save()

    YearlyMaxRevenue = apps.get_model("eventify", "YearlyMaxRevenue")
    yearly_max_revenue = YearlyMaxRevenue(revenue=100000)
    yearly_max_revenue.save()
    yearly_max_revenue = YearlyMaxRevenue(revenue=1000000)
    yearly_max_revenue.save()
    yearly_max_revenue = YearlyMaxRevenue(revenue=10000000)
    yearly_max_revenue.save()

def delete_options(apps, schema_editor):
    OperationType = apps.get_model("eventify", "OperationType")
    OperationType.objects.all().delete()
    Profile= apps.get_model("eventify", "Profile")
    Profile.objects.all().delete()
    YearlyMaxRevenue = apps.get_model("eventify", "YearlyMaxRevenue")
    YearlyMaxRevenue.objects.all().delete()

class Migration(migrations.Migration):

    dependencies = [
        ('eventify', '0002_auto_20190223_1321'),
    ]

    operations = [
        migrations.CreateModel(
            name='OperationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='YearlyMaxRevenue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('revenue', models.IntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name='businesstype',
            name='operation_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventify.OperationType'),
        ),
        migrations.AlterField(
            model_name='businesstype',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventify.Profile'),
        ),
        migrations.AlterField(
            model_name='businesstype',
            name='yearly_max_revenue',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventify.YearlyMaxRevenue'),
        ),
        migrations.RunPython(load_options, delete_options),
    ]
