from django.db import models

# Create your models here.
class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.URLField()
    link = models.URLField()
    # for later average_ratings which will be a relationship with a different table model?