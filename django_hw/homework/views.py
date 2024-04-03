from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def DoMyHomework(request):
    #return HttpResponse('숙제를 합시다~!')
    return render(request, 'hw.html')