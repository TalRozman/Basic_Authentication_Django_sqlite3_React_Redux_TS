from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Students(models.Model):
    user = models.ForeignKey(User, null=True,on_delete=models.SET_NULL)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName