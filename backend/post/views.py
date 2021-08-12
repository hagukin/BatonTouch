from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response

from .models import Post, ElectedPost
from .serializers import PostSerializer, NovelSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class Novel(generics.ListCreateAPIView):
    queryset = ElectedPost.objects.all()
    serializer_class = NovelSerializer

from rest_framework.views import APIView
class PostAPIView(APIView):
    def get(self, request):
        post = Post.objects.all()
        serializer = PostSerializer(post, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

