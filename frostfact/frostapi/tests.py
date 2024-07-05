from django.test import TestCase
from django.contrib.auth.models import User
from .models import ClientProfile

class ClientProfileModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Create a user for the client profile
        cls.user = User.objects.create_user(username='testuser', password='testpassword')

        # Create a client profile
        cls.client_profile = ClientProfile.objects.create(
            client_first_name='Test',
            client_last_name='Client',
            client_business='Test Business',
            client_email='testclient@example.com',
            client_event_space='Test Event Space'
        )

    def test_client_profile_str_representation(self):
        """
        Test that the string representation of a ClientProfile instance is correct.
        """
        expected_output = f"{self.client_profile.client_first_name} {self.client_profile.client_last_name} - {self.client_profile.client_business}"
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
            client_first_name='New',
            client_last_name='Client',
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
        self.assertEqual(retrieved_client_profile.client_first_name, self.client_profile.client_first_name)

    def test_client_profile_field_lengths(self):
        """
        Test that the field lengths of a ClientProfile instance are correct.
        """
        field_max_lengths = {
            'client_first_name': 255,
            'client_last_name': 255,
            'client_business': 255,
            'client_phone': 15,
            'address': 255,
            'client_email': 254,  # Django's default max length for EmailField
            'client_event_space': 255
        }

        for field, max_length in field_max_lengths.items():
            with self.subTest(field=field):
                self.assertEqual(self.client_profile._meta.get_field(field).max_length, max_length)
