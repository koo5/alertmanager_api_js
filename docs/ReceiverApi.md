# AlertmanagerApi.ReceiverApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReceivers**](ReceiverApi.md#getReceivers) | **GET** /receivers | 



## getReceivers

> [Receiver] getReceivers()



Get list of all receivers (name of notification integrations)

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.ReceiverApi();
apiInstance.getReceivers((error, data, response) => {
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

[**[Receiver]**](Receiver.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

