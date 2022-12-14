from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Reply
from rest_framework import status
from .serializers import ReplySerializer
from django.shortcuts import render
from comments.models import Comment
# Create your views here.


@api_view(['GET', "POST"])
@permission_classes([IsAuthenticated])
def reply_list(request, pk):
    comment = Comment.objects.get(id=pk)
    if request.method == "GET":
        replies = Reply.objects.all().filter(comment=comment)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
