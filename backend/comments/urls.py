from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comment),
    path('<str:video_id>/', views.comment_list),
    path('<int:comment_id>/edit/', views.edit_comment),
    path('<int:pk>/replies/', include('replies.urls'))
]
