from django.contrib import admin

from .models import Post

admin.site.register(Post) # Admin gains access to post