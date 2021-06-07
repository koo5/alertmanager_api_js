# AlertmanagerApi.GeneralApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](GeneralApi.md#getStatus) | **GET** /status | 



## getStatus

> AlertmanagerStatus getStatus()



Get current status of an Alertmanager instance and its cluster

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.GeneralApi();
apiInstance.getStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertmanagerStatus**](AlertmanagerStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

