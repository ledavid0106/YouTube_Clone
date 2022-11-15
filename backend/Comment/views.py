from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Comment
from rest_framework import status
from .serializers import CommentSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def comment_list(request, video_id):
    if request.method == "GET":
        comments = Comment.objects.all().filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
        



        
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def edit_comment(request, comment_id): 
    comments = get_object_or_404(Comment, id=comment_id)
    if request.method == 'PUT':
        serializer = CommentSerializer(comments, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

