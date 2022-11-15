from django.urls import path, include
from replies import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.reply_list),


]
