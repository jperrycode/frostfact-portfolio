# tests.py

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth.models import User
from .models import ClientProfile
from .serializers import ClientProfileSerializer
from rest_framework_simplejwt.tokens import RefreshToken

class ClientApiViewTest(APITestCase):

    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(username='testuser', password='testpass')

        # Create test data
        self.client_profile = ClientProfile.objects.create(
            client_first_name="Test",
            client_last_name="User",
            client_business="Test Business",
            client_phone="1234567890",
            address="123 Test St",
            client_email="test@example.com",
            client_event_space="Test Event Space",
            client_special_needs="None",
            slug="test-business"
        )

        # Define the URL
        self.url = reverse('client_data', kwargs={'slug': self.client_profile.slug})

        # Initialize the client
        self.client = APIClient()

        # Get JWT token for the user
        refresh = RefreshToken.for_user(self.user)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {refresh.access_token}')

    def test_get_client_profile(self):
        # Send GET request
        response = self.client.get(self.url)

        # Get expected data
        serializer = ClientProfileSerializer(self.client_profile)

        # Assert response status and data
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)
