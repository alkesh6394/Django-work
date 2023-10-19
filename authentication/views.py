from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoginSerializer

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            # Implement any additional logic you need here.
            # For example, you can create a token and return it.
            return Response({'message': 'Login successful', 'user_id': user.id})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)