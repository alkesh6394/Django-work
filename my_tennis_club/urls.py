from django.contrib import admin
from django.urls import path
from app.views import EmployeeList, EmployeeDetail,EmployeeDeleteView,EmployeeUpdateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('employees/', EmployeeList.as_view(), name='employee-list'),
    path('employees/<int:pk>/', EmployeeDetail.as_view(), name='employee-detail'),
    path('employees/<int:pk>/update/', EmployeeUpdateView.as_view(), name='employee-update'),
    path('employees/<int:pk>/delete/', EmployeeDeleteView.as_view(), name='employee-delete'),
]
