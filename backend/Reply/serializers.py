from .models import Reply
from rest_framework import serializers

class Reply(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user', 'comment', 'text']