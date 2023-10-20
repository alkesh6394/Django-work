from django.contrib import admin
from django.urls import path
from app.views import EmployeeList, EmployeeDetail
from django.urls import include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('employees/', EmployeeList.as_view(), name='employee-list'),
    path('employees/<int:pk>/', EmployeeDetail.as_view(), name='employee-detail'),
    path('api/', include('authentication.urls')),
]

