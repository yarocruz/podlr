from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.URLField()
    link = models.URLField()
    # for later average_ratings which will be a relationship with a different table model?

class User(AbstractUser):
    name = models.CharField(max_length=250)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []