from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from django.contrib.auth.models import User
from .models import ClientProfile

class ClientProfileModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Create a user for the client profile
        user = User.objects.create_user(username='testuser', password='testpassword')

        # Create a client profile
        cls.client_profile = ClientProfile.objects.create(
            client_name='Test Client',
            client_business='Test Business',
            client_email='testclient@example.com',
            client_event_space='Test Event Space'
        )

    def test_client_profile_str_representation(self):
        """
        Test that the string representation of a ClientProfile instance is correct.
        """
        expected_output = f"{self.client_profile.client_name}"
        self.assertEqual(str(self.client_profile), expected_output)

    def test_client_profile_creation(self):
        """
        Test that a ClientProfile instance can be created and saved to the database.
        """
        self.assertTrue(bool(self.client_profile))

    def test_client_profile_unique_email(self):
        """
        Test that a ClientProfile instance with a unique email can be created and saved to the database.
        """
        new_client_profile = ClientProfile.objects.create(
            client_name='New Client',
            client_business='New Business',
            client_email='newclient@example.com',
            client_event_space='New Event Space'
        )
        self.assertTrue(bool(new_client_profile))

    def test_client_profile_retrieval(self):
        """
        Test that a ClientProfile instance can be retrieved from the database.
        """
        retrieved_client_profile = ClientProfile.objects.get(pk=self.client_profile.pk)
        self.assertEqual(retrieved_client_profile.client_name, self.client_profile.client_name)

    def test_client_profile_field_lengths(self):
        """
        Test that the field lengths of a ClientProfile instance are correct.
        """
        self.assertEqual(self.client_profile.client_name.max_length, 255)
        self.assertEqual(self.client_profile.client_business.max_length, 255)
        self.assertEqual(self.client_profile.client_phone.max_length, 15)
        self.assertEqual(self.client_profile.address.max_length, 255)
        self.assertEqual(self.client_profile.client_email.max_length, 254)  # Django automatically trims the '@' symbol
        self.assertEqual(self.client_profile.client_event_space.max_length, 255)