from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse(
        "What up dog glad somebody dug the commit history to actually see this message"
    )
