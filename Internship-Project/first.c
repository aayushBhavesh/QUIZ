#include<stdio.h>
void merge(int arr[],int s,int mid,int e)
{
int n1=mid-s+1;
int n2=e-mid;
int l[n1],r[n2];
for(int i=0;i<n1;i++)
{
l[i]=arr[s+i];
}
for(int j=0;j<n2;j++)
{
r[j]=arr[mid+1+j];
}
int i=0,j=0,k=s;
while(i<n1 && j<n2)
{
if(l[i]<r[j])
{
arr[k]=l[i];
i=i+1;
}
else
{
arr[k]=r[j];
j=j+1;
}
k++;
}
while(i<n1)
{
arr[k]=l[i];
i=i+1;
k++;
}
while(j<n2)
{
arr[k]=r[j];
j=j+1;
k++;
}
}
void mergesort(int arr[],int st,int en)
{if(st>=en)
return;
int mid=(st+en)/2;
mergesort(arr,st,mid);
mergesort(arr,mid+1,en);
merge(arr,st,mid,en);
}
void main(){
int arr[]={0,-1,8,1,1};
int size=sizeof(arr)/sizeof(arr[0]);
mergesort(arr,0,size-1);
printf("Array after merge sort is:");
for(int i=0;i<size;i++){
printf("%d\t",arr[i]);
}
}



// complexity:
// best:O(nlogn)
// worst:O(nlogn)