 Please find the documentation link- https://web.postman.co/documentation/28442885-2efbd592-7640-4fcc-8def-fafde54c9550/publish?workspaceId=5c94b499-088f-4cd4-8a1f-3535ffc5c7ca


 The POST /api/auth/callback endpoint is used to handle the callback after authentication. Only Admins are authorized to check the status of the authentication process which contains the user's roles and if the email has been sent successfully or not.

 {
    "message": "Email sent successfully!",
    "roles": [
        "Admin",
        "User"
    ]
}