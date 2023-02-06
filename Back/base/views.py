from .models import Students
from .serializers import StudentsSerializer,MyTokenObtainPairSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def index(req):
    return Response ( "hello")

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def get_students(req):
    usr = req.user
    myModel = usr.students_set.all()
    serializer = StudentsSerializer(myModel, many=True)
    return Response(serializer.data)
    


@permission_classes([IsAuthenticated])
class MyStudentsView(APIView):
    def get(self, request):
        usr = request.user
        my_model = usr.students_set.all()
        serializer = StudentsSerializer(my_model, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    def put(self, request, pk):
        my_model = Students.objects.get(pk=pk)
        serializer = StudentsSerializer(my_model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    def delete(self, request, pk):
        my_model = Students.objects.get(pk=pk)
        my_model.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)