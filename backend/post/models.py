import datetime

from django.db import models

class Post(models.Model):
    """
    writer = models.CharField(max_length=30)
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=130)
    comment = models.CharField(max_length=50)
    date = models.DateTimeField()
    upvote = models.IntegerField()
    downvote = models.IntegerField()
    position = models.IntegerField()
    end_story = models.BooleanField()
    """
    writer = models.CharField(max_length=30, default="익명")
    title = models.CharField(max_length=50, default="")
    content = models.CharField(max_length=130, default="")
    comment = models.CharField(max_length=50, default="")
    date = models.DateTimeField(default=datetime.datetime.now())
    upvote = models.IntegerField(default=0)
    downvote = models.IntegerField(default=0)
    position = models.IntegerField(default=0) # TODO: 포지션값 동적으로 받아와야함.
    end_story = models.BooleanField(default=False)

    def __str__(self):
        """A string representation of the model."""
        return self.title

class ElectedPost(Post):
    """Post와 구조적으로 동일."""
    pass