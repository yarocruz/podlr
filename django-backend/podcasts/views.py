from .models import Podcast
from .serializers import PodcastSerializer
from rest_framework import generics

# Create your views here.
class PodcastListCreate(generics.ListCreateAPIView):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer