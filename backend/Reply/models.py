from django.db import models
from authentication.models import User

class Reply(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    comment = models.ForeignKey(User, related_name="commentkey", to_field='username', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
