from .models import Reply
from rest_framework import serializers

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user', 'comment', 'text']
        depth = 1