from django.urls import path, include
from comment import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('<int:video_id>/', views.comment_list),
    path('', views.user_comment),

]
