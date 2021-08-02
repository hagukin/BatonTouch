from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'writer',
            'title',
            'content',
            'comment',
            'date',
            'upvote',
            'downvote',
            'position',
            'end_story'
        )
        model = Post

class NovelSerializer(PostSerializer):
    """PostSerializer과 동일"""
    pass