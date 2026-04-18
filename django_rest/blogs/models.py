from django.db import models

class Blogs(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    author = models.CharField(max_length=100)
