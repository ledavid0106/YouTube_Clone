from django.db import models


class Reply(models.Model):
    user = models.ForeignKey(User, to_field='username')
    comment = models.ForeignKey(User, to_field='username')
    text = models.CharField(max_length=255)
