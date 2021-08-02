from django.contrib import admin

from .models import Post, ElectedPost

admin.site.register(Post) # Admin gains access
admin.site.register(ElectedPost)